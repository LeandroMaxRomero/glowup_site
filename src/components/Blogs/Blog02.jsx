import { useEffect, useContext } from "react";
import QuestionCard from '../QuestionCard/QuestionCard';
import { SurveyContext } from '../../Context/SurveyContext';
import { LenguaContext } from "../../Context/LangProvider";
import { Footer } from "../Footer/Footer";
import * as Scroll from "react-scroll";
import { BlogSpotsSlider } from "../Home/BlogSpots/BlogSpotsSlider";
import { BackgroundBlogs } from "./BackgroundBlogs";


export const Blog02 = () => {

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
                <img src="./img/header-blog02.png" alt="Header Blog 2" />
            </div>
            
            {
                lang==='castellano'
                ?
                <div className="blog--content">
                  <div className="blog--title">
                    <h2> La Guía Definitiva para la Adquisición de Pacientes: <br></br><span>5 Estrategias que Toda Práctica Debería Conocer</span></h2>
                    <h5>En el competitivo panorama de la salud actual, la adquisición de pacientes es esencial para el crecimiento y el éxito de tu práctica. Con las estrategias de marketing digital adecuadas, puedes atraer nuevos pacientes y retener a los existentes, impulsando el crecimiento de la práctica y asegurando el éxito a largo plazo. En esta guía completa, exploraremos cinco estrategias comprobadas que toda práctica de salud debería conocer para mejorar la adquisición de pacientes.</h5>
                  </div>

                  <div className="blog--text">
                        
                        <h4>1. Mejora tu Presencia en Línea</h4>
                        <p>En la era digital, la presencia en línea de tu práctica juega un papel crucial en la atracción de nuevos pacientes. Comienza optimizando tu sitio web para los motores de búsqueda (SEO) para mejorar la visibilidad y atraer tráfico orgánico. Además, crea contenido atractivo e informativo que resuene con tu audiencia objetivo, mostrando tu experiencia y estableciendo confianza.</p>

                        <h4>2. Aprovecha el Marketing en Redes Sociales</h4>
                        <p>Las plataformas de redes sociales ofrecen una herramienta poderosa para alcanzar e interactuar con potenciales pacientes. Desarrolla una estrategia robusta de redes sociales que incluya publicaciones regulares, contenido atractivo y publicidad dirigida para expandir tu alcance y atraer nuevos pacientes. Fomenta las reseñas y testimonios de pacientes para construir credibilidad y confianza.</p>

                        <h4>3. Implementa Campañas Publicitarias Dirigidas</h4>
                        <p>Invierte en campañas publicitarias dirigidas para alcanzar a los potenciales pacientes donde se encuentren en línea. Utiliza plataformas como Google Ads y Facebook Ads para dirigir tus anuncios a demografías específicas, intereses y ubicaciones geográficas. Redacta copias de anuncios atractivas y crea visuales impactantes que resalten la propuesta de valor única de tu práctica y fomenten la acción.</p>

                        <h4>4. Optimiza el Embudo de Conversión de Pacientes</h4>
                        <p>Simplifica el proceso de conversión de pacientes optimizando tu sitio web y los formularios en línea para que sean fáciles de usar y accesibles. Implementa llamados a la acción (CTAs) claros que guíen a los visitantes a través del proceso de conversión, ya sea para agendar una cita, contactar a tu práctica o suscribirse a un boletín. Rastrea y analiza las métricas de conversión para identificar áreas de mejora y optimizar el rendimiento.</p>

                        <h4>5. Cultiva las Relaciones con los Pacientes</h4>
                        <p>Construir relaciones sólidas con tus pacientes es esencial para el éxito a largo plazo. Implementa campañas de marketing por email para mantenerte conectado con los pacientes y proporcionarles contenido valioso, actualizaciones y ofertas. Personaliza tus comunicaciones basándote en las preferencias y demografías de los pacientes para mejorar el compromiso y la lealtad.</p>

                    </div>

                    <p><span>Conclusión: </span>
                    <br />Al implementar estas cinco estrategias, puedes mejorar la adquisición de pacientes, impulsar el crecimiento de la práctica y posicionar tu práctica de salud para el éxito a largo plazo. En Glow Up Media Group, nos especializamos en soluciones de marketing digital adaptadas a las necesidades únicas de las prácticas de salud. Contáctanos hoy para aprender cómo podemos ayudarte a lograr tus objetivos de adquisición de pacientes y llevar tu práctica al siguiente nivel.</p>
                </div>
                :
                <div className="blog--content">
                  <div className="blog--title">
                    <h2>The Ultimate Guide to Patient Acquisition: <br></br><span>5 Strategies Every Practice Should Know</span></h2>
                    <h5>In {`today's`} competitive healthcare landscape, patient acquisition is essential for the growth and success of your practice. With the right digital marketing strategies, you can attract new patients and retain existing ones, driving practice growth and ensuring long-term success. In this comprehensive guide, {`we'll`} explore five proven strategies that every healthcare practice should know to enhance patient acquisition.</h5>
                  </div>

                  <div className="blog--text">
                        
                        <h4>1. Enhance Your Online Presence</h4>
                        <p>In the digital age, your {`practice's`} online presence plays a crucial role in attracting new patients. Start by optimizing your website for search engines (SEO) to improve visibility and attract organic traffic. Additionally, create engaging and informative content that resonates with your target audience, showcasing your expertise and establishing trust.</p>

                        <h4>2. Leverage Social Media Marketing</h4>
                        <p>Social media platforms offer a powerful tool for reaching and engaging with potential patients. Develop a robust social media strategy that includes regular posting, engaging content, and targeted advertising to expand your reach and attract new patients. Encourage patient reviews and testimonials to build credibility and trust.</p>

                        <h4>3. Implement Targeted Advertising Campaigns</h4>
                        <p>Invest in targeted advertising campaigns to reach potential patients where they are online. Utilize platforms like Google Ads and Facebook Ads to target specific demographics, interests, and geographic locations. Craft compelling ad copy and creative visuals that highlight your {`practice's`} unique value proposition and encourage action.</p>

                        <h4>4. Optimize Patient Conversion Funnel</h4>
                        <p>Streamline the patient conversion process by optimizing your website and online forms for ease of use and accessibility. Implement clear calls-to-action (CTAs) that guide visitors through the conversion process, whether {`it's`} scheduling an appointment, contacting your practice, or signing up for a newsletter. Track and analyze conversion metrics to identify areas for improvement and optimize performance.</p>

                        <h4>5. Nurture Patient Relationships</h4>
                        <p>Building strong relationships with your patients is essential for long-term success. Implement email marketing campaigns to stay connected with patients and provide them with valuable content, updates, and offers. Personalize your communications based on patient preferences and demographics to enhance engagement and loyalty.</p>

                    </div>

                    <p><span>Conclusion: </span>
                    <br />By implementing these five strategies, you can enhance patient acquisition, drive practice growth, and position your healthcare practice for long-term success. At Glow Up Media Group, we specialize in digital marketing solutions tailored to the unique needs of healthcare practices. Contact us today to learn how we can help you achieve your patient acquisition goals and take your practice to the next level.
</p>
                </div>
            }

            <BlogSpotsSlider content ={lang==='castellano'? title.title_es : title.title_en}/>

        </div>

    <Footer />
    </>
  )
}

