import { LenguaContext } from "../../../Context/LangProvider";
import { Accordion } from "./Accordion";
import { useContext, useState } from "react";

export const Services = () => {
  const [active, setActive] = useState("");
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();
  

  const texto = [
    {
      titulo1: "Landing pages Personalizadas de Alta Conversión",
      titulo2: "Diseño de Campañas Publicitarias Personalizadas",
      titulo3: "Campañas Publicitarias y Creación de Contenidos Personalizados",
      titulo4: "Creación de Funnels y Email Marketing",
      titulo5: "Redacción Profesional",
      titulo6: "Servicios de SEO y CRO Orientados a la Conversión",
      titulo7: "Sistemas de Generación de Leads y Ventas",
      titulo8: "Soluciones de Integración CRM Sin Interrupciones",
      titulo9: "Rastreo y Análisis de Desempeño Perspicaz"
    },
    {
      conte1: "Eleva tu presencia en línea con nuestras Páginas de Aterrizaje Personalizadas de Alta Conversión. Captiva a tu audiencia y aumenta las conversiones con diseños visualmente impresionantes y centrados en el usuario.",
      conte2: "Campañas publicitarias a medida diseñadas para elevar tu marca y obtener resultados. Colabora con nosotros para crear campañas estratégicas que resuenen con tu audiencia y logren tus objetivos.",
      conte3: "Destácate de la multitud con nuestras Campañas Publicitarias y Creación de Contenidos Personalizados. Aprovecha el poder de los mensajes personalizados y las campañas creativas para alcanzar tus objetivos.",
      conte4: "Optimiza tu funnel de ventas y engagement a tu audiencia con nuestros servicios de Creación de Funnels y Email Marketing. Desde la captura de leads hasta la conversión, te ayudaremos a entregar mensajes dirigidos y a generar ingresos a través de campañas de email efectivas.",
      conte5: "Eleva los mensajes de tu marca con nuestros servicios de Redacción Profesional. Nuestros expertos redactores crean contenido convincente y persuasivo que resuena con tu audiencia y motiva a la acción, asegurando que tu marca se destaque en el saturado panorama digital.",
      conte6: "Aumenta tu visibilidad en línea y maximiza las conversiones con nuestros Servicios de SEO y CRO Orientados a la Conversión. Genera tráfico dirigido y optimiza la experiencia del usuario para obtener resultados inigualables.",
      conte7: "Impulsa el crecimiento y aumenta los ingresos con nuestros Sistemas de Generación de Leads y Ventas. Te ayudamos a implementar procesos automatizados de generación de leads y sistemas de ventas para atraer, nutrir y convertir leads en clientes leales, maximizando el potencial de tu negocio.",
      conte8: "Optimiza tus operaciones y mejora la participación del cliente con nuestras Soluciones de Integración CRM Sin Interrupciones. Desbloquea el potencial completo de tus esfuerzos de marketing con una gestión de datos integrada.",
      conte9: "Obtén información procesable y rastrea tu éxito con nuestro Rastreo y Análisis de Desempeño Perspicaz. Aprovecha el poder de la toma de decisiones basada en datos para una mejora continua."
    },
    {
      titulo1: "Custom High-Conversion Landing Pages",
      titulo2: "Custom Ad Campaign Design",
      titulo3: "Personalized Ad Campaigns and Content Creation",
      titulo4: "Funnel Building and Email Marketing",
      titulo5: "Professional Copywriting",
      titulo6: "Conversion-Driven SEO and CRO Services",
      titulo7: "Lead Generation Sales Systems",
      titulo8: "Seamless CRM Integration Solutions",
      titulo9: "Insightful Performance Tracking and Analytics"
    },
    {
      conte1: "Elevate your online presence with our Custom High-Conversion Landing Pages. Captivate your audience and drive conversions with visually stunning, user-centric designs.",
      conte2: "Tailor-made ad campaigns crafted to elevate your brand and drive results. Partner with us to create strategic campaigns that resonate with your audience and achieve your objectives.",
      conte3: "Stand out from the crowd with our Personalized Ad Campaigns and Content Creation. Harness the power of customized messaging and creative campaigns to achieve your objectives.",
      conte4: "Optimize your sales funnel and engage your audience with our Funnel Building and Email Marketing services. From lead capture to conversion, we'll help you deliver targeted messages and drive revenue through effective email campaigns.",
      conte5: "Elevate your brand's messaging with our Professional Copywriting services. Our expert copywriters craft compelling, persuasive content that resonates with your audience and drives action, ensuring your brand stands out in the crowded digital landscape.",
      conte6: "Boost your online visibility and maximize conversions with our Conversion-Driven SEO and CRO Services. Drive targeted traffic and optimize user experience for unparalleled results.",
      conte7: "Drive growth and increase revenue with our Lead Generation Sales Systems. We'll help you implement automated lead generation processes and sales systems to attract, nurture, and convert leads into loyal customers, maximizing your business's potential.",
      conte8: "Streamline your operations and enhance customer engagement with our Seamless CRM Integration Solutions. Unlock the full potential of your marketing efforts with integrated data management.",
      conte9: "Gain actionable insights and track your success with our Insightful Performance Tracking and Analytics. Harness the power of data-driven decision-making for continuous improvement."
    }
  ]

  
  return (
    <div className="container__services" id="services">
      {
        lang === 'castellano'
        ?
        <h2>Nuestras soluciones</h2>
        :
        <h2>Our solution</h2>
      }
      {
        lang === 'castellano'
        ?
        <h4><span>Consultoría Estratégica de Marketing Digital: </span>Nuestra Consultoría Estratégica de Marketing Digital sienta las bases para tu éxito. Obtén información valiosa y estrategias personalizadas para impulsar tu marca hacia adelante.</h4>
        :
        <h4><span>Strategic Digital Marketing Consultation: </span>Our Strategic Digital Marketing Consultation lays the groundwork for your success. Gain invaluable insights and tailored strategies to propel your brand forward.</h4>

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
        <Accordion tittle={texto[0].titulo8} contenido={texto[1].conte8} active={active} setActive={setActive} />
        <Accordion tittle={texto[0].titulo9} contenido={texto[1].conte9} active={active} setActive={setActive} />
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
        <Accordion tittle={texto[2].titulo8} contenido={texto[3].conte8} active={active} setActive={setActive} />
        <Accordion tittle={texto[2].titulo9} contenido={texto[3].conte9} active={active} setActive={setActive} />
        </>
      }
    </div>
  )
}
