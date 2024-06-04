import { useEffect, useContext } from "react";
import QuestionCard from '../QuestionCard/QuestionCard';
import { SurveyContext } from '../../Context/SurveyContext';
import { LenguaContext } from "../../Context/LangProvider";
import { Footer } from "../Footer/Footer";
import * as Scroll from "react-scroll";
import { BlogSpotsSlider } from "../Home/BlogSpots/BlogSpotsSlider";
import { BackgroundBlogs } from "./BackgroundBlogs";


export const Blog10 = () => {

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
                <img src="./img/header-blog10.png" alt="Header blog 10" />
            </div>
            
            {
                lang==='castellano'
                ?
                <div className="blog--content">
                  <div className="blog--title">
                    <h2>Cómo Medir el Éxito de tus Esfuerzos de Marketing:<br /><span>6 Métricas Clave para Rastrear</span></h2>
                    <h5>En el dinámico mundo del marketing para la salud, medir el éxito de tus esfuerzos de marketing es crucial para entender qué está funcionando, qué necesita mejoras y dónde asignar recursos para obtener resultados óptimos. Al rastrear métricas clave, los especialistas en salud y propietarios de clínicas pueden obtener valiosas perspectivas sobre la efectividad de sus estrategias de marketing digital y tomar decisiones informadas para impulsar el crecimiento de la práctica. Vamos a explorar seis métricas esenciales para rastrear y cómo pueden capacitarte en tus esfuerzos de marketing.</h5>
                  </div>

                  <div className="blog--text">
                        
                        <h4>1. Tráfico del Sitio Web: Mide la Visibilidad en Línea</h4>
                        <p>Monitorear el tráfico del sitio web te permite evaluar la efectividad de tu visibilidad en línea y esfuerzos de marketing. Rastrear métricas como visitas totales, visitantes únicos y vistas de página te ayuda a entender cuántas personas están visitando tu sitio web y cuáles páginas son las más populares. Un aumento en el tráfico del sitio web indica una mejora en la visibilidad en línea y el compromiso con tu audiencia objetivo.</p>
                        
                        <h4>2. Tasa de Conversión: Mide el Compromiso y la Acción</h4>
                        <p>La tasa de conversión mide el porcentaje de visitantes del sitio web que realizan una acción deseada, como programar una cita, suscribirse a un boletín informativo o descargar un recurso. Al rastrear las tasas de conversión, puedes evaluar la efectividad de tus llamadas a la acción (CTAs) y páginas de destino en la promoción del compromiso y la acción de los pacientes. Una tasa de conversión más alta indica que tus esfuerzos de marketing están resonando con tu audiencia y los están incitando a actuar.</p>
                        
                        <h4>3. Costo por Adquisición (CPA): Evalúa la Eficiencia del Marketing</h4>
                        <p>El costo por adquisición mide el costo promedio de adquirir un nuevo paciente a través de tus esfuerzos de marketing. Dividiendo el costo total de tus campañas de marketing por el número de nuevos pacientes adquiridos, puedes evaluar la eficiencia y el retorno de la inversión (ROI) de tus inversiones en marketing. Monitorear el CPA te ayuda a identificar qué canales y campañas de marketing son los más rentables para adquirir nuevos pacientes y asignar recursos en consecuencia.</p>
                        
                        <h4>4. Valor de Vida del Paciente (LTV): Evalúa el Impacto a Largo Plazo</h4>
                        <p>El valor de vida del paciente mide los ingresos totales generados por un paciente durante toda la duración de su relación con tu práctica. Al entender el valor de vida de tus pacientes, puedes evaluar el impacto a largo plazo de tus esfuerzos de marketing y tomar decisiones informadas sobre estrategias de adquisición y retención de pacientes. Aumentar el valor de vida del paciente requiere un enfoque en ofrecer experiencias excepcionales y construir relaciones a largo plazo.</p>
                        
                        <h4>5. Retorno de la Inversión (ROI): Mide la Efectividad del Marketing</h4>
                        <p>El retorno de la inversión mide el retorno financiero generado por tus esfuerzos de marketing en relación con el costo de esos esfuerzos. Comparando los ingresos generados por tus campañas de marketing con el costo total de esas campañas, puedes evaluar la efectividad general y la rentabilidad de tus iniciativas de marketing. Un ROI positivo indica que tus esfuerzos de marketing están generando un retorno favorable, mientras que un ROI negativo puede requerir ajustes en tu estrategia.</p>
                        
                        <h4>6. Reseñas en Línea y Reputación: Evalúa la Satisfacción del Paciente</h4>
                        <p>Monitorear las reseñas en línea y las plataformas de gestión de la reputación te permite evaluar la satisfacción del paciente y la percepción de tu práctica. Rastrear métricas como el volumen de reseñas, calificaciones y sentimiento te ayuda a entender cómo perciben los pacientes tu práctica e identificar áreas de mejora. Las reseñas positivas y una fuerte reputación en línea pueden atraer nuevos pacientes y construir confianza y credibilidad en tu comunidad.</p>

                    </div>

                    <p><span>¡Toma Acción con Glow Up Media Group Hoy Mismo!</span></p>
                    <p>¿Listo para llevar tus esfuerzos de marketing al siguiente nivel y lograr el crecimiento de tu práctica? Glow Up Media Group se especializa en crear soluciones personalizadas de marketing digital para especialistas en salud y propietarios de clínicas. Nuestro equipo de expertos está dedicado a ayudarte a rastrear métricas clave, medir el éxito y optimizar tu estrategia de marketing para lograr el máximo impacto.</p>
                    <p>Contáctanos hoy para aprender más sobre nuestros servicios y programar una consulta. ¡Trabajemos juntos para desbloquear el potencial completo de los esfuerzos de marketing de tu práctica y lograr el crecimiento!</p>
                </div>
                :
                <div className="blog--content">
                  <div className="blog--title">
                    <h2>How to Measure the Success of Your Marketing Efforts:<br /><span>6 Key Metrics to Track</span></h2>
                    <h5>In the dynamic world of healthcare marketing, measuring the success of your marketing efforts is crucial for understanding {`what's`} working, what needs improvement, and where to allocate resources for optimal results. By tracking key metrics, healthcare specialists and clinic owners can gain valuable insights into the effectiveness of their digital marketing strategies and make informed decisions to drive practice growth. {`Let's`} explore six essential metrics to track and how they can empower you in your marketing efforts.</h5>
                  </div>

                  <div className="blog--text">
                        
                        <h4>1. Website Traffic: Gauge Online Visibility</h4>
                        <p>Monitoring website traffic allows you to assess the effectiveness of your online visibility and marketing efforts. Track metrics such as total visits, unique visitors, and page views to understand how many people are visiting your website and which pages are most popular. An increase in website traffic indicates improved online visibility and engagement with your target audience.</p>
                        
                        <h4>2. Conversion Rate: Measure Engagement and Action</h4>
                        <p>Conversion rate measures the percentage of website visitors who take a desired action, such as scheduling an appointment, signing up for a newsletter, or downloading a resource. By tracking conversion rates, you can evaluate the effectiveness of your calls-to-action (CTAs) and landing pages in driving patient engagement and action. A higher conversion rate indicates that your marketing efforts are resonating with your audience and prompting them to take action.</p>
                        
                        <h4>3. Cost per Acquisition (CPA): Assess Marketing Efficiency</h4>
                        <p>Cost per acquisition measures the average cost of acquiring a new patient through your marketing efforts. By dividing the total cost of your marketing campaigns by the number of new patients acquired, you can assess the efficiency and ROI of your marketing investments. Monitoring CPA helps you identify which marketing channels and campaigns are the most cost-effective in acquiring new patients and allocate resources accordingly.</p>
                        
                        <h4>4. Patient Lifetime Value (LTV): Evaluate Long-Term Impact</h4>
                        <p>Patient lifetime value measures the total revenue generated by a patient over the entire duration of their relationship with your practice. By understanding the lifetime value of your patients, you can assess the long-term impact of your marketing efforts and make informed decisions about patient acquisition and retention strategies. Increasing patient lifetime value requires a focus on delivering exceptional patient experiences and building long-term relationships.</p>
                        
                        <h4>5. Return on Investment (ROI): Measure Marketing Effectiveness</h4>
                        <p>Return on investment measures the financial return generated by your marketing efforts relative to the cost of those efforts. By comparing the revenue generated from your marketing campaigns to the total cost of those campaigns, you can assess the overall effectiveness and profitability of your marketing initiatives. A positive ROI indicates that your marketing efforts are generating a favorable return, while a negative ROI may require adjustments to your strategy.</p>
                        
                        <h4>6. Online Reviews and Reputation: Assess Patient Satisfaction</h4>
                        <p>Monitoring online reviews and reputation management platforms allows you to assess patient satisfaction and perception of your practice. Track metrics such as review volume, ratings, and sentiment to understand how patients perceive your practice and identify areas for improvement. Positive reviews and a strong online reputation can attract new patients and build trust and credibility in your community.</p>

                    </div>

                    <p><span>Take Action with Glow Up Media Group Today!</span></p>
                    <p>Ready to take your marketing efforts to the next level and achieve practice growth? Glow Up Media Group specializes in creating customized digital marketing solutions for healthcare specialists and clinic owners. Our team of experts is dedicated to helping you track key metrics, measure success, and optimize your marketing strategy for maximum impact.</p>
                    <p>Contact us today to learn more about our services and schedule a consultation. {`Let's`} work together to unlock the full potential of your {`practice's`} marketing efforts and drive growth!
</p>
                </div>
            }

            <BlogSpotsSlider content ={lang==='castellano'? title.title_es : title.title_en}/>

        </div>

    <Footer />
    </>
  )
}







