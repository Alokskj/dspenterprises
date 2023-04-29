import Header from "@/components/Header";
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
    </>
  )
}
