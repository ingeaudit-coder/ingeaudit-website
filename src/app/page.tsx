import Hero from "../components/sections/Hero/Hero";
import style from "@/src/app/page.module.css"

export default function Home() {
  return (
    <>
    <section className={style.pageContainer}>
    <Hero />
    </section>
    </>
  );
}
