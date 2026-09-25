import Certifications from "../components/sections/Certifications/Certifications";
import Clients from "../components/sections/Clients/Clients";
import Hero from "../components/sections/Hero/Hero";
import LinkedinFeed from "../components/sections/LinkedinFeed/LinkedinFeed";
import Metrics from "../components/sections/Metrics/Metrics";
import NewServicePopup from "../components/sections/NewServicePopup/NewServicePopup";
import { Servicioss } from "../components/sections/Servicios/Servicios";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
        <NewServicePopup />
        <Servicioss/>
        <Metrics/>
        <Certifications/>
        <LinkedinFeed/>
      </section>
    </>
  );
}
