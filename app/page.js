import Header from "@/components/header";
import Hero from "@/components/hero";
import ServicesWidget from "@/components/servicesWidget";


export default function Home() {
  return (
    <>
    
    <Header/>
    <section className="hero">
    <Hero />
    </section>
    <section id="services-widget" className='services-widget'>
    <ServicesWidget />
    </section>
    </>
  )
}
