import { Link } from "react-router-dom";
import { useContext } from "react";
import { LenguaContext } from "../../Context/LangProvider";


export const NavLinks = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();
  return (
    <div className="container__navlinks">
    
    {lang==='castellano'
    ?
    <>
        <a href="/#home">Inicio</a>
        <a href="/#services">Servicios</a>
        <a href="/#whyus">¿Por qué nosotros?</a>
        <a href="/#blogs">Blogs</a>
        <Link to="/form">Contacto</Link>
    </>
    :
    <>
        <a href="/#home">Home</a>
        <a href="/#services">Services</a>
        <a href="/#whyus">Why us?</a>
        <a href="/#blogs">Blogs</a>
        <Link to="/form">Contact</Link>
    </>
  }
    </div>
  )
}
