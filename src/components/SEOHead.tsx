import { Helmet } from "react-helmet";

const SEOHead = () => {
  return (
    <Helmet>
      <title>Apartamentos Turísticos y Turismo Activo Cuenca del Sella - Alojamiento Rural Asturias | Picos de Europa</title>
      <meta 
        name="description" 
        content="Apartamentos turísticos de calidad en la Cuenca del Sella, Asturias. Alojamiento rural en Cangas de Onís y Arriondas. Actividades turísticas, descenso del Sella, Lagos de Covadonga. Reserva tu escapada a los Picos de Europa." 
      />
      <meta 
        name="keywords" 
        content="apartamentos turísticos asturias, alojamiento rural picos de europa, cangas de onís apartamentos, arriondas alojamiento, descenso del sella, turismo rural asturias, lagos de covadonga, cuenca del sella, vacaciones asturias" 
      />
      <meta property="og:title" content="Apartamentos Turísticos Cuenca del Sella - Turismo Rural en Asturias" />
      <meta property="og:description" content="Descubre los mejores apartamentos turísticos en la Cuenca del Sella. Alojamiento rural en Cangas de Onís y Arriondas, actividades en los Picos de Europa." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://cuencadelsella.com" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Cuenca del Sella Turismo" />
      <link rel="canonical" href="https://cuencadelsella.com" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristAttraction",
          "name": "Cuenca del Sella - Apartamentos Turísticos",
          "description": "Apartamentos turísticos y actividades en la Cuenca del Sella, Asturias. Alojamiento rural de calidad en los Picos de Europa.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cangas de Onís",
            "addressRegion": "Asturias",
            "addressCountry": "España"
          },
          "url": "https://cuencadelsella.com",
          "sameAs": [
            "https://cuencadelsella.com"
          ],
          "potentialAction": {
            "@type": "ReserveAction",
            "target": "https://cuencadelsella.com/booking"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;