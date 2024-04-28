import PropTypes from "prop-types";
import { useState } from "react";

export const Accordion = ({tittle, contenido}) => {

  const [active, setActive] = useState(false)
  return (
    <div className="accordion">

        <div className="accordionHeading">
            <div className="containerTitle">

                <h3 onClick={() => setActive(!active)}>{tittle}</h3>

                <span onClick={() => setActive(!active)}>
                    {active === true
                    ?
                    <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    |  <rect width="47" height="9.4" fill="black"/>
                    |  <rect x="37.6001" y="47" width="47" height="9.4" transform="rotate(-90 37.6001 47)" fill="black"/>
                    |  <rect y="40.2839" width="50.4876" height="9.4" transform="rotate(-45 0 40.2839)" fill="black"/>
                    |</svg>
                    :
                    <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="47" y="47" width="47" height="9.4" transform="rotate(-180 47 47)" fill="black"/>
                      <rect x="9.3999" width="47" height="9.4" transform="rotate(90 9.3999 0)" fill="black"/>
                      <rect x="47" y="6.71606" width="50.4876" height="9.4" transform="rotate(135 47 6.71606)" fill="black"/>
                    </svg>
                    }
                </span>
            </div>
        </div>  
        <div className={(active === true ? "show" : "") + " accordionContent"}>
            <div className="containerText">
                <p className="cont-despl">{contenido}</p>
            </div>
        </div>

    </div>
  )
}

Accordion.propTypes = {
  tittle: PropTypes.string.isRequired,
  contenido: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};
