import { Helmet } from "react-helmet";

const SEOHead = () => {
  return (
    <Helmet>
      <title>Apartamentos Cuenca del Sella | Alojamiento en Cangas de Onís y Arriondas | Descenso del Sella</title>
      <meta 
        name="description" 
        content="Apartamentos turísticos en la Cuenca del Sella: alojamiento en Cangas de Onís y Arriondas. Turismo activo con descenso del Sella, Lagos de Covadonga y Picos de Europa. Alquiler vacacional en el río Sella, Asturias." 
      />
      <meta 
        name="keywords" 
        content="apartamentos cuenca del sella, alojamiento cangas de onis, apartamentos arriondas, descenso del sella, turismo activo cuenca del sella, lagos de covadonga, río sella, apartamentos turísticos asturias, alojamiento arriondas cuenca del sella, vacaciones cangas de onis, picos de europa, turismo rural asturias, actividades cuenca del sella, piragüismo río sella, alquiler apartamentos cangas de onis, alojamiento turismo activo, valle del sella asturias" 
      />
      <meta property="og:title" content="Apartamentos Cuenca del Sella - Alojamiento en Cangas de Onís y Arriondas" />
      <meta property="og:description" content="Apartamentos turísticos en Cangas de Onís y Arriondas. Descenso del Sella, Lagos de Covadonga y turismo activo en la Cuenca del Sella, Asturias." />
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