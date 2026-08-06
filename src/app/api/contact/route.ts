import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  nombre?: string;
  email?: string;
  telefono?: string;
  empresa?: string;
  mensaje?: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { nombre, email, telefono, empresa, mensaje } = body;

  // Validación mínima en servidor (no confiar solo en el "required" del form)
  if (!nombre?.trim() || !email?.trim() || !mensaje?.trim()) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASSWORD,
    CONTACT_TO_EMAIL,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    console.error("Faltan variables de entorno SMTP (SMTP_HOST/SMTP_USER/SMTP_PASSWORD).");
    return NextResponse.json({ error: "server_misconfigured" }, { status: 500 });
  }

  const port = Number(SMTP_PORT) || 465;

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465, // true para 465 (SSL/TLS), false para 587 (STARTTLS)
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });

    const safeNombre = escapeHtml(nombre);
    const safeEmpresa = empresa ? escapeHtml(empresa) : "-";
    const safeTelefono = telefono ? escapeHtml(telefono) : "-";
    const safeMensaje = escapeHtml(mensaje).replace(/\n/g, "<br/>");

    await transporter.sendMail({
      from: `"Formulario Web Ingeaudit" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL || SMTP_USER,
      replyTo: email,
      subject: `Nuevo contacto de ${nombre}${empresa ? ` (${empresa})` : ""}`,
      text: [
        `Nombre: ${nombre}`,
        `Empresa: ${empresa || "-"}`,
        `Email: ${email}`,
        `Teléfono: ${telefono || "-"}`,
        "",
        "Mensaje:",
        mensaje,
      ].join("\n"),
      html: `
        <div style="font-family: sans-serif; font-size: 14px; color: #111;">
          <h2 style="margin: 0 0 12px;">Nuevo mensaje desde el formulario de contacto</h2>
          <p style="margin: 4px 0;"><strong>Nombre:</strong> ${safeNombre}</p>
          <p style="margin: 4px 0;"><strong>Empresa:</strong> ${safeEmpresa}</p>
          <p style="margin: 4px 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin: 4px 0;"><strong>Teléfono:</strong> ${safeTelefono}</p>
          <p style="margin: 16px 0 4px;"><strong>Mensaje:</strong></p>
          <p style="margin: 0;">${safeMensaje}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error al enviar el correo de contacto:", error);
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }
}
