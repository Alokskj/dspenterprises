import './globals.css'
import '@/public/styles/style.css'
import {Montserrat } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InfoTop from '@/components/InfoTop';
config.autoAddCss = false; 

const monserrat = Montserrat({
  subsets: ['latin'],
  weight : '400'
})
export const metadata = {
  title: {
    default : 'Dsp Enterprises',
    template : '%s | Dsp Enterprises'
  },
  description: 'Dsp Enterprises - We Make Big Ideas Happen',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>{<InfoTop />} {<Header />}{children}{<Footer/>}
      <script src="https://smtpjs.com/v3/smtp.js">
</script>
      </body>
      
    </html>
  )
}
