import Image from 'next/image'
import { languages } from "../../constants";
import data from '/public/data.json';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


const pages = data.fields.pages[languages.en.model];


export default function(props){
   
    const defaultLang = languages[props.locale].model;
    const title = props.page.fields.title[defaultLang];
    const body = props.page.fields.body[defaultLang];
    const banner = props.page.fields.banner[defaultLang];

    return (
        <main className={`${styles.main} ${inter.className}`}>
           
            <Image 
                src={`https://${banner.fields.file[defaultLang].url}`}
                width={100}
                height={100}
                alt={banner.fields.title[defaultLang]}
            />
            
            <h1>{title}</h1>
            
            {documentToReactComponents(body)}

        </main> 
    )
}

export async function getStaticPaths(props){

    const pathEN = pages.map(( item ) => ({
            params: {
                slug: [item.fields.slug[languages.en.model]]
            },
            locale: languages.en.route
        })
    )

    const pathES = pages.map(( item ) => ({
            params: {
                slug: [item.fields.slug[languages.es.model]]
            },
            locale: languages.es.route
        }))

    const allPaths = [ ...pathEN, ...pathES ];

    return {
        paths: allPaths,
        fallback:false
    }
}   

export async function getStaticProps(props){
    const { params: { slug }, locale, locales } = props;
    const pageSlug = slug.join("/");
    const [page] = pages.filter((item) => {
        const matchingItem = item.fields.slug[languages[locale].model];
        return matchingItem === pageSlug;
    });
    const [altLocale] = locales.filter((lang) => lang !== locale);
    const altSlug = page.fields.slug[languages[altLocale].model];

    return {
        props: {
            pages,
            page,
            slug: pageSlug,
            locale,
            locales,
            altSlug
        }
    }
}