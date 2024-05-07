import { LenguaContext } from "../../../Context/LangProvider";
import { Accordion } from "./Accordion";
import { useContext, useState } from "react";

export const Services = () => {
  const [active, setActive] = useState("");
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();
  

  const texto = [
    {
      titulo1: "Consultoría de Estrategia de Marketing Digital",
      titulo2: "Diseño de Landing Page Personalizadas",
      titulo3: "Campañas de Anuncios y Contenido de Anuncios Personalizados",
      titulo4: "Optimización de la Tasa de Conversión (CRO) y SEO",
      titulo5: "Integración con CRM",
      titulo6: "Gestión de Redes Sociales",
      titulo7: "Seguimiento del Rendimiento y Analítica"
    },
    {
      conte1: " Comenzamos por entender los objetivos de tu negocio y tu audiencia objetivo para desarrollar una estrategia de marketing digital a medida que se alinee con tus metas.",
      conte2: "Nuestro equipo crea páginas de aterrizaje visualmente impresionantes y optimizadas para la conversión que capturan la atención de pacientes potenciales y los animan a tomar acción.",
      conte3: "Desarrollamos campañas de anuncios personalizadas y contenido creativo que resuene con tu audiencia objetivo, utilizando visuales llamativos, redacción persuasiva y elementos interactivos para impulsar la participación y las conversiones. Además, ofrecemos servicios de marketing por correo electrónico, marketing de contenido y gestión de redes sociales.",
      conte4: "Optimizamos tus páginas de aterrizaje y campañas de anuncios para maximizar las tasas de conversión y mejorar la visibilidad y clasificaciones de tu sitio web en las páginas de resultados de motores de búsqueda, impulsando el tráfico orgánico y aumentando tu presencia en línea.",
      conte5: "Integramos nuestras soluciones con tu sistema de CRM para gestionar leads de manera eficiente y automatizar comunicaciones de seguimiento, asegurando que no se pierda ninguna oportunidad.",
      conte6: "Gestionamos tu presencia en redes sociales en plataformas como Facebook, Instagram y Twitter para aumentar el reconocimiento de marca, interactuar con seguidores y generar leads para tu práctica.",
      conte7: "Proporcionamos análisis y reportes completos sobre el rendimiento de tus campañas de anuncios, rastreando métricas clave como el costo por lead, la tasa de conversión y el retorno de la inversión en publicidad (ROAS) para medir el éxito e informar futuras estrategias."
    },
    {
      titulo1: "Digital Marketing Strategy Consultation",
      titulo2: "Custom Landing Page Design",
      titulo3: "Custom Ad Campaigns and Ad Content",
      titulo4: "Conversion Rate Optimization (CRO) and SEO",
      titulo5: "CRM Integration",
      titulo6: "Social Media Management",
      titulo7: "Performance Tracking and Analytics"
    },
    {
      conte1: "We start by understanding your business objectives and target audience to develop a tailored digital marketing strategy that aligns with your goals.",
      conte2: "Our team creates visually stunning and conversion-optimized landing pages that capture the attention of potential patients and encourage them to take action.",
      conte3: "We develop customized ad campaigns and creative ad content that resonates with your target audience, utilizing eye-catching visuals, persuasive copywriting, and interactive elements to drive engagement and conversions. Additionally, we offer email marketing, content marketing, and social media management services.",
      conte4: "We optimize your landing pages and ad campaigns to maximize conversion rates and improve the visibility and rankings of your website on search engine results pages, driving organic traffic and increasing your online presence.",
      conte5: "We integrate our solutions with your CRM system to manage leads efficiently and automate follow-up communications, ensuring that no opportunity falls through the cracks.",
      conte6: "We manage your social media presence on platforms like Facebook, Instagram, and Twitter to increase brand awareness, engage with followers, and generate leads for your practice.",
      conte7: "We provide comprehensive analytics and reporting on the performance of your ad campaigns, tracking key metrics like cost per lead, conversion rate, and return on ad spend (ROAS) to measure success and inform future strategies."
    }
  ]

  
  return (
    <div className="container__services" id="services">
      {
        lang === 'castellano'
        ?
        <h2>Lo que hacemos</h2>
        :
        <h2>What we do</h2>
      }
      {
        lang === 'castellano'
        ?
        <>
        <Accordion tittle={texto[0].titulo1} contenido={texto[1].conte1} active={active} setActive={setActive} />
        <Accordion tittle={texto[0].titulo2} contenido={texto[1].conte2} active={active} setActive={setActive} />
        <Accordion tittle={texto[0].titulo3} contenido={texto[1].conte3} active={active} setActive={setActive} />
        <Accordion tittle={texto[0].titulo4} contenido={texto[1].conte4} active={active} setActive={setActive} />
        <Accordion tittle={texto[0].titulo5} contenido={texto[1].conte5} active={active} setActive={setActive} />
        <Accordion tittle={texto[0].titulo6} contenido={texto[1].conte6} active={active} setActive={setActive} />
        <Accordion tittle={texto[0].titulo7} contenido={texto[1].conte7} active={active} setActive={setActive} />
        </>
        :
        <>
        <Accordion tittle={texto[2].titulo1} contenido={texto[3].conte1} active={active} setActive={setActive} />
        <Accordion tittle={texto[2].titulo2} contenido={texto[3].conte2} active={active} setActive={setActive} />
        <Accordion tittle={texto[2].titulo3} contenido={texto[3].conte3} active={active} setActive={setActive} />
        <Accordion tittle={texto[2].titulo4} contenido={texto[3].conte4} active={active} setActive={setActive} />
        <Accordion tittle={texto[2].titulo5} contenido={texto[3].conte5} active={active} setActive={setActive} />
        <Accordion tittle={texto[2].titulo6} contenido={texto[3].conte6} active={active} setActive={setActive} />
        <Accordion tittle={texto[2].titulo7} contenido={texto[3].conte7} active={active} setActive={setActive} />
        </>
      }
    </div>
  )
}
