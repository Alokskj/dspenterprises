import OurServices from "@/components/OurServices";
import StatSection from "@/components/StatSection";
import Hero from "@/components/Hero";
import ServicesWidget from "@/components/ServicesWidget";
import TrustedBy from "@/components/TrustedBy";
import ContactUs from "@/components/ContactUs";


export default function Home() {
  return (
    <>
    
    <section className="hero">
    <Hero />
    </section>
    <section id="services-widget" className='services-widget'>
    <ServicesWidget />
    </section>
    <section id="stats" className="stats" >
     <StatSection />
    </section>
    <section id="our-services" className="our-services">
     <OurServices />
    </section>
    <section className="trusted-by" id="trusted-by">
      <TrustedBy/>
    </section>
    <section className="contact-us" id="contact-us">
      <ContactUs/>
    </section>
    </>
  )
}
