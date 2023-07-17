import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
import { languages } from '../../constants';
import data from '/public/data.json';
const pages = data.fields.pages[languages.en.model];

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  const { site } = props;
  return (
    
    <main className={`${styles.main} ${inter.className}`}>
      <h1>{ site }</h1>
    </main>
    
  )
}

export async function getStaticProps(props){
  const contentfulModel = languages[props.locale].model;
  const site = data.fields.title[contentfulModel];
  return {
    props: {
      ...props,
      site,
      pages
    }
  }
}