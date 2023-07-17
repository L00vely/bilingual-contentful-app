import '@/styles/globals.css'
import { LanguageToggle } from '../../components/LanguageToggle';
import { Menu } from '../../components/Menu';
import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>  
      <header>
        <LanguageToggle {...pageProps} />
        <Menu {...pageProps} />
      </header>
      <main  className={`${styles.main} ${inter.className}`}>
       
        <Component {...pageProps} />
      </main>
    </>
   
  )
}
