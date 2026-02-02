"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import styles from "./contactanos.module.css";

const Contactanos = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Mensaje enviado con éxito. Nos pondremos en contacto pronto.");
    // Aquí iría la lógica real de envío del formulario
    console.log("Form data:", formData);
    
    // Limpiar formulario
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

  return (
    <div className={styles.container}>
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
          <h1 className={styles.mainTitle}>Contáctanos</h1>
          <p className={styles.subtitle}>
            Estamos aquí para ayudarte con tus proyectos de telecomunicaciones
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.infoColumn}>
            <h2 className={styles.infoTitle}>Información de Contacto</h2>
            
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <Mail className={styles.icon} />
              </div>
              <div>
                <h3 className={styles.contactLabel}>Email</h3>
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
                <h3 className={styles.contactLabel}>Teléfono</h3>
                <a href="tel:+56226048620" className={styles.contactLink}>
                  +56 2 26 04 86 20
                </a>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <MapPin className={styles.icon} />
              </div>
              <div>
                <h3 className={styles.contactLabel}>Dirección</h3>
                <p className={styles.contactP}>
                  Los Ilanes 86B, Oficina 602<br />
                  Comuna de Las Condes<br />
                  Santiago, Chile
                </p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <Clock className={styles.icon} />
              </div>
              <div>
                <h3 className={styles.contactLabel}>Horario</h3>
                <p className={styles.contactP}>
                  Lunes a Viernes<br />
                  9:00 - 18:00
                </p>
              </div>
            </div>
          </div>

          <div className={styles.formColumn}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <h2 className={styles.formTitle}>Envíanos un Mensaje</h2>
              
              <div className={styles.formGroup}>
                <label htmlFor="nombre" className={styles.label}>
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Tu nombre"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="tu@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="telefono" className={styles.label}>
                  Teléfono
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

              <div className={styles.formGroup}>
                <label htmlFor="empresa" className={styles.label}>
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mensaje" className={styles.label}>
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={styles.textarea}
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                />
              </div>

              {status && (
                <div className={styles.statusMessage}>
                  {status}
                </div>
              )}

              <button type="submit" className={styles.submitButton}>
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <h2 className={styles.mapTitle}>Nuestra Ubicación</h2>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.611392750546!2d-70.5564975241242!3d-33.39969099491483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cec64f7341d3%3A0x4563b32e52d43ea6!2sLos%20Ilanes%2086b%2C%207560384%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e1!3m2!1ses-419!2scl!4v1769789044350!5m2!1ses-419!2scl"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
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