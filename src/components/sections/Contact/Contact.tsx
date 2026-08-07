"use client";

// 1. IMPORTAMOS Suspense de react
import { useMemo, useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

import styles from "@/src/components/sections/Contact/Contact.module.css";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const PRESET_MESSAGES: Record<string, { es: string; en: string }> = {
  h1: {
    es: "Hola, me interesa solicitar una Certificación Prototipo (H1) para homologar un modelo de equipo terminal. Quisiera conocer los requisitos, plazos y costos del proceso. Quedo atento/a a su respuesta.",
    en: "Hello, I am interested in requesting a Prototype Certification (H1) to homologate a terminal equipment model. I would like to know the requirements, timelines, and costs involved. I look forward to your response.",
  },
  h2: {
    es: "Hola, me interesa gestionar una Certificación de Embarques (H2) para un modelo ya certificado mediante H1. Quisiera conocer el proceso de muestreo, plazos y costos. Quedo atento/a a su respuesta.",
    en: "Hello, I am interested in managing a Shipment Certification (H2) for a model already certified through H1. I would like to know the sampling process, timelines, and costs. I look forward to your response.",
  },
};

// 2. RENOMBRAMOS la función original y le quitamos el "export default"
function ContactContent() {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [addressCopied, setAddressCopied] = useState(false);
  const [mensajeEsPreset, setMensajeEsPreset] = useState(false);

  // Pre-llenar mensaje y hacer scroll al montar / cambiar param
  useEffect(() => {
    const tipo = searchParams.get("tipo");
    if (tipo && PRESET_MESSAGES[tipo]) {
      setFormData((prev) => ({ ...prev, mensaje: PRESET_MESSAGES[tipo][lang] }));
      setMensajeEsPreset(true);
      setTimeout(() => {
        if (formRef.current) {
          const top = formRef.current.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 150);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Traducir mensaje automáticamente solo si el usuario no lo editó
  useEffect(() => {
    const tipo = searchParams.get("tipo");
    if (tipo && PRESET_MESSAGES[tipo] && mensajeEsPreset) {
      setFormData((prev) => ({ ...prev, mensaje: PRESET_MESSAGES[tipo][lang] }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const addressText = useMemo(
    () =>
      `Los Ilanes 86B, Oficina 602\n${
        lang === "es" ? "Comuna de Las Condes" : "Las Condes commune"
      }\nSantiago, Chile`,
    [lang]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "mensaje") setMensajeEsPreset(false);
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "send_failed");
      }

      setStatus(t("contactPage.successStatus", lang));
      setFormData({ nombre: "", email: "", telefono: "", empresa: "", mensaje: "" });
    } catch (error) {
      console.error("Error al enviar el formulario de contacto:", error);
      setStatus(
        lang === "es"
          ? "Ocurrió un error al enviar tu mensaje. Por favor intenta nuevamente o escríbenos directamente a contacto@ingeaudit.cl."
          : "There was an error sending your message. Please try again or email us directly at contacto@ingeaudit.cl."
      );
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus(""), 6000);
    }
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
      alert(lang === "es" ? "No se pudo copiar" : "Could not copy");
      return;
    }
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 2000);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contentWrapper}>

        {/* ── Información de contacto ── */}
        <Card className={styles.card}>
          <CardHeader className={styles.cardHeader}>
            <CardTitle className={styles.cardTitle}>
              {t("contactPage.infoTitle", lang)}
            </CardTitle>
          </CardHeader>

          <CardContent className={styles.cardContent}>
            <div className={styles.stack}>

              {/* Email */}
              <div className={styles.item}>
                <span className={styles.iconWrap} aria-hidden="true">
                  <Mail className={styles.icon} />
                </span>
                <div className={styles.itemBody}>
                  <p className={styles.label}>{t("contactPage.email", lang)}</p>
                  <a href="mailto:contacto@ingeaudit.cl" className={styles.link}>
                    contacto@ingeaudit.cl
                  </a>
                </div>
              </div>

              {/* Teléfono */}
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

              {/* Horario */}
              <div className={styles.item}>
                <span className={styles.iconWrap} aria-hidden="true">
                  <Clock className={styles.icon} />
                </span>
                <div className={styles.itemBody}>
                  <p className={styles.label}>{t("contactPage.schedule", lang)}</p>
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

        {/* ── Formulario ── */}
        <div ref={formRef}>
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

                <Button type="submit" className={styles.submit} disabled={isSending}>
                  {isSending
                    ? lang === "es"
                      ? "Enviando..."
                      : "Sending..."
                    : t("contactPage.sendButton", lang)}
                </Button>

              </form>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}

// 3. CREAMOS el nuevo export default que envuelve todo en Suspense
export default function Contact() {
  return (
    // Puedes personalizar el div del fallback con tus clases de estilos si quieres que se vea mejor mientras carga
    <Suspense fallback={<div className="min-h-125 flex items-center justify-center">Cargando...</div>}>
      <ContactContent />
    </Suspense>
  );
}