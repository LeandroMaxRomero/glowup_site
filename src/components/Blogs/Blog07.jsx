import { useEffect, useContext } from "react";
import QuestionCard from '../QuestionCard/QuestionCard';
import { SurveyContext } from '../../Context/SurveyContext';
import { LenguaContext } from "../../Context/LangProvider";
import { Footer } from "../Footer/Footer";
import * as Scroll from "react-scroll";
import { BlogSpotsSlider } from "../Home/BlogSpots/BlogSpotsSlider";
import { BackgroundBlogs } from "./BackgroundBlogs";


export const Blog07 = () => {

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
                <img src="./img/header-blog01.png" alt="" />
            </div>
            
            {
                lang==='castellano'
                ?
                <div className="blog--content">
                  <div className="blog--title">
                    <h2>7 Consejos para Crear <span>Landing Pages de Alta Conversión</span> para tu Práctica</h2>
                    <h5>En el panorama digital del marketing de atención médica, las páginas de destino juegan un papel crucial en la conversión de visitantes en pacientes. Una página de destino bien diseñada y optimizada puede marcar la diferencia entre que un posible paciente tome acción o abandone tu sitio web. Exploremos siete consejos prácticos para ayudar a los especialistas en salud y propietarios de clínicas a crear páginas de destino de alta conversión que impulsen el crecimiento de la práctica.</h5>
                  </div>

                  <div className="blog--text">
                        
                        <h4>1. Titular Claro y Atractivo: Captar Atención</h4>
                        <p>Tu titular es lo primero que los visitantes ven cuando llegan a tu página. Hazlo claro, conciso y convincente, capturando la esencia de lo que ofrece tu práctica y el valor que proporciona a los pacientes. Utiliza un lenguaje que resuene con tu audiencia objetivo y aborde sus necesidades y preocupaciones específicas.</p>

                        <h4>2. Visuales Atractivos: Cuenta tu Historia</h4>
                        <p>Incorpora elementos visuales llamativos como imágenes, videos o gráficos que muestren tu práctica, servicios e instalaciones. El contenido visual no solo mejora la estética de tu página de destino, sino que también ayuda a transmitir la identidad y narrativa de la marca de tu práctica. Usa visuales que evoquen emociones y resuenen con tu audiencia, alentándolos a explorar más.</p>

                        <h4>3. Texto Orientado a Beneficios: Aborda las Necesidades del Paciente</h4>
                        <p>Comunica claramente los beneficios de elegir tu práctica sobre otras. Enfócate en abordar las necesidades del paciente, puntos de dolor y resultados deseados. Usa un lenguaje persuasivo que resalte la propuesta de valor de tus servicios y cómo pueden mejorar la vida de los pacientes. Mantén el texto conciso, fácil de leer y entender.</p>

                        <h4>4. Prueba Social: Construye Confianza</h4>
                        <p>Incorpora elementos de prueba social como testimonios de pacientes, reseñas, calificaciones o certificaciones para construir confianza y credibilidad con los visitantes. Muestra experiencias del mundo real e historias de éxito que demuestren el impacto positivo que tu práctica ha tenido en la vida de los pacientes. La prueba social asegura a los visitantes que están tomando la decisión correcta al elegir tu práctica.</p>

                        <h4>5. Llamada a la Acción (CTA) Clara: Guiar la Acción</h4>
                        <p>Cada página de destino debe tener una llamada a la acción clara y convincente que incite a los visitantes a dar el siguiente paso. Ya sea programar una cita, contactar con tu práctica o descargar un recurso, haz que la CTA destaque visualmente y utiliza un lenguaje orientado a la acción que fomente la acción inmediata. Coloca la CTA de manera prominente por encima del pliegue para máxima visibilidad.</p>

                        <h4>6. Optimización Móvil: Atender a los Usuarios Móviles</h4>
                        <p>Con el aumento de dispositivos móviles, es esencial asegurar que tus páginas de destino estén optimizadas para la capacidad de respuesta móvil. Prueba tus páginas de destino en varios dispositivos y tamaños de pantalla para garantizar una experiencia de usuario fluida en todas las plataformas. El diseño amigable para móviles no solo mejora la satisfacción del usuario, sino que también aumenta las tasas de conversión entre los usuarios móviles.</p>

                        <h4>7. Pruebas A/B y Optimización: Mejorar Continuamente</h4>
                        <p>Implementa pruebas A/B para experimentar con diferentes elementos de tus páginas de destino, como titulares, visuales, texto y CTAs. Analiza el rendimiento de cada variación para identificar lo que resuena mejor con tu audiencia y genera tasas de conversión más altas. Optimiza continuamente tus páginas de destino basándote en ideas impulsadas por datos para maximizar su efectividad con el tiempo.</p>

                    </div>

                    <p><span>Desbloquea el Potencial de tus Páginas de Destino con Glow Up Media Group</span></p>
                    <p>¿Listo para crear páginas de destino de alta conversión que impulsen el crecimiento de tu práctica? Glow Up Media Group se especializa en crear soluciones de marketing digital personalizadas para especialistas en salud y propietarios de clínicas. Nuestro equipo de expertos está dedicado a ayudarte a optimizar tus páginas de destino, atraer clientes potenciales de calidad y convertir visitantes en pacientes leales.</p>
                    <p>Contáctanos hoy para obtener más información sobre nuestros servicios y programar una consulta. ¡Trabajemos juntos para desbloquear todo el potencial de las páginas de destino de tu práctica y alcanzar tus objetivos comerciales!</p>
                </div>
                :
                <div className="blog--content">
                  <div className="blog--title">
                    <h2>7 Tips for Creating <span>High-Converting Landing Pages</span> for Your Practice</h2>
                    <h5>In the digital landscape of healthcare marketing, landing pages play a crucial role in converting visitors into patients. A well-designed and optimized landing page can be the difference between a potential patient taking action or leaving your website. {`Let's`} explore seven actionable tips to help healthcare specialists and clinic owners create high-converting landing pages that drive practice growth.</h5>
                  </div>

                  <div className="blog--text">
                        
                        <h4>1. Clear and Compelling Headline: Grab Attention</h4>
                        <p>Your headline is the first thing visitors see when they land on your page. Make it clear, concise, and compelling, capturing the essence of what your practice offers and the value it provides to patients. Use language that resonates with your target audience and addresses their specific needs and concerns.</p>

                        <h4>2. Engaging Visuals: Tell Your Story</h4>
                        <p>Incorporate eye-catching visuals such as images, videos, or graphics that showcase your practice, services, and facilities. Visual content not only enhances the aesthetics of your landing page but also helps convey your {`practice's`} brand identity and storytelling. Use visuals that evoke emotion and resonate with your audience, encouraging them to explore further.</p>

                        <h4>3. Benefit-Oriented Copy: Address Patient Needs</h4>
                        <p>Clearly communicate the benefits of choosing your practice over others. Focus on addressing patient needs, pain points, and desired outcomes. Use persuasive language that highlights the value proposition of your services and how they can improve the lives of patients. Keep the copy concise, skimmable, and easy to understand.</p>

                        <h4>4. Social Proof: Build Trust</h4>
                        <p>Incorporate social proof elements such as patient testimonials, reviews, ratings, or certifications to build trust and credibility with visitors. Showcase real-world experiences and success stories that demonstrate the positive impact your practice has had on {`patients'`} lives. Social proof reassures visitors that they are making the right choice by choosing your practice.</p>

                        <h4>5. Clear Call-to-Action (CTA): Guide Action</h4>
                        <p>Every landing page should have a clear and compelling call-to-action that prompts visitors to take the next step. Whether {`it's`} scheduling an appointment, contacting your practice, or downloading a resource, make the CTA stand out visually and use action-oriented language that encourages immediate action. Position the CTA prominently above the fold for maximum visibility.</p>

                        <h4>6. Mobile Optimization: Cater to Mobile Users</h4>
                        <p>With the rise of mobile devices, {`it's`} essential to ensure that your landing pages are optimized for mobile responsiveness. Test your landing pages on various devices and screen sizes to ensure a seamless user experience across all platforms. Mobile-friendly design not only improves user satisfaction but also boosts conversion rates among mobile users.</p>

                        <h4>7. A/B Testing and Optimization: Continuously Improve</h4>
                        <p>Implement A/B testing to experiment with different elements of your landing pages, such as headlines, visuals, copy, and CTAs. Analyze the performance of each variation to identify what resonates best with your audience and drives higher conversion rates. Continuously optimize your landing pages based on data-driven insights to maximize their effectiveness over time.</p>

                    </div>

                    <p><span>Unlock the Potential of Your Landing Pages with Glow Up Media Group</span></p>
                    <p>Ready to create high-converting landing pages that drive practice growth? Glow Up Media Group specializes in crafting customized digital marketing solutions for healthcare specialists and clinic owners. Our team of experts is dedicated to helping you optimize your landing pages, attract quality leads, and convert visitors into loyal patients.</p>
                    <p>Contact us today to learn more about our services and schedule a consultation. {`Let's`} work together to unlock the full potential of your {`practice's`} landing pages and achieve your business objectives!</p>
                </div>
            }

            <BlogSpotsSlider content ={lang==='castellano'? title.title_es : title.title_en}/>

        </div>

    <Footer />
    </>
  )
}





