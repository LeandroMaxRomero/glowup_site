import { Link } from "react-router-dom";
import { useContext } from "react";
import { LenguaContext } from "../../Context/LangProvider";



export const Header = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  
  return (
    <div className={(lang==='castellano'?"castellano":"") + " container__header"}>

          <div className="header-title">
            {
            lang === 'castellano'
            ?
            <h2><span>Potencia</span> tu consultorio médico</h2>
            :
            <h2><span>Boost</span> Your Medical Practice</h2>
            }
          </div>
          {lang==='castellano'
          ?<h4>Servicios de marketing especializados diseñados para profesionales médicos</h4>
          :<h4>Specialized marketing services tailored for medical professionals</h4>}

          
          
          <Link to="/form">
            <div className="header--btn">
              {lang==='castellano'
              ?
              <h3>Hablemos</h3>
              :
              <h3>Let’s talk</h3>
              }
              <svg width="39" height="15" viewBox="0 0 39 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.837158 7.54015C0.837158 6.98787 1.28487 6.54015 1.83716 6.54015H35.8372C36.3894 6.54015 36.8372 6.98787 36.8372 7.54015C36.8372 8.09244 36.3894 8.54015 35.8372 8.54015H1.83716C1.28487 8.54015 0.837158 8.09244 0.837158 7.54015Z" fill="white"/>
                <path d="M38.9793 7.61126C38.1982 8.3923 36.9319 8.3923 36.1509 7.61124L31.2011 2.66147C30.8106 2.27094 30.8106 1.63778 31.2012 1.24726C31.5917 0.856734 32.2248 0.856738 32.6154 1.24726L38.9793 7.61126Z" fill="white"/>
                <path d="M36.1509 7.61124C36.9319 6.8302 38.1982 6.83021 38.9793 7.61126L32.6153 13.9752C32.2248 14.3657 31.5916 14.3657 31.2011 13.9752C30.8106 13.5847 30.8106 12.9515 31.2011 12.561L36.1509 7.61124Z" fill="white"/>
              </svg>
            </div>
          </Link>
          
    </div>
  )
}
