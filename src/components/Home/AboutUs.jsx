import { useContext } from "react";
import { LenguaContext } from "../../Context/LangProvider";

export const AboutUs = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  return (
    <>
    {lang==='castellano'
      ?
      <div className="container__aboutus" id="whyus">

        <div className="box box1">
          <img src="./img/fondo-card.svg" alt="" className="img-card"/>
          <div className="box--text">
            <h3>Experiencia y Expertise</h3>
            <p>Con años de experiencia en el sector de la salud, entendemos tus necesidades únicas y sabemos cómo llegar a tu audiencia de manera efectiva.</p>
          </div>
        </div>

        <div className="box box2">
          <img src="./img/fondo-card.svg" alt="" className="img-card"/>
          <div className="box--text">
            <h3>Resultados Demostrados</h3>
            <p>Hemos ayudado a innumerables médicos a aumentar su visibilidad en línea, atraer nuevos pacientes y mejorar su reputación digital.</p>
          </div>
        </div>

        <div className="text">
            <h2>¿Por qué trabajar con nosotros?</h2>
            <h3>En GLOWUP, nos dedicamos a potenciar el crecimiento y el éxito de tu práctica médica. ¿Qué nos hace diferentes?</h3>
        </div>

        <div className="box box3">
            <img src="./img/fondo-card.svg" alt="" className="img-card"/>
            <div className="box--text">
              <h3>Enfoque Personalizado</h3>
              <p>Desarrollamos estrategias personalizadas que se adaptan a tus objetivos y presupuesto específicos.</p>
            </div>
        </div>

        <div className="box box4">
          <img src="./img/fondo-card.svg" alt="" className="img-card"/>
          <div className="box--text">
            <h3>Transparencia y Comunicación</h3>
            <p>Mantenemos una comunicación abierta y transparente en cada paso del proceso.</p>
          </div>
        </div>

        <div className="box box5">
          <img src="./img/fondo-card.svg" alt="" className="img-card"/>
          <div className="box--text">
            <h3>Innovación Constante</h3>
            <p>Estamos siempre al tanto de las últimas tendencias y tecnologías en marketing digital para garantizar que tu práctica esté siempre un paso adelante.</p>
          </div>
        </div>

        <div className="box box6">
          <img src="./img/fondo-card.svg" alt="" className="img-card"/>
          <div className="box--text">
            <h3>Compromiso con tu Éxito</h3>
            <p>Trabajamos incansablemente para ofrecerte soluciones efectivas y resultados tangibles que impulsen el crecimiento de tu práctica médica.</p>
          </div>
        </div>

    </div>
      
      :
    <div className="container__aboutus" id="whyus">

      <div className="box box1">
          <img src="./img/fondo-card.svg" alt="" className="img-card"/>
          <div className="box--text">
              <h3>Experience and Expertise</h3>
              <p>With years of experience in the healthcare sector, we understand your unique needs and know how to reach your audience effectively.</p>
          </div>

      </div>

      <div className="box box2">
          <img src="./img/fondo-card.svg" alt="" className="img-card"/>
          <div className="box--text">
              <h3>Proven Results</h3>
              <p>We have helped countless doctors increase their online visibility, attract new patients, and improve their digital reputation.</p>
          </div>
      </div>

      <div className="text">
          <h2>Why Us?</h2>
          <h3>At GLOWUP, we are dedicated to boosting the growth and success of your medical practice. What sets us apart?</h3>
      </div>

      <div className="box box3">
          <img src="./img/fondo-card.svg" alt="" className="img-card"/>
          <div className="box--text">
              <h3>Personalized Approach</h3>
              <p>We develop customized strategies that tailor to your specific goals and budget.</p>
          </div>
      </div>

      <div className="box box4">
          <img src="./img/fondo-card.svg" alt="" className="img-card"/>
          <div className="box--text">
              <h3>Transparency and Communication</h3>
              <p>We maintain open and transparent communication at every step of the process.</p>
          </div>
      </div>

      <div className="box box5">
          <img src="./img/fondo-card.svg" alt="" className="img-card"/>
          <div className="box--text">
              <h3>Continuous Innovation</h3>
              <p>We are always up-to-date with the latest trends and technologies in digital marketing to ensure your practice stays one step ahead.</p>
          </div>
      </div>

      <div className="box box6">
          <img src="./img/fondo-card.svg" alt="" className="img-card"/>
          <div className="box--text">
              <h3>Commitment to Your Success</h3>
              <p>We work tirelessly to provide you with effective solutions and tangible results that drive the growth of your medical practice.</p>
          </div>
      </div>
    </div>
    }
    </>
    
  )
}
