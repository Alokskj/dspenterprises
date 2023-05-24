import "./globals.css";
import "@/public/styles/style.css";
import { Montserrat } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";

import InfoTop from "@/components/InfoTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "aos/dist/aos.css";
config.autoAddCss = false;

const monserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
export const metadata = {
  title: {
    default: "Dsp Enterprises",
    template: "%s | Dsp Enterprises",
  },
  description: "Dsp Enterprises - We Make Big Ideas Happen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="DSP Enterprises is a leading offline marketing and advertising company in Delhi. We specialize in banner creations, brand management, broadcast management, in-shop branding, LED signboard manufacturing, vinyl/one-way printing, and corporate gifting. Partner with us to elevate your brand's visibility and drive growth."
        />
        <meta
          name="keywords"
          content="DSP Enterprises, offline marketing company, advertising agency, banner creations, brand management, broadcast management, in-shop branding, LED signboard manufacturing, vinyl printing, one-way printing, corporate gifting, Delhi, Lenskart, Mamaearth, IDP, John Jacobs, Madame"
        />
        <meta name="author" content="DSP Enterprises" />

        <link
          rel="shortcut icon"
          type="image/png"
          href="/assets/favicon/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />

        <meta
          property="og:title"
          content="DSP Enterprises - Offline Marketing and Advertising Company in Delhi"
        />
        <meta
          property="og:description"
          content="DSP Enterprises is a leading offline marketing and advertising company in Delhi. We specialize in banner creations, brand management, broadcast management, in-shop branding, LED signboard manufacturing, vinyl/one-way printing, and corporate gifting. Partner with us to elevate your brand's visibility and drive growth."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dspenterprises.net" />
        <meta
          property="og:image"
          content="https://www.dspenterprises.net/images/logo.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="DSP Enterprises - Offline Marketing and Advertising Company in Delhi"
        />
        <meta
          name="twitter:description"
          content="DSP Enterprises is a leading offline marketing and advertising company in Delhi. We specialize in banner creations, brand management, broadcast management, in-shop branding, LED signboard manufacturing, vinyl/one-way printing, and corporate gifting. Partner with us to elevate your brand's visibility and drive growth."
        />
        <meta
          name="twitter:image"
          content="https://www.dspenterprises.net/images/logo.png"
        />

        <link rel="canonical" href="https://www.dspenterprises.net" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       
      </head>
      <body>
        {<Header />}
        {children}
        {<Footer />}
        <script src="https://smtpjs.com/v3/smtp.js"></script>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
    </html>
  );
}
