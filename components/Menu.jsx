import Link from 'next/link';
import React from 'react'
import { languages } from '../constants';

export const Menu = (props) => {

    const { pages, locale } = props || {};

    const menu = pages?.map((page ) => {
        return (
            <Link 
                href={`/${page.fields.slug[languages[locale].model]}`} 
                key={page.sys.id}
                locale={locale}
            >
                {page.fields.title[languages[locale].model]}
            </Link>
        )
    })
    return (
        <div className='menu'>
            <Link 
                href='/'
                locale={locale}
            >
                Home
            </Link>

            {menu}
        </div>
    )
}
