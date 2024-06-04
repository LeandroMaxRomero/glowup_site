import { useEffect, useContext } from "react";
import QuestionCard from '../QuestionCard/QuestionCard';
import { SurveyContext } from '../../Context/SurveyContext';
import { LenguaContext } from "../../Context/LangProvider";
import { Footer } from "../Footer/Footer";
import * as Scroll from "react-scroll";
import { BlogSpotsSlider } from "../Home/BlogSpots/BlogSpotsSlider";
import { BackgroundBlogs } from "./BackgroundBlogs";


export const Blog08 = () => {

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
                <img src="./img/header-blog08.png" alt="Header blog 8" />
            </div>
            
            {
                lang==='castellano'
                ?
                <div className="blog--content">
                  <div className="blog--title">
                    <h2>Cómo Ejecutar Campañas Publicitarias Exitosas:<br /><span>Una Guía Paso a Paso para Prácticas Médicas</span></h2>
                    <h5>Ejecutar campañas publicitarias exitosas es esencial para las prácticas médicas que buscan expandir su alcance, atraer nuevos pacientes y promover el crecimiento de la práctica. En la era digital actual, la publicidad efectiva requiere un enfoque estratégico que aproveche el poder de los canales digitales para dirigirse y atraer a potenciales pacientes. Sumérgete en esta guía paso a paso diseñada para capacitar a los especialistas en salud y propietarios de clínicas en la ejecución de campañas publicitarias exitosas.</h5>
                  </div>

                  <div className="blog--text">
                        
                        <h4>1. Establece Metas Claras: Define tus Objetivos</h4>
                        <p>Antes de lanzar cualquier campaña publicitaria, es crucial definir tus metas y objetivos. Ya sea que busques aumentar el reconocimiento de marca, impulsar el tráfico web o generar clientes potenciales, delinear claramente tus metas ayudará a dar forma a la estrategia de tu campaña y medir su éxito.</p>

                        <h4>2. Conoce a tu Audiencia: Dirígete al Público Correcto</h4>
                        <p>Entiende las demografías, intereses, comportamientos y puntos de dolor de tu público objetivo para crear campañas publicitarias altamente dirigidas. Utiliza la segmentación de audiencia y las opciones de orientación que proporcionan las plataformas publicitarias para llegar a la audiencia más relevante para tu práctica.</p>

                        <h4>3. Elige la Plataforma Correcta: Selecciona los Mejores Canales</h4>
                        <p>Identifica los canales publicitarios más efectivos para alcanzar a tu audiencia objetivo. Dependiendo de tus metas y las demografías de tu audiencia, puedes optar por anunciarte en plataformas como Google Ads, Facebook Ads, Instagram, LinkedIn, o plataformas específicas de salud como Healthgrades o Zocdoc.</p>

                        <h4>4. Crea Anuncios Atractivos: Captura la Atención</h4>
                        <p>Desarrolla anuncios atractivos que resuenen con tu audiencia objetivo y comuniquen la propuesta de valor única de tu práctica. Utiliza visuales impactantes, textos persuasivos y llamadas a la acción claras para fomentar el compromiso y promover la acción.</p>

                        <h4>5. Optimiza las Páginas de Destino: Mejora las Tasas de Conversión</h4>
                        <p>Asegúrate de que tus campañas publicitarias dirijan a páginas de destino dedicadas y optimizadas para la conversión. Crea páginas de destino que proporcionen información relevante, aborden las necesidades del visitante y los guíen hacia la acción deseada, ya sea programar una cita, descargar un recurso o contactar con tu práctica.</p>

                        <h4>6. Monitorea y Mide el Desempeño: Rastrea Métricas Clave</h4>
                        <p>Monitorea continuamente el desempeño de tus campañas publicitarias y rastrea métricas clave como tasas de clics, tasas de conversión, costo por adquisición y retorno de inversión (ROI). Utiliza las herramientas analíticas proporcionadas por las plataformas publicitarias para obtener información sobre el rendimiento de la campaña e identificar áreas para optimización.</p>

                        <h4>7. Optimiza e Itera: Mejora con el Tiempo</h4>
                        <p>Basándote en los datos de desempeño y las ideas obtenidas, optimiza tus campañas publicitarias para mejorar su efectividad con el tiempo. Experimenta con diferentes creatividades de anuncios, opciones de orientación y mensajes para identificar qué resuena mejor con tu audiencia. Itera y refina continuamente tu estrategia de campaña para lograr mejores resultados.</p>

                    </div>

                    <p><span>Desbloquea el Poder de las Campañas Publicitarias Exitosas con Glow Up Media Group</span></p>
                    <p>¿Listo para llevar los esfuerzos publicitarios de tu práctica al siguiente nivel? Glow Up Media Group se especializa en crear soluciones de marketing digital personalizadas para especialistas en salud y propietarios de clínicas. Nuestro equipo de expertos está dedicado a ayudarte a ejecutar campañas publicitarias exitosas que impulsen el crecimiento de tu práctica y logren tus objetivos comerciales.</p>
                    <p>Contáctanos hoy para obtener más información sobre nuestros servicios y programar una consulta. ¡Trabajemos juntos para desbloquear todo el potencial de la estrategia publicitaria de tu práctica y alcanzar nuevas alturas de éxito!</p>
                </div>
                :
                <div className="blog--content">
                  <div className="blog--title">
                    <h2>How to Run Successful Ad Campaigns:<br /><span>A Step-by-Step Guide for Medical Practices</span></h2>
                    <h5>IRunning successful ad campaigns is essential for medical practices looking to expand their reach, attract new patients, and drive practice growth. In {`today's`} digital age, effective advertising requires a strategic approach that leverages the power of digital channels to target and engage potential patients. {`Let's`} dive into a step-by-step guide tailored to empower healthcare specialists and clinic owners in running successful ad campaigns.</h5>
                  </div>

                  <div className="blog--text">
                        
                        <h4>1. Set Clear Goals: Define Your Objectives</h4>
                        <p>Before launching any ad campaign, {`it's`} crucial to define your goals and objectives. Whether {`you're`} looking to increase brand awareness, drive website traffic, or generate leads, clearly outlining your goals will help shape your campaign strategy and measure its success.</p>

                        <h4>2. Know Your Audience: Target the Right Audience</h4>
                        <p>Understand your target {`audience's`} demographics, interests, behaviors, and pain points to create highly targeted ad campaigns. Use audience segmentation and targeting options provided by advertising platforms to reach the most relevant audience for your practice.</p>

                        <h4>3. Choose the Right Platform: Select the Best Channels</h4>
                        <p>Identify the most effective advertising channels to reach your target audience. Depending on your goals and audience demographics, you may choose to advertise on platforms such as Google Ads, Facebook Ads, Instagram, LinkedIn, or healthcare-specific platforms like Healthgrades or Zocdoc.</p>

                        <h4>4. Craft Compelling Ad Creative: Grab Attention</h4>
                        <p>Develop attention-grabbing ad creative that resonates with your target audience and communicates your {`practice's`} unique value proposition. Use compelling visuals, persuasive copy, and clear calls-to-action to encourage engagement and drive action.</p>

                        <h4>5. Optimize Landing Pages: Improve Conversion Rates</h4>
                        <p>Ensure that your ad campaigns lead to dedicated landing pages optimized for conversion. Create landing pages that provide relevant information, address visitor needs, and guide them towards taking the desired action, whether {`it's`} scheduling an appointment, downloading a resource, or contacting your practice.</p>

                        <h4>6. Monitor and Measure Performance: Track Key Metrics</h4>
                        <p>Continuously monitor the performance of your ad campaigns and track key metrics such as click-through rates, conversion rates, cost per acquisition, and return on investment (ROI). Use analytics tools provided by advertising platforms to gain insights into campaign performance and identify areas for optimization.</p>

                        <h4>7. Optimize and Iterate: Improve Over Time</h4>
                        <p>Based on performance data and insights, optimize your ad campaigns to improve their effectiveness over time. Experiment with different ad creatives, targeting options, and messaging to identify what resonates best with your audience. Continuously iterate and refine your campaign strategy to achieve better results.</p>

                    </div>

                    <p><span>Unlock the Power of Successful Ad Campaigns with Glow Up Media Group</span></p>
                    <p>Ready to take your {`practice's`} advertising efforts to the next level? Glow Up Media Group specializes in creating customized digital marketing solutions for healthcare specialists and clinic owners. Our team of experts is dedicated to helping you run successful ad campaigns that drive practice growth and achieve your business objectives.</p>
                    <p>Contact us today to learn more about our services and schedule a consultation. {`Let's`} work together to unlock the full potential of your {`practice's`} advertising strategy and reach new heights of success!</p>
                </div>
            }

            <BlogSpotsSlider content ={lang==='castellano'? title.title_es : title.title_en}/>

        </div>

    <Footer />
    </>
  )
}






