import { useContext } from "react";
import { LenguaContext } from "../../Context/LangProvider";
import ContactForm from "./ContactForm";
export const Form = () => {

  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();



  return (
    <div className="container__form">

      <div className="column__invitation">
        <h2>{lang==='castellano'?"Contáctanos":"Get in touch"}</h2>
        <h4>{lang==='castellano'?"envianos un mensaje y uno de nuestros expertos en marketing se pondrá en contacto contigo lo antes posible":"send us a message and one of our marketing experts will contact you as soon as possible"}</h4>

        <div className="form__logos--social">
            <a href="/instagram.com">
              <img src="./img/instagram.svg" alt="Logo de Instagram" className="logo__redesform"/>
            </a>
            <a href="/">
              <img src="./img/twitter.svg" alt="Logo de Twitter" className="logo__redesform"/>
            </a>
            <a href="/">
              <img src="./img/facebook.svg" alt="Logo de Facebook" className="logo__redesform"/>
            </a>
            <a href="/">
              <img src="./img/linkedin.svg" alt="Logo de LinkedIn" className="logo__redesform"/>
            </a>
        </div>
      </div>

      <div className="column__form">

        <ContactForm />

      </div>
        
    </div>
  )
}