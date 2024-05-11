import { useState } from "react";
import { Link } from "react-router-dom"
import { Lang } from "./Lang";


import { useContext } from "react";
import { LenguaContext } from "../../Context/LangProvider";


export const NavbarMobile = () => {

    const useLengua = () => useContext(LenguaContext);
    const { lang } = useLengua();

    const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="navbar--mobile">
          <div className="navbar--fixed">
            <Link to="/#home"> 
                <svg width="119" height="22" viewBox="0 0 119 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8517 20.8529C14.6415 21.5 12.3685 22 9.85937 22C3.57181 22 0 17.5 0 11C0 4.47059 3.867 0 10.3022 0C12.5161 0 14.671 0.500001 15.7632 1.14706L14.2282 5.05882C13.4017 4.58824 12.1323 4.2353 10.5088 4.2353C7.37977 4.2353 5.01824 6.38235 5.01824 10.9706C5.01824 15.5294 7.17314 17.8235 9.50514 17.8235C10.2726 17.8235 10.8335 17.7059 11.1582 17.5882V12.5588H8.59005V8.82353H15.8517V20.8529Z" fill="white"/>
                <path d="M30.2213 21.6471H19.2992V0.352942H24.3175V17.4706H30.2213V21.6471Z" fill="white"/>
                <path d="M48.2722 11C48.2722 17.2647 45.645 22 39.9478 22C34.2507 22 31.6235 17.2647 31.6235 11C31.6235 4.73529 34.2507 0 39.9478 0C45.645 0 48.2722 4.73529 48.2722 11ZM43.254 11C43.254 6.88235 42.1323 4.38235 39.9478 4.38235C37.7634 4.38235 36.6417 6.88235 36.6417 11C36.6417 15.1176 37.7634 17.6176 39.9478 17.6176C42.1323 17.6176 43.254 15.1176 43.254 11Z" fill="white"/>
                <path d="M75.5472 0.352942L70.2928 21.6471H65.4812L63.0016 10.7353C62.6768 9.29412 62.4702 7.61765 62.4702 7.61765H62.4112C62.4112 7.61765 62.2045 9.29412 61.8798 10.7353L59.4002 21.6471H54.5886L49.3342 0.352942H54.4115L56.714 12.5882C56.9501 13.8529 57.1568 15.4412 57.1568 15.4412H57.2158C57.2158 15.4412 57.3929 13.8529 57.6586 12.5882L60.3744 0.352942H64.507L67.2228 12.5882C67.4885 13.8529 67.6656 15.4412 67.6656 15.4412H67.7246C67.7246 15.4412 67.9312 13.8529 68.1674 12.5882L70.4699 0.352942H75.5472Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M101.906 0.000194883H94.8742V15.2244C94.8742 16.7518 93.7694 17.6508 92.3614 17.6508C90.9533 17.6508 89.8485 16.7518 89.8485 15.2244V0.000194883H84.7646V15.162C84.7646 19.5695 88.0251 21.9958 92.3614 21.9958V22C96.6976 22 99.9581 19.5695 99.9581 15.1662V7.78302H97.4121L101.906 0.000194883ZM101.906 0.00119199L101.906 0.000194883C102.471 0.000194883 103.205 0.00127249 104.027 0.00247797C106.002 0.00537579 108.48 0.00901251 110.319 0.000194874C118.331 -0.0331003 118.717 4.20788 118.717 6.74247C118.717 10.7587 115.876 13.7261 110.165 13.7261L110.157 13.722C109.559 13.722 108.84 13.6637 108.454 13.6013L108.454 22H103.478V7.78302H106.399L101.906 0.00119199ZM101.906 0.000194883L101.906 0.000508656L101.906 0.000194883H101.906ZM108.454 3.68764C108.845 3.56694 109.472 3.44625 110.099 3.44625V3.45041C112.491 3.45041 113.717 4.49921 113.717 6.74664C113.717 8.78181 112.462 9.92217 109.92 9.92217C109.351 9.92217 108.782 9.85974 108.454 9.80147V3.68764Z" fill="url(#paint0_linear_406_751)"/>
                <defs>
                    <linearGradient id="paint0_linear_406_751" x1="101.741" y1="0" x2="101.741" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5BD8FF"/>
                    <stop offset="1" stopColor="#69FFB7"/>
                    </linearGradient>
                </defs>
                </svg>
            </Link>

            {
                openMenu === false
                ?
                <button onClick={() => setOpenMenu(!openMenu)}>
                <img src="./img/btn-navbar-open.svg" alt="Button open menu" />
                </button>
                :
                <button onClick={() => setOpenMenu(!openMenu)}>
                <img src="./img/btn-navbar-close.svg" alt="Button open menu" />
                </button>
            }

          </div>


          <div className={(openMenu===true?"show":"hidden")+" navbar--desp"}>

            <>
                {lang==='castellano'
                ?
                <div className="container__navlinks--mobile" onClick={() => setOpenMenu(!openMenu)}>
                    <a href="/#home">Inicio</a>
                    <a href="/#services">Servicios</a>
                    <a href="/#whyus-mb">¿Por qué nosotros?</a>
                    <a href="/#blogs">Blogs</a>
                    <Link to="/form">Contacto</Link>
                </div>
                :
                <div className="container__navlinks--mobile" onClick={() => setOpenMenu(!openMenu)}>
                    <a href="/#home">Home</a>
                    <a href="/#services">Services</a>
                    <a href="/#whyus-mb">Why us?</a>
                    <a href="/#blogs">Blogs</a>
                    <Link to="/form">Contact</Link>
                </div>
                }
            </>

            <Lang />
          
          </div>

    </div>
  )
}
