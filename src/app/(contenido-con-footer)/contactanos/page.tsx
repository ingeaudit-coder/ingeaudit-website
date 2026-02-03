"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import styles from "./contactanos.module.css";
import { useLanguage } from "@/src/context/LanguageContext";
import { t } from "@/src/i18n/translations";

const Contactanos = () => {
  const { lang } = useLanguage();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  });

  const [status, setStatus] = useState("");

  // ✅ estado para feedback de "copiado"
  const [addressCopied, setAddressCopied] = useState(false);

  const addressText =
    `Los Ilanes 86B, Oficina 602\n` +
    `${lang === "es" ? "Comuna de Las Condes" : "Las Condes commune"}\n` +
    `Santiago, Chile`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(t("contactPage.successStatus", lang));
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

  // ✅ copiar al portapapeles
  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(addressText);
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2000);
    } catch (err) {
      // fallback: por si el navegador bloquea clipboard
      try {
        const textarea = document.createElement("textarea");
        textarea.value = addressText;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        setAddressCopied(true);
        setTimeout(() => setAddressCopied(false), 2000);
      } catch {
        alert(lang === "es" ? "No se pudo copiar 😕" : "Could not copy 😕");
      }
    }
  };

  return (
    <div className={styles.container}>
      {/* ─── Hero ─── */}
      <section className={styles.heroSection}>
        <Image
          src="/img-hero-oficial.jpg"
          alt="Fondo corporativo"
          fill
          priority
          className="object-cover"
        />
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>{t("contactPage.title", lang)}</h1>
          <p className={styles.subtitle}>{t("contactPage.subtitle", lang)}</p>
        </div>
      </section>

      {/* ─── Contact info + Form ─── */}
      <section className={styles.contactSection}>
        <div className={styles.contentWrapper}>
          {/* Info column */}
          <div className={styles.infoColumn}>
            <h2 className={styles.infoTitle}>{t("contactPage.infoTitle", lang)}</h2>

            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <Mail className={styles.icon} />
              </div>
              <div>
                <h3 className={styles.contactLabel}>{t("contactPage.email", lang)}</h3>
                <a href="mailto:contacto@ingeaudit.cl" className={styles.contactLink}>
                  contacto@ingeaudit.cl
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <Phone className={styles.icon} />
              </div>
              <div>
                <h3 className={styles.contactLabel}>{t("contactPage.phone", lang)}</h3>
                <a href="tel:+56226048620" className={styles.contactLink}>
                  +56 2 26 04 86 20
                </a>
              </div>
            </div>

            {/* ✅ Dirección copiable */}
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <MapPin className={styles.icon} />
              </div>
              <div>
                <h3 className={styles.contactLabel}>{t("contactPage.address", lang)}</h3>

                <p
                  className={styles.contactLink}
                  onClick={handleCopyAddress}
                  role="button"
                  tabIndex={0}
                  title={lang === "es" ? "Click para copiar" : "Click to copy"}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") handleCopyAddress();
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Los Ilanes 86B, Oficina 602<br />
                  {lang === "es" ? "comuna de Las Condes" : "Las Condes commune"}
                  <br />
                  Santiago, Chile
                  {addressCopied && (
                    <span style={{ marginLeft: 8, fontWeight: 600 }}>
                      {lang === "es" ? "✔ Copiado" : "✔ Copied"}
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <Clock className={styles.icon} />
              </div>
              <div>
                <h3 className={styles.contactLabel}>{t("contactPage.schedule", lang)}</h3>
                <p className={styles.contactLink}>
                  {t("contactPage.scheduleDetail", lang)}<br />
                  9:00 – 18:00
                </p>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className={styles.formColumn}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <h2 className={styles.formTitle}>{t("contactPage.formTitle", lang)}</h2>

              {/* Nombre */}
              <div className={styles.formGroup}>
                <label htmlFor="nombre" className={styles.label}>
                  {t("contactPage.fullName", lang)}
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder={t("contactPage.fullNamePlaceholder", lang)}
                />
              </div>

              {/* Email */}
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  {t("contactPage.emailLabel", lang)}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder={t("contactPage.emailPlaceholder", lang)}
                />
              </div>

              {/* Teléfono */}
              <div className={styles.formGroup}>
                <label htmlFor="telefono" className={styles.label}>
                  {t("contactPage.phoneLabel", lang)}
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="+56 9 XXXX XXXX"
                />
              </div>

              {/* Empresa */}
              <div className={styles.formGroup}>
                <label htmlFor="empresa" className={styles.label}>
                  {t("contactPage.company", lang)}
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder={t("contactPage.companyPlaceholder", lang)}
                />
              </div>

              {/* Mensaje */}
              <div className={styles.formGroup}>
                <label htmlFor="mensaje" className={styles.label}>
                  {t("contactPage.message", lang)}
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={styles.textarea}
                  placeholder={t("contactPage.messagePlaceholder", lang)}
                />
              </div>

              {status && <div className={styles.statusMessage}>{status}</div>}

              <button type="submit" className={styles.submitButton}>
                {t("contactPage.sendButton", lang)}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── Map ─── */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <h2 className={styles.mapTitle}>{t("contactPage.ourLocation", lang)}</h2>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.611392750546!2d-70.5564975241242!3d-33.39969099491483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cec64f7341d3%3A0x4563b32e52d43ea6!2sLos%20Ilanes%2086b%2C%207560384%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e1!3m2!1ses-419!2scl!4v1769789044350!5m2!1ses-419!2scl"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactanos;
