import Footer from "@/src/components/sections/Footer/Footer";


export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Aquí se renderizarán las páginas: nosotros, servicios o contacto */}
      {children}
      
      {/* El footer se añade al final de esas páginas */}
      <Footer />
    </>
  );
}