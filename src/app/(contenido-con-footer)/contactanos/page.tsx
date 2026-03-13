"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

import styles from "./contactanos.module.css";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { HeroNoMain } from "@/src/components/sections/HeroNoMain/HeroNoMain";

export default function Contactanos() {
  const { lang } = useLanguage();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  });

  const [status, setStatus] = useState("");
  const [addressCopied, setAddressCopied] = useState(false);

  const addressText = useMemo(() => {
    return (
      `Los Ilanes 86B, Oficina 602\n` +
      `${lang === "es" ? "Comuna de Las Condes" : "Las Condes commune"}\n` +
      `Santiago, Chile`
    );
  }, [lang]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(t("contactPage.successStatus", lang));

    // TODO: integrar envío real (API / webmail)
    console.log("Form data:", formData);

    setTimeout(() => {
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        mensaje: "",
      });
      setStatus("");
    }, 3000);
  };

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        return true;
      } catch {
        return false;
      }
    }
  };

  const handleCopyAddress = async () => {
    const ok = await copyText(addressText);
    if (!ok) {
      alert(lang === "es" ? "No se pudo copiar 😕" : "Could not copy 😕");
      return;
    }
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 2000);
  };

  return (
    <main className={styles.container}>
      {/* HERO */}
      <HeroNoMain badge="contactPage.badge" titulo="contactPage.title" subtitulo="contactPage.subtitle"/>
      {/* <section className={styles.heroSection}>
        <Image
          src="/img-hero-oficial.jpg"
          alt="Fondo corporativo"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>{t("contactPage.title", lang)}</h1>
          <p className={styles.subtitle}>{t("contactPage.subtitle", lang)}</p>
        </div>
      </section> */}

      {/* CONTACT */}
      <section className={styles.contactSection}>
        <div className={styles.contentWrapper}>
          {/* INFO */}
          <Card className={styles.card}>
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>
                {t("contactPage.infoTitle", lang)}
              </CardTitle>
            </CardHeader>

            <CardContent className={styles.cardContent}>
              <div className={styles.stack}>
                <div className={styles.item}>
                  <span className={styles.iconWrap} aria-hidden="true">
                    <Mail className={styles.icon} />
                  </span>
                  <div className={styles.itemBody}>
                    <p className={styles.label}>{t("contactPage.email", lang)}</p>
                    <a
                      href="mailto:contacto@ingeaudit.cl"
                      className={styles.link}
                    >
                      contacto@ingeaudit.cl
                    </a>
                  </div>
                </div>

                <div className={styles.item}>
                  <span className={styles.iconWrap} aria-hidden="true">
                    <Phone className={styles.icon} />
                  </span>
                  <div className={styles.itemBody}>
                    <p className={styles.label}>{t("contactPage.phone", lang)}</p>
                    <a href="tel:+56226048620" className={styles.link}>
                      +56 2 26 04 86 20
                    </a>
                  </div>
                </div>

                {/* Dirección copiable */}
                <button
                  type="button"
                  className={`${styles.item} ${styles.itemButton}`}
                  onClick={handleCopyAddress}
                  title={lang === "es" ? "Click para copiar" : "Click to copy"}
                >
                  <span className={styles.iconWrap} aria-hidden="true">
                    <MapPin className={styles.icon} />
                  </span>
                  <div className={styles.itemBody}>
                    <p className={styles.label}>{t("contactPage.address", lang)}</p>
                    <p className={styles.text}>
                      Los Ilanes 86B, Oficina 602
                      <br />
                      {lang === "es" ? "Comuna de Las Condes" : "Las Condes commune"}
                      <br />
                      Santiago, Chile
                      {addressCopied && (
                        <span className={styles.copied}>
                          {lang === "es" ? "✔ Copiado" : "✔ Copied"}
                        </span>
                      )}
                    </p>
                  </div>
                </button>

                <div className={styles.item}>
                  <span className={styles.iconWrap} aria-hidden="true">
                    <Clock className={styles.icon} />
                  </span>
                  <div className={styles.itemBody}>
                    <p className={styles.label}>
                      {t("contactPage.schedule", lang)}
                    </p>
                    <p className={styles.text}>
                      {t("contactPage.scheduleDetail", lang)}
                      <br />
                      9:00 – 18:00
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FORM */}
          <Card className={styles.card}>
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>
                {t("contactPage.formTitle", lang)}
              </CardTitle>
            </CardHeader>

            <CardContent className={styles.cardContent}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.grid2}>
                  <div className={styles.field}>
                    <label htmlFor="nombre" className={styles.fieldLabel}>
                      {t("contactPage.fullName", lang)}
                    </label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      placeholder={t("contactPage.fullNamePlaceholder", lang)}
                      className={styles.control}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="empresa" className={styles.fieldLabel}>
                      {t("contactPage.company", lang)}
                    </label>
                    <Input
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder={t("contactPage.companyPlaceholder", lang)}
                      className={styles.control}
                    />
                  </div>
                </div>

                <div className={styles.grid2}>
                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.fieldLabel}>
                      {t("contactPage.emailLabel", lang)}
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t("contactPage.emailPlaceholder", lang)}
                      className={styles.control}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="telefono" className={styles.fieldLabel}>
                      {t("contactPage.phoneLabel", lang)}
                    </label>
                    <Input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+56 9 XXXX XXXX"
                      className={styles.control}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="mensaje" className={styles.fieldLabel}>
                    {t("contactPage.message", lang)}
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder={t("contactPage.messagePlaceholder", lang)}
                    className={`${styles.control} ${styles.textarea}`}
                  />
                </div>

                {status && <p className={styles.status}>{status}</p>}

                <Button type="submit" className={styles.submit}>
                  {t("contactPage.sendButton", lang)}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* MAP */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <h2 className={styles.mapTitle}>{t("contactPage.ourLocation", lang)}</h2>

          <div className={styles.mapWrapper}>
            <iframe
              className={styles.mapIframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.611392750546!2d-70.5564975241242!3d-33.39969099491483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cec64f7341d3%3A0x4563b32e52d43ea6!2sLos%20Ilanes%2086b%2C%207560384%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e1!3m2!1ses-419!2scl!4v1769789044350!5m2!1ses-419!2scl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Ingeaudit"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
