import { useEffect, useContext } from "react";
import QuestionCard from '../QuestionCard/QuestionCard';
import { SurveyContext } from '../../Context/SurveyContext';
import { LenguaContext } from "../../Context/LangProvider";
import { Footer } from "../Footer/Footer";
import * as Scroll from "react-scroll";
import { BlogSpotsSlider } from "../Home/BlogSpots/BlogSpotsSlider";
import { BackgroundBlogs } from "./BackgroundBlogs";


export const Blog04 = () => {

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
                <img src="./img/header-blog04.png" alt="Logo de bandeja de entrada" />
            </div>
            
            {
                lang==='castellano'
                ?
                <div className="blog--content">
                  <div className="blog--title">
                    <h2><span>5 Estrategias de Marketing por Email</span> para Nutrir Leads y Retener Pacientes</h2>
                    <h5>En el acelerado panorama digital de hoy, el marketing por email sigue siendo una herramienta poderosa para los especialistas en salud y los propietarios de clínicas que buscan nutrir leads y retener pacientes. Al aprovechar campañas de email estratégicas, las prácticas pueden interactuar eficazmente con su audiencia, construir relaciones y fomentar el crecimiento de la práctica. Aquí tienes cinco estrategias prácticas para elevar tus esfuerzos de marketing por email y lograr resultados significativos:</h5>
                  </div>

                  <div className="blog--text">
                        
                        <h4>1. Segmenta tu Audiencia:</h4>
                        <p>Los correos electrónicos de talla única son cosa del pasado. Para maximizar el impacto de tus campañas de email, segmenta tu audiencia en función de demografías, preferencias y comportamiento de compromiso. Al enviar mensajes dirigidos a segmentos específicos de la audiencia, puedes entregar contenido que resuene con los destinatarios y genere mayores tasas de apertura y clics.</p>

                        <h4>2. Personaliza tu Contenido:</h4>
                        <p>La personalización es clave para establecer una conexión significativa con tu audiencia. Dirígete a los destinatarios por su nombre, personaliza el contenido del email según sus intereses e interacciones pasadas con tu práctica, y ofrece recomendaciones u ofertas relevantes adaptadas a sus necesidades. Los correos electrónicos personalizados tienen más probabilidades de captar la atención y fomentar el compromiso, lo que en última instancia conduce a una mayor retención y lealtad del paciente.</p>

                        <h4>3. Proporciona Contenido Valioso:</h4>
                        <p>El contenido de tus emails debe ofrecer un valor tangible a los destinatarios. Comparte recursos educativos, consejos de salud, perspectivas de la industria y actualizaciones sobre los servicios y ofertas de tu práctica. Posiciónate como una fuente confiable de información y proporciona soluciones a preocupaciones o desafíos de salud comunes que pueda enfrentar tu audiencia. El contenido valioso no solo mantiene a los destinatarios comprometidos, sino que también refuerza tu experiencia y autoridad en tu campo.</p>

                        <h4>4. Automatiza tus Campañas:</h4>
                        <p>Ahorra tiempo y optimiza tus esfuerzos de marketing por email implementando flujos de trabajo automatizados. Configura secuencias de emails automáticos desencadenadas por acciones o hitos específicos, como registros de nuevos pacientes, recordatorios de citas o seguimientos post-visita. La automatización te permite mantenerte en contacto con los pacientes en cada etapa de su viaje, nutrir leads a través de secuencias de nutrición dirigidas y proporcionar comunicación personalizada sin intervención manual.</p>

                        <h4>5. Mide y Optimiza el Rendimiento:</h4>
                        <p>Monitorea continuamente el rendimiento de tus campañas de email y utiliza conocimientos basados en datos para optimizar tu estrategia. Rastrea métricas como tasas de apertura, tasas de clics, tasas de conversión y tasas de cancelación de suscripción para evaluar la efectividad de tus emails e identificar áreas de mejora. Prueba diferentes líneas de asunto, formatos de contenido, horarios de envío y llamados a la acción para determinar qué resuena mejor con tu audiencia y refina tu enfoque en consecuencia.</p>

                    </div>

                    <p>Al implementar estas cinco estrategias de marketing por email, los especialistas en salud y los propietarios de clínicas pueden cultivar leads, retener pacientes y fomentar el crecimiento de la práctica. Recuerda priorizar la relevancia, la personalización y el valor en tus comunicaciones por email, y siempre esfuerzate por proporcionar una experiencia fluida y atractiva para tu audiencia. Con la estrategia y el enfoque adecuados, el marketing por email puede ser una herramienta poderosa para construir relaciones duraderas con los pacientes y generar resultados significativos para tu práctica.</p>
                </div>
                :
                <div className="blog--content">
                  <div className="blog--title">
                    <h2><span>5 Email Marketing Strategies</span> to Nurture Leads and Retain Patients</h2>
                    <h5>In {`today's`} fast-paced digital landscape, email marketing remains a powerful tool for healthcare specialists and clinic owners seeking to nurture leads and retain patients. By leveraging strategic email campaigns, practices can effectively engage with their audience, build relationships, and drive practice growth. Here are five actionable strategies to elevate your email marketing efforts and achieve meaningful results:</h5>
                  </div>

                  <div className="blog--text">
                        
                        <h4>1. Segment Your Audience:</h4>
                        <p>One-size-fits-all emails are a thing of the past. To maximize the impact of your email campaigns, segment your audience based on demographics, preferences, and engagement behavior. By sending targeted messages tailored to specific audience segments, you can deliver content that resonates with recipients and drives higher open and click-through rates.</p>

                        <h4>2. Personalize Your Content:</h4>
                        <p>Personalization is key to establishing a meaningful connection with your audience. Address recipients by name, customize email content based on their interests and past interactions with your practice, and provide relevant offers or recommendations tailored to their needs. Personalized emails are more likely to capture attention and drive engagement, ultimately leading to increased patient retention and loyalty.</p>

                        <h4>3. Provide Valuable Content:</h4>
                        <p>Your email content should offer tangible value to recipients. Share educational resources, health tips, industry insights, and updates about your {`practice's`} services and offerings. Position yourself as a trusted source of information and provide solutions to common health concerns or challenges your audience may face. Valuable content not only keeps recipients engaged but also reinforces your expertise and authority in your field.</p>

                        <h4>4. Automate Your Campaigns:</h4>
                        <p>Save time and streamline your email marketing efforts by implementing automation workflows. Set up automated email sequences triggered by specific actions or milestones, such as new patient registrations, appointment reminders, or post-visit follow-ups. Automation allows you to stay in touch with patients at every stage of their journey, nurture leads through targeted nurturing sequences, and provide personalized communication without manual intervention.</p>

                        <h4>5. Measure and Optimize Performance:</h4>
                        <p>Continuously monitor the performance of your email campaigns and use data-driven insights to optimize your strategy. Track metrics such as open rates, click-through rates, conversion rates, and unsubscribe rates to gauge the effectiveness of your emails and identify areas for improvement. Test different subject lines, content formats, send times, and calls-to-action to determine what resonates best with your audience and refine your approach accordingly.</p>

                    </div>

                    <p>By implementing these five email marketing strategies, healthcare specialists and clinic owners can cultivate leads, retain patients, and drive practice growth. Remember to prioritize relevance, personalization, and value in your email communications, and always strive to provide a seamless and engaging experience for your audience. With the right strategy and approach, email marketing can be a powerful tool for building lasting relationships with patients and driving meaningful results for your practice</p>
                </div>
            }

            <BlogSpotsSlider content ={lang==='castellano'? title.title_es : title.title_en}/>

        </div>

    <Footer />
    </>
  )
}



