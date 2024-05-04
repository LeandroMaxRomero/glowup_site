import PropTypes from "prop-types";
import { useState } from "react";

export const Accordion = ({tittle, contenido}) => {

  const [active, setActive] = useState(false)
  return (
    <div className="accordion">

        <div className="accordionHeading">
            <div className="containerTitle" onClick={() => setActive(!active)}>

                <h3>{tittle}</h3>

                <span className={(active === true ? "open" : "close") + " accordion--arrow"}>
                    
                    <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.895508" y="19.0955" width="26.2584" height="4" transform="rotate(-45 0.895508 19.0955)" fill="white"/>
                      <rect x="35.2197" y="21.9238" width="26.2584" height="4" transform="rotate(-135 35.2197 21.9238)" fill="white"/>
                    </svg>
                    
                </span>
                
            </div>
        </div>  
        <div className={(active === true ? "show" : "hide") + " accordionContent"}>
            <div className="containerText">
                <p className="cont-despl">{contenido}</p>
            </div>
        </div>
        <div className="divisor--accordion"></div>

    </div>
  )
}

Accordion.propTypes = {
  tittle: PropTypes.string.isRequired,
  contenido: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};
