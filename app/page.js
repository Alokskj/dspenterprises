import OurServices from "@/components/OurServices";
import StatSection from "@/components/StatSection";
import Hero from "@/components/hero";
import ServicesWidget from "@/components/servicesWidget";
import TrustedBy from "@/components/TrustedBy";
import ContactUs from "@/components/ContactUs";
import Testimonial from "@/components/Testimonial";
import InfoTop from "@/components/InfoTop";
import { getHomeInfo } from "@/sanity/sanity-utils";


export default async function Home() {
  const info = await getHomeInfo()
  const data = info[0]
 
  return (
    <>
  
    <section className="hero">
    <Hero data={data}/>
    </section>
    <section id="services-widget" className='services-widget'>
    <ServicesWidget data={data}/>
    </section>
    <section id="stats" className="stats" >
     <StatSection data={data}/>
    </section>
    <section id="our-services" className="our-services">
     <OurServices data={data}/>
    </section>
    <section className="trusted-by" id="trusted-by">
      <TrustedBy data={data}/>
    </section>
    <section id="testimonial" className="testimonail">
      <Testimonial data={data}/>
    </section>
    <section className="contact-us" id="contact-us">
      <ContactUs data={data}/>
    </section>
    </>
  )
}
