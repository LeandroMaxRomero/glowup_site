import { useContext } from "react";
import { LenguaContext } from "../../../Context/LangProvider";
import { SliderAboutUs } from "./SliderAboutUs"

export const AboutUsMobile = () => {

    const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

    const cardsBoxesEsp = [
        {
            title: 'Éxito Comprobado',
            desc: 'Descubre la diferencia inigualable con el historial comprobado de Glow Up Media Group. A través de nuestra dedicación constante, hemos entregado resultados medibles, impulsando el crecimiento y el éxito de las prácticas. ¡Asóciate con nosotros para desbloquear el máximo potencial de tu práctica!'
        },
        {
            title: 'Soluciones Personalizadas',
            desc: 'Experimenta la excelencia personalizada con Glow Up Media Group. Diseñamos estrategias a medida, precisamente adaptadas a las necesidades únicas de tu práctica, asegurando un impacto máximo y éxito. Confía en nosotros para entregar soluciones personalizadas que eleven tu práctica a nuevas alturas.'
        },
        {
            title: 'Transparencia y Comunicación',
            desc: 'En Glow Up Media Group, la transparencia y la comunicación son primordiales. Priorizamos mantenerte completamente informado e involucrado a lo largo del camino, fomentando la claridad y la confianza en cada paso. Con nuestras líneas de comunicación abiertas, colaboramos sin problemas para lograr los objetivos de tu práctica.'
        },
        {
            title: 'Innovación Continua',
            desc: 'Abraza el progreso con el compromiso de Glow Up Media Group con la innovación continua. Estamos dedicados a explorar estrategias y tecnologías de vanguardia, asegurando que nos mantengamos a la vanguardia y generemos resultados para tu práctica. Asóciate con nosotros para aprovechar soluciones innovadoras y un enfoque de marketing orientado al futuro.'
        },
        {
            title: 'Dedicación a Tu Éxito',
            desc: 'En Glow Up Media Group, tu éxito es nuestra pasión inquebrantable. Con un compromiso incansable, nos dedicamos a empoderar el crecimiento de tu práctica y lograr tus objetivos. Confía en nosotros como tu aliado constante en el continuo viaje hacia el éxito.'
        },
    ]

    const cardBoxesEng =[
        {
            title:'Proven Success',
            desc: "Discover the unparalleled difference with Glow Up Media Group's proven track record. Through our steadfast dedication, we've consistently delivered measurable outcomes, fueling practice growth and success. Partner with us to unlock your practice's full potential!"
        },
        {
            title:'Tailored Solutions',
            desc: "Experience personalized excellence with Glow Up Media Group. We craft bespoke strategies precisely tailored to your practice's unique needs, ensuring maximum impact and success. Trust us to deliver customized solutions that elevate your practice to new heights."
        },
        {
            title:'Transparency and Communication',
            desc: "At Glow Up Media Group, transparency and communication are paramount. We prioritize keeping you fully informed and engaged throughout the journey, fostering clarity and trust every step of the way. With our open lines of communication, we collaborate seamlessly to realize your practice's goals."
        },
        {
            title:'Continuous Innovation',
            desc: "Embrace progress with Glow Up Media Group's commitment to continuous innovation. We're dedicated to exploring cutting-edge strategies and technologies, ensuring we stay ahead of the curve and drive results for your practice. Partner with us to harness innovative solutions and a forward-thinking marketing approach."
        },
        {
            title:'Dedicated to Your Success',
            desc: 'At Glow Up Media Group, your success is our unwavering passion. With relentless commitment, we dedicate ourselves to empowering the growth of your practice and achieving your goals. Count on us as your steadfast ally in the ongoing journey towards success.'
        },
    ]
  return (
    <div className='container__aboutus--mobile' id='whyus-mobile'>
        
            {lang==='castellano'
            ?
            <div className="text">
                <h2>¿Por qué elegirnos?</h2>
                <h3>Cuando te asocias con Glow Up Media Group, te alineas con un equipo dedicado al triunfo de tu práctica. Con nuestro profundo conocimiento de la industria, estrategias innovadoras y un compromiso inquebrantable con la excelencia, superamos constantemente las expectativas. Experimenta la diferencia transformadora con nosotros y lleva el marketing de tu práctica a alturas sin precedentes.</h3>
            </div>
            :
            <div className="text">
                <h2>Why choose us?</h2>
                <h3>When you partner with Glow Up Media Group, {`you're`} aligning with a team dedicated to your {`practice's`} triumph. With our deep industry knowledge, innovative strategies, and unwavering commitment to excellence, we consistently surpass expectations. Experience the transformative difference with us and propel your {`practice's`} marketing to unprecedented heights.</h3>
            </div>
            }

        <SliderAboutUs cardsBoxes={lang==='castellano'?cardsBoxesEsp:cardBoxesEng} />
  </div>
  )
}
