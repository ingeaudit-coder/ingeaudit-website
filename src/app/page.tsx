import Certifications from "../components/sections/Certifications/Certifications";
import Clients from "../components/sections/Clients/Clients";
import Hero from "../components/sections/Hero/Hero";
import Metrics from "../components/sections/Metrics/Metrics";
import { Servicioss } from "../components/sections/Servicios/Servicios";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
        <Servicioss/>
        <Metrics/>
        <Certifications/>
      </section>
    </>
  );
}
