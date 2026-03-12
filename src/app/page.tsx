import Certifications from "../components/sections/Certifications/Certifications";
import Clients from "../components/sections/Clients/Clients";
import Footer from "../components/sections/Footer/Footer";
import Hero from "../components/sections/Hero/Hero";
import Metrics from "../components/sections/Metrics/Metrics";
import { Servicioss } from "../components/sections/Servicios/Servicios";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
        <Clients/>
        <Servicioss/>
        <Metrics/>
        <Certifications/>
        <Footer/>
      </section>
    </>
  );
}
