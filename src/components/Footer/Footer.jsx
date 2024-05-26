import { Link } from "react-router-dom";
import { useContext } from "react";
import { LenguaContext } from "../../Context/LangProvider";

export const Footer = () => {

  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  return (
    <div className="container__footer">
      <div className="footer">

        <div className="footer__contact">
          <div className="footer__logo">
            <img src="./img/LogoFooter.svg" alt="Logo Footer" />
          </div>

          <h3>{lang==="castellano"?"Contacto":"Contact"}</h3>

          <div className="footer__contact--links">
            <h4><span>Email:</span> glowup@address.com</h4>
            <h4><span>{lang==="castellano"?"Número de teléfono":"Phone number"}</span> +1 12345 6789</h4>
          </div>

        </div>

        <div className="footer__nav">

          <h3>{lang==="castellano"?"Navegación":"Navigation"}</h3>

          <div className="footer__nav--links">
            <a href="/#home">{lang==="castellano"?"Inicio":"Home"}</a>
            <a href="/#services">{lang==="castellano"?"Servicios":"Services"}</a>
            <a href="/#whyus">{lang==="castellano"?"¿Por qué nosotros?":"Why us?"}</a>
            <a href="/#blogs">Blogs</a>
            <Link to="/form">{lang==="castellano"?"Contacto":"Contact"}</Link>
          </div>

        </div>

        <div className="footer__social">

          <h3>Social Media</h3>

          <div className="footer__social--links">
            <a href="/">Instagram</a>
            <a href="/">LinkedIn</a>
            <a href="/">X (Twitter)</a>
            <a href="/">Facebook</a>
          </div>

        </div>


      </div>

        <div className="container--terms">
            <Link to="/terms">{lang==="castellano" ? "Términos de uso" : "Terms of use" }</Link>
            <Link to="/privpolicy">{lang==='castellano'?"Políticas de privacidad": "Privacy policy"}</Link>
          </div>
      
    </div>
  )
}
