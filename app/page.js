import OurServices from "@/components/OurServices";
import StatSection from "@/components/StatSection";
import Hero from "@/components/Hero";
import ServicesWidget from "@/components/ServicesWidget";


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
    </>
  )
}
