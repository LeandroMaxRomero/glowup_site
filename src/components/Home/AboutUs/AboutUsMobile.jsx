import { useContext } from "react";
import { LenguaContext } from "../../../Context/LangProvider";
import { SliderAboutUs } from "./SliderAboutUs"

export const AboutUsMobile = () => {

    const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

    const cardsBoxesEsp = [
        {
            title: 'Experiencia y Expertise',
            desc: 'Con años de experiencia en el sector de la salud, entendemos tus necesidades únicas y sabemos cómo llegar a tu audiencia de manera efectiva.'
        },
        {
            title: 'Resultados Demostrados',
            desc: 'Hemos ayudado a innumerables médicos a aumentar su visibilidad en línea, atraer nuevos pacientes y mejorar su reputación digital.'
        },
        {
            title: 'Enfoque Personalizado',
            desc: 'Desarrollamos estrategias personalizadas que se adaptan a tus objetivos y presupuesto específicos.'
        },
        {
            title: 'Transparencia y Comunicación',
            desc: 'Mantenemos una comunicación abierta y transparente en cada paso del proceso.'
        },
        {
            title: 'Innovación Constante',
            desc: 'Estamos siempre al tanto de las últimas tendencias y tecnologías en marketing digital para garantizar que tu práctica esté siempre un paso adelante.'
        },
        {
            title: 'Compromiso con tu Éxito',
            desc: 'Trabajamos incansablemente para ofrecerte soluciones efectivas y resultados tangibles que impulsen el crecimiento de tu práctica médica.'
        }
    ]

    const cardBoxesEng =[
        {
            title:'Experience and Expertise',
            desc: 'With years of experience in the healthcare sector, we understand your unique needs and know how to reach your audience effectively.'
        },
        {
            title:'Proven Results',
            desc: 'We have helped countless doctors increase their online visibility, attract new patients, and improve their digital reputation.'
        },
        {
            title:'Personalized Approach',
            desc: 'We develop customized strategies that tailor to your specific goals and budget.'
        },
        {
            title:'Transparency and Communication',
            desc: 'We maintain open and transparent communication at every step of the process.'
        },
        {
            title:'Continuous Innovation',
            desc: 'We are always up-to-date with the latest trends and technologies in digital marketing to ensure your practice stays one step ahead.'
        },
        {
            title:'Commitment to Your Success',
            desc: 'We work tirelessly to provide you with effective solutions and tangible results that drive the growth of your medical practice.'
        },
    ]
  return (
    <div className='container__aboutus--mobile' id='whyus-mb'>
        
            {lang==='castellano'
            ?
            <div className="text">
                <h2>¿Por qué trabajar con nosotros?</h2>
                <h3>En GLOWUP, nos dedicamos a potenciar el crecimiento y el éxito de tu práctica médica. ¿Qué nos hace diferentes?</h3>
            </div>
            :
            <div className="text">
                <h2>Why Us?</h2>
                <h3>At GLOWUP, we are dedicated to boosting the growth and success of your medical practice. What sets us apart?</h3>
            </div>
            }

        <SliderAboutUs cardsBoxes={lang==='castellano'?cardsBoxesEsp:cardBoxesEng} />
  </div>
  )
}
