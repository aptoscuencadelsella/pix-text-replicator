import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "es" | "en" | "fr" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.apartments": "Apartamentos",
    "nav.activities": "Actividades",
    "nav.contact": "Contacto",
    "nav.cangas": "Cangas de Onís",
    "nav.arriondas": "Arriondas",
    
    // Hero
    "hero.title": "Descubre la Cuenca del Sella",
    "hero.subtitle": "Apartamentos turísticos en el corazón de Asturias",
    "hero.cta": "Ver apartamentos",
    
    // Apartments
    "apartments.title": "Nuestros Apartamentos",
    "apartments.cangas.title": "Apartamento Cangas de Onís",
    "apartments.cangas.description": "Acogedor apartamento en el centro histórico",
    "apartments.arriondas.title": "Apartamento Arriondas",
    "apartments.arriondas.description": "Espacioso apartamento junto al río Sella",
    "apartments.viewMore": "Ver más",
    "apartments.book": "Reservar",
    
    // Activities
    "activities.title": "Actividades",
    "activities.subtitle": "Descubre todo lo que puedes hacer en la zona",
    "activities.sella": "Descenso del Sella",
    "activities.climbing": "Escalada Deportiva",
    "activities.canyoning": "Barranquismo",
    "activities.horse": "Rutas a Caballo",
    "activities.hiking": "Senderismo",
    "activities.covadonga": "Lagos de Covadonga",
    
    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "¿Tienes alguna pregunta? Escríbenos",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "contact.message": "Mensaje",
    "contact.send": "Enviar mensaje",
    "contact.sending": "Enviando...",
    "contact.success": "Mensaje enviado correctamente",
    "contact.error": "Error al enviar el mensaje",
    
    // Footer
    "footer.createdBy": "Sitio web creado por",
    "footer.rights": "Todos los derechos reservados",
    
    // Cookies
    "cookies.title": "Utilizamos cookies",
    "cookies.description": "Usamos cookies para mejorar tu experiencia y analizar el tráfico de nuestra web.",
    "cookies.moreInfo": "Más información",
    "cookies.hideDetails": "Ocultar detalles",
    "cookies.necessary": "Cookies necesarias",
    "cookies.necessaryDesc": "Esenciales para el funcionamiento del sitio. No se pueden desactivar.",
    "cookies.analytics": "Cookies analíticas",
    "cookies.analyticsDesc": "Nos ayudan a entender cómo usas nuestra web para mejorarla (Google Analytics).",
    "cookies.rejectOptional": "Rechazar opcionales",
    "cookies.savePreferences": "Guardar preferencias",
    "cookies.configure": "Configurar",
    "cookies.acceptAll": "Aceptar todas",
    
    // Common
    "common.learnMore": "Saber más",
    "common.back": "Volver",
    "common.close": "Cerrar",
    "common.loading": "Cargando...",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.apartments": "Apartments",
    "nav.activities": "Activities",
    "nav.contact": "Contact",
    "nav.cangas": "Cangas de Onís",
    "nav.arriondas": "Arriondas",
    
    // Hero
    "hero.title": "Discover the Sella Valley",
    "hero.subtitle": "Tourist apartments in the heart of Asturias",
    "hero.cta": "View apartments",
    
    // Apartments
    "apartments.title": "Our Apartments",
    "apartments.cangas.title": "Cangas de Onís Apartment",
    "apartments.cangas.description": "Cozy apartment in the historic center",
    "apartments.arriondas.title": "Arriondas Apartment",
    "apartments.arriondas.description": "Spacious apartment next to the Sella River",
    "apartments.viewMore": "View more",
    "apartments.book": "Book now",
    
    // Activities
    "activities.title": "Activities",
    "activities.subtitle": "Discover everything you can do in the area",
    "activities.sella": "Sella River Descent",
    "activities.climbing": "Sport Climbing",
    "activities.canyoning": "Canyoning",
    "activities.horse": "Horse Riding",
    "activities.hiking": "Hiking",
    "activities.covadonga": "Covadonga Lakes",
    
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Have any questions? Write to us",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent successfully",
    "contact.error": "Error sending message",
    
    // Footer
    "footer.createdBy": "Website created by",
    "footer.rights": "All rights reserved",
    
    // Cookies
    "cookies.title": "We use cookies",
    "cookies.description": "We use cookies to improve your experience and analyze our website traffic.",
    "cookies.moreInfo": "More information",
    "cookies.hideDetails": "Hide details",
    "cookies.necessary": "Necessary cookies",
    "cookies.necessaryDesc": "Essential for the website to function. Cannot be disabled.",
    "cookies.analytics": "Analytics cookies",
    "cookies.analyticsDesc": "Help us understand how you use our website to improve it (Google Analytics).",
    "cookies.rejectOptional": "Reject optional",
    "cookies.savePreferences": "Save preferences",
    "cookies.configure": "Configure",
    "cookies.acceptAll": "Accept all",
    
    // Common
    "common.learnMore": "Learn more",
    "common.back": "Back",
    "common.close": "Close",
    "common.loading": "Loading...",
  },
  fr: {
    // Header
    "nav.home": "Accueil",
    "nav.apartments": "Appartements",
    "nav.activities": "Activités",
    "nav.contact": "Contact",
    "nav.cangas": "Cangas de Onís",
    "nav.arriondas": "Arriondas",
    
    // Hero
    "hero.title": "Découvrez la Vallée de la Sella",
    "hero.subtitle": "Appartements touristiques au cœur des Asturies",
    "hero.cta": "Voir les appartements",
    
    // Apartments
    "apartments.title": "Nos Appartements",
    "apartments.cangas.title": "Appartement Cangas de Onís",
    "apartments.cangas.description": "Appartement chaleureux dans le centre historique",
    "apartments.arriondas.title": "Appartement Arriondas",
    "apartments.arriondas.description": "Appartement spacieux au bord de la rivière Sella",
    "apartments.viewMore": "Voir plus",
    "apartments.book": "Réserver",
    
    // Activities
    "activities.title": "Activités",
    "activities.subtitle": "Découvrez tout ce que vous pouvez faire dans la région",
    "activities.sella": "Descente de la Sella",
    "activities.climbing": "Escalade Sportive",
    "activities.canyoning": "Canyoning",
    "activities.horse": "Randonnées Équestres",
    "activities.hiking": "Randonnée",
    "activities.covadonga": "Lacs de Covadonga",
    
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Vous avez des questions ? Écrivez-nous",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.message": "Message",
    "contact.send": "Envoyer le message",
    "contact.sending": "Envoi en cours...",
    "contact.success": "Message envoyé avec succès",
    "contact.error": "Erreur lors de l'envoi du message",
    
    // Footer
    "footer.createdBy": "Site web créé par",
    "footer.rights": "Tous droits réservés",
    
    // Cookies
    "cookies.title": "Nous utilisons des cookies",
    "cookies.description": "Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic de notre site.",
    "cookies.moreInfo": "Plus d'informations",
    "cookies.hideDetails": "Masquer les détails",
    "cookies.necessary": "Cookies nécessaires",
    "cookies.necessaryDesc": "Essentiels au fonctionnement du site. Ne peuvent pas être désactivés.",
    "cookies.analytics": "Cookies analytiques",
    "cookies.analyticsDesc": "Nous aident à comprendre comment vous utilisez notre site pour l'améliorer (Google Analytics).",
    "cookies.rejectOptional": "Refuser les optionnels",
    "cookies.savePreferences": "Enregistrer les préférences",
    "cookies.configure": "Configurer",
    "cookies.acceptAll": "Tout accepter",
    
    // Common
    "common.learnMore": "En savoir plus",
    "common.back": "Retour",
    "common.close": "Fermer",
    "common.loading": "Chargement...",
  },
  de: {
    // Header
    "nav.home": "Startseite",
    "nav.apartments": "Apartments",
    "nav.activities": "Aktivitäten",
    "nav.contact": "Kontakt",
    "nav.cangas": "Cangas de Onís",
    "nav.arriondas": "Arriondas",
    
    // Hero
    "hero.title": "Entdecken Sie das Sella-Tal",
    "hero.subtitle": "Ferienwohnungen im Herzen Asturiens",
    "hero.cta": "Apartments ansehen",
    
    // Apartments
    "apartments.title": "Unsere Apartments",
    "apartments.cangas.title": "Apartment Cangas de Onís",
    "apartments.cangas.description": "Gemütliche Wohnung im historischen Zentrum",
    "apartments.arriondas.title": "Apartment Arriondas",
    "apartments.arriondas.description": "Geräumige Wohnung am Fluss Sella",
    "apartments.viewMore": "Mehr anzeigen",
    "apartments.book": "Buchen",
    
    // Activities
    "activities.title": "Aktivitäten",
    "activities.subtitle": "Entdecken Sie alles, was Sie in der Gegend tun können",
    "activities.sella": "Sella-Flussabfahrt",
    "activities.climbing": "Sportklettern",
    "activities.canyoning": "Canyoning",
    "activities.horse": "Reiten",
    "activities.hiking": "Wandern",
    "activities.covadonga": "Covadonga-Seen",
    
    // Contact
    "contact.title": "Kontakt",
    "contact.subtitle": "Haben Sie Fragen? Schreiben Sie uns",
    "contact.name": "Name",
    "contact.email": "E-Mail",
    "contact.phone": "Telefon",
    "contact.message": "Nachricht",
    "contact.send": "Nachricht senden",
    "contact.sending": "Wird gesendet...",
    "contact.success": "Nachricht erfolgreich gesendet",
    "contact.error": "Fehler beim Senden der Nachricht",
    
    // Footer
    "footer.createdBy": "Webseite erstellt von",
    "footer.rights": "Alle Rechte vorbehalten",
    
    // Cookies
    "cookies.title": "Wir verwenden Cookies",
    "cookies.description": "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und den Verkehr auf unserer Website zu analysieren.",
    "cookies.moreInfo": "Mehr Informationen",
    "cookies.hideDetails": "Details ausblenden",
    "cookies.necessary": "Notwendige Cookies",
    "cookies.necessaryDesc": "Wesentlich für die Funktion der Website. Können nicht deaktiviert werden.",
    "cookies.analytics": "Analytische Cookies",
    "cookies.analyticsDesc": "Helfen uns zu verstehen, wie Sie unsere Website nutzen, um sie zu verbessern (Google Analytics).",
    "cookies.rejectOptional": "Optionale ablehnen",
    "cookies.savePreferences": "Einstellungen speichern",
    "cookies.configure": "Konfigurieren",
    "cookies.acceptAll": "Alle akzeptieren",
    
    // Common
    "common.learnMore": "Mehr erfahren",
    "common.back": "Zurück",
    "common.close": "Schließen",
    "common.loading": "Laden...",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language;
      if (saved && ["es", "en", "fr", "de"].includes(saved)) {
        return saved;
      }
    }
    return "es";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations.es[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
