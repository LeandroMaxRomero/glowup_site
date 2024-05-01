import PropTypes from "prop-types";
import { useState } from "react";

export const Accordion = ({tittle, contenido}) => {

  const [active, setActive] = useState(false)
  return (
    <div className="accordion">

        <div className="accordionHeading">
            <div className="containerTitle">

                <h3 onClick={() => setActive(!active)}>{tittle}</h3>

                <span onClick={() => setActive(!active)}
                className={(active === true ? "open" : "close") + " accordion--arrow"}
                >
                    {/* {active === true
                    ? */}
                    {/* <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.0483398" y="0.499268" width="47" height="9.4" fill="white"/>
                      <rect x="37.6484" y="47.4993" width="47" height="9.4" transform="rotate(-90 37.6484 47.4993)" fill="white"/>
                      <rect x="0.0483398" y="40.7832" width="50.4876" height="9.4" transform="rotate(-45 0.0483398 40.7832)" fill="white"/>
                    </svg> */}
                    <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.895508" y="19.0955" width="26.2584" height="4" transform="rotate(-45 0.895508 19.0955)" fill="white"/>
  <rect x="35.2197" y="21.9238" width="26.2584" height="4" transform="rotate(-135 35.2197 21.9238)" fill="white"/>
</svg>
                    {/* :
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="47.0483" y="47.4993" width="47" height="9.4" transform="rotate(-180 47.0483 47.4993)" fill="white"/>
                      <rect x="9.44824" y="0.499268" width="47" height="9.4" transform="rotate(90 9.44824 0.499268)" fill="white"/>
                      <rect x="47.0483" y="7.21533" width="50.4876" height="9.4" transform="rotate(135 47.0483 7.21533)" fill="white"/>
                    </svg>
                    } */}
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
