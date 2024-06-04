import { useEffect, useContext } from "react";
import QuestionCard from '../QuestionCard/QuestionCard';
import { SurveyContext } from '../../Context/SurveyContext';
import { LenguaContext } from "../../Context/LangProvider";
import { Footer } from "../Footer/Footer";
import * as Scroll from "react-scroll";
import { BlogSpotsSlider } from "../Home/BlogSpots/BlogSpotsSlider";
import { BackgroundBlogs } from "./BackgroundBlogs";
export const Blog01 = () => {

    const { setShowCard, showCard } = useContext(SurveyContext);
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  useEffect(() => {
    const isCompleted = localStorage.getItem('surveyCompleted');
    const isClosedWithoutCompletion = localStorage.getItem('surveyClosedWithoutCompletion');


    if (!isCompleted && isClosedWithoutCompletion) {
      setShowCard(true);
    }
    
  }, [setShowCard]);

  let scroll = Scroll.animateScroll;

  useEffect(() => {
    scroll.scrollToTop();
  });

  const title = {
    title_es: "Más Blogs",
    title_en: "More Blogs"
  }


  return (
    <>
    <QuestionCard />
    <BackgroundBlogs />
    
        <div className={(showCard===true?'blur':'')+" container__blogs"}>
            
            <div className="container__blog--header">
                <img src="./img/header-blog01.png" alt="Header Blog 1" />
            </div>
            
            {
                lang==='castellano'
                ?
                <div className="blog--content">
                    <div className="blog--title">
                        <h2>10 Estrategias Comprobadas de Marketing Digital para Elevar el Crecimiento de tu Práctica de Salud en 2024:<br></br><span>Una Guía Completa</span></h2>
                    </div>

                    <div className="blog--text">

                        <h4>Páginas de Destino Personalizadas de Alta Conversión:</h4>
                        <p>Eleva tu presencia en línea con nuestras páginas de destino personalizadas diseñadas para cautivar a tu audiencia y aumentar las conversiones. Nuestros diseños visualmente impresionantes y centrados en el usuario aseguran una experiencia fluida y maximizan la generación de leads.</p>

                        <h4>Diseño de Campañas Publicitarias a Medida:</h4>
                        <p>Colabora con nosotros para crear campañas publicitarias estratégicas que eleven tu marca y generen resultados. Nuestro equipo elabora campañas personalizadas que resuenan con tu audiencia y logran tus objetivos de marketing.</p>

                        <h4>Campañas Publicitarias Personalizadas y Creación de Contenido:</h4>
                        <p>Destácate de la competencia con nuestras campañas publicitarias personalizadas y servicios de creación de contenido. Aprovecha el poder de los mensajes personalizados para involucrar a tu audiencia y alcanzar tus objetivos de marketing de manera efectiva.</p>

                        <h4>Optimización de la Construcción de Embudos y Marketing por Email:</h4>
                        <p>Optimiza tu embudo de ventas e involucra a tu audiencia con nuestros servicios de construcción de embudos y marketing por email. Desde la captura de leads hasta la conversión, te ayudaremos a entregar mensajes dirigidos y aumentar los ingresos mediante campañas de email efectivas.</p>

                        <h4>Servicios Profesionales de Redacción:</h4>
                        <p>Eleva el mensaje de tu marca con nuestros servicios profesionales de redacción. Nuestros redactores expertos crean contenido convincente y persuasivo que resuena con tu audiencia y genera acción, asegurando que tu marca se destaque en el saturado panorama digital.</p>

                        <h4>Servicios de SEO y CRO Orientados a la Conversión:</h4>
                        <p>Aumenta tu visibilidad en línea y maximiza las conversiones con nuestros servicios de SEO y CRO. Generamos tráfico dirigido y optimizamos la experiencia del usuario para resultados inigualables, asegurando que tu práctica se posicione más alto y convierta más leads.</p>

                        <h4>Sistemas de Generación de Leads y Ventas:</h4>
                        <p>Impulsa el crecimiento y aumenta los ingresos con nuestros sistemas de generación de leads y ventas. Te ayudaremos a implementar procesos automatizados para atraer, nutrir y convertir leads en clientes leales, maximizando el potencial de crecimiento de tu práctica.</p>

                        <h4>Soluciones de Integración de CRM sin Problemas:</h4>
                        <p>Simplifica tus operaciones y mejora el compromiso del cliente con nuestras soluciones de integración de CRM. Desbloquea el potencial completo de tus esfuerzos de marketing con la gestión de datos integrada, permitiéndote comprender y servir mejor a tus pacientes.</p>

                        <h4>Seguimiento del Rendimiento y Servicios de Análisis Perspicaces:</h4>
                        <p>Obtén información procesable y sigue tu éxito con nuestros servicios de seguimiento del rendimiento y análisis. Aprovecha el poder de la toma de decisiones basada en datos para la mejora continua, asegurando que tu práctica se mantenga a la vanguardia.</p>

                        <h4>Soporte y Guía Continuos:</h4>
                        <p>En Glow Up Media Group, somos más que un proveedor de servicios; somos tu socio dedicado en el crecimiento de tu práctica. Nuestro equipo ofrece soporte y guía continuos, ayudándote a navegar el siempre cambiante panorama digital y alcanzar tus metas.</p>
                    </div>


                    <p>Esta guía completa ofrece ideas invaluables y estrategias accionables para impulsar el crecimiento de tu práctica de salud en 2024 y más allá. Con Glow Up Media Group como tu socio, el éxito está al alcance.</p>

                </div>
                :
                <div className="blog--content">
                    <div className="blog--title">
                        <h2>10 Proven Digital Marketing Strategies to Elevate Your Healthcare {`Practice's`} Growth in 2024: <br></br><span>A Comprehensive Guide</span></h2>
                    </div>

                    <div className="blog--text">

                        <h4>Custom High-Conversion Landing Pages:</h4>
                        <p>Elevate your online presence with our custom landing pages designed to captivate your audience and drive conversions. Our visually stunning, user-centric designs ensure a seamless user experience and maximize lead generation.</p>

                        <h4>Tailor-Made Ad Campaign Design:</h4>
                        <p>Partner with us to create strategic ad campaigns that elevate your brand and drive results. Our team crafts personalized campaigns that resonate with your audience and achieve your marketing objectives.</p>

                        <h4>Personalized Ad Campaigns and Content Creation:</h4>
                        <p>Stand out from the crowd with our personalized ad campaigns and content creation services. Harness the power of customized messaging to engage your audience and achieve your marketing goals effectively.</p>

                        <h4>Optimized Funnel Building and Email Marketing:</h4>
                        <p>Optimize your sales funnel and engage your audience with our funnel building and email marketing services. From lead capture to conversion, {`we'll`} help you deliver targeted messages and drive revenue through effective email campaigns.</p>

                        <h4>Professional Copywriting Services:</h4>
                        <p>Elevate your {`brand's`} messaging with our professional copywriting services. Our expert copywriters craft compelling, persuasive content that resonates with your audience and drives action, ensuring your brand stands out in the crowded digital landscape.</p>

                        <h4>Conversion-Driven SEO and CRO Services:</h4>
                        <p>Boost your online visibility and maximize conversions with our SEO and CRO services. We drive targeted traffic and optimize user experience for unparalleled results, ensuring your practice ranks higher and converts more leads.</p>

                        <h4>Lead Generation Sales Systems:</h4>
                        <p>Drive growth and increase revenue with our lead generation sales systems. {`We'll`} help you implement automated processes to attract, nurture, and convert leads into loyal customers, maximizing your {`practice's`} potential for growth.</p>

                        <h4>Seamless CRM Integration Solutions:</h4>
                        <p>Streamline your operations and enhance customer engagement with our CRM integration solutions. Unlock the full potential of your marketing efforts with integrated data management, allowing you to better understand and serve your patients.</p>

                        <h4>Insightful Performance Tracking and Analytics:</h4>
                        <p>Gain actionable insights and track your success with our performance tracking and analytics services. Harness the power of data-driven decision-making for continuous improvement, ensuring your practice stays ahead of the curve.</p>

                        <h4>Continuous Support and Guidance:</h4>
                        <p>At Glow Up Media Group, {`we're`} more than just a service provider; {`we're`} your dedicated partner in practice growth. Our team provides continuous support and guidance, helping you navigate the ever-evolving digital landscape and achieve your goals.</p>

                    </div>

                    <p>This comprehensive guide offers invaluable insights and actionable strategies to fuel your healthcare {`practice's`} growth in 2024 and beyond. With Glow Up Media Group as your partner, success is within reach.</p>

                </div>
            }

            <BlogSpotsSlider content ={lang==='castellano'? title.title_es : title.title_en}/>

        </div>

    <Footer />
    </>
  )
}
