import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LenguaContext } from "../../../Context/LangProvider";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import PropTypes from "prop-types";

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export const BlogSpotsSlider = ({ content }) => {

    const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  return (
    <div className="container__BlogSpotsSlider" id="blogs">

        <h2>{content}</h2>

        <Swiper
        
        slidesPerView={1}
        spaceBetween={36}
        centeredSlides={false}
        slidesPerGroupSkip={2}
        grabCursor={false}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          780: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={false}
        navigation={true}
        pagination={{
          clickable: false,
        }}
        modules={[Keyboard, Scrollbar, Navigation]}
        className="mySwiper"
        >
            <SwiperSlide>
                <div className="blogs--columns">
                    <Link to="/blog01">
                        <div className="container--blog">
                            <div className="container--blog__img">
                                <img src="./img/header-blog01.png" alt="Miniatura Blog 1" className="blog-img" />
                            </div>
                            <div className="blogspot-content">
                                <h2>#1 - {lang==='castellano'?"Eleva tu Práctica en 2024":"Elevate Your Practice in 2024"}</h2>
                                {lang==='castellano'
                                ?
                                <p>Estrategias Comprobadas de Marketing Digital para el Crecimiento Médico</p>
                                :
                                <p>Proven Digital Marketing Strategies for Medical Growth</p>
                                }
                            </div>
                        </div>
                    </Link>

                    <Link to="/blog02">
                        <div className="container--blog">
                            <div className="container--blog__img">
                                <img src="./img/header-blog02.png" alt="Miniatura Blog 2" className="blog-img" />
                            </div>
                            <div className="blogspot-content">
                                <h2>#2 - {lang==='castellano'? "Guía Definitiva para Adquirir Pacientes" : "Ultimate Guide to Patient Acquisition"}</h2>
                                {lang==='castellano'
                                ?
                                <p>5 Estrategias que Toda Práctica Debe Conocer</p>
                                :
                                <p>5 Strategies Every Practice Should Know</p>
                                }
                            </div>
                        </div>
                    </Link>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="blogs--columns">
                    <Link to="/blog03">
                        <div className="container--blog">
                            <div className="container--blog__img">
                                <img src="./img/header-blog03.png" alt="Miniatura Blog 3" className="blog-img" />
                            </div>
                            <div className="blogspot-content">
                                <h2>#3 - {lang==='castellano'? "Domina el Marketing Digital" : "Master Digital Marketing"}</h2>
                                {lang==='castellano'
                                ?
                                <p>8 Estrategias para Elevar tu Práctica Médica</p>
                                :
                                <p>8 Strategies to Elevate Your Medical Practice</p>
                                }
                                </div>
                        </div>
                    </Link>

                    <Link to="/blog04">
                        <div className="container--blog">
                            <div className="container--blog__img">
                                <img src="./img/header-blog04.png" alt="Card" className="blog-img" />
                            </div>
                            <div className="blogspot-content">
                            <h2>#4 - {lang==='castellano' ? "Estrategias de Email Marketing" : "Email Marketing Strategies" }</h2>
                            {lang==='castellano'
                            ?
                            <p>5 Formas de generar Leads y Retener Pacientes</p>
                            :
                            <p>5 Ways to Nurture Leads and Retain Patients</p>
                            }
                            </div>
                        </div>
                    </Link>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="blogs--columns">
                    <Link to="/blog05">
                        <div className="container--blog">
                            <div className="container--blog__img">
                                <img src="./img/header-blog05.png" alt="Manos estrechándose en acuerdo mutuo" className="blog-img" />
                            </div>
                            <div className="blogspot-content">
                                <h2>#5 - {lang==='castellano' ? "El Arte de la Participación del Paciente" : "Art of Patient Engagement"}</h2>
                                {lang==='castellano'
                                ?
                                <p>10 Técnicas para Construir Conexiones Significativas</p>
                                :
                                <p>10 Techniques for Building Meaningful Connections</p>
                                }
                            </div>
                        </div>
                    </Link>

                    <Link to="/blog06">
                        <div className="container--blog">
                            <div className="container--blog__img">
                                <img src="./img/header-blog06.png" alt="Miniatura blog 6" className="blog-img" />
                            </div>
                            <div className="blogspot-content">
                                <h2>#6 - {lang==='castellano' ? "Genera Leads de Calidad" : "Generate Quality Leads"}</h2>
                                {lang==='castellano'
                                ?
                                <p>6 Estrategias Efectivas de Generación de Leads para tu Práctica</p>
                                :
                                <p>6 Effective Lead Generation Strategies for Your Practice</p>
                                }
                            </div>
                        </div>
                    </Link>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="blogs--columns">
                    <Link to="/blog07">
                        <div className="container--blog">
                            <div className="container--blog__img">
                                <img src="./img/header-blog07.png" alt="Card" className="blog-img" />
                            </div>
                            <div className="blogspot-content">
                                <h2>#7 - {lang==='castellano'?"Crea Landing pages Altamente Convertidoras":"Create High-Converting Landing Pages"}</h2>
                                {lang==='castellano'
                                ?
                                <p>Diseña landing pages que atraigan y conviertan pacientes potenciales</p>
                                :
                                <p>How to design landing pages that attract and convert potential patients</p>
                                }
                            </div>
                        </div>
                    </Link>

                    <Link to="/blog08">
                        <div className="container--blog">
                            <div className="container--blog__img">
                                <img src="./img/header-blog08.png" alt="Minatura blog 8" className="blog-img" />
                            </div>
                            <div className="blogspot-content">
                                <h2>#8 - {lang==='castellano'?"Campañas Publicitarias Exitosas: Una Guía para...":"Successful Ad Campaigns: A Guide for..."}</h2>
                                {lang==='castellano'
                                ?
                                <p>Consejos Paso a Paso para Crear y Gestionar Publicidad Efectiva</p>
                                :
                                <p>Step-by-Step Tips for Creating and Managing Effective Advertising</p>
                                }
                            </div>
                        </div>
                    </Link>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="blogs--columns">
                    <Link to="/blog09">
                        <div className="container--blog">
                            <div className="container--blog__img">
                                <img src="./img/header-blog09.png" alt="Miniatura blog 9" className="blog-img" />
                            </div>
                            <div className="blogspot-content">
                                <h2>#9 - {lang==='castellano'?"Ranking y Visibilidad: 10 tips de SEO":"Ranking & Visibility: 10 SEO Tips"}</h2>
                                {lang==='castellano'
                                ?
                                <p>Aprende a optimizar tu sitio web para los motores de búsqueda y mejorar...</p>
                                :
                                <p>Learn how to optimize your website for search engines and improve...</p>
                                }
                            </div>
                        </div>
                    </Link>

                    <Link to="/blog10">
                        <div className="container--blog">
                            <div className="container--blog__img">
                                <img src="./img/header-blog10.png" alt="Miniatura blog 10" className="blog-img" />
                            </div>
                            <div className="blogspot-content">
                                <h2>#10 - {lang==='castellano' ? "MKT: Mide el Éxito de tus Esfuerzos" : "Measure the Success of Your MKT Efforts"}</h2>
                                {lang==='castellano'
                                ?
                                <p>6 Métricas Claves para Evaluar la Efectividad de las Estrategias...</p>
                                :
                                <p>6 Key Metrics to Track for Evaluating the Effectiveness of Your Medical...</p>
                                }
                            </div>
                        </div>
                    </Link>
                </div>
            </SwiperSlide>
            
        </Swiper>

        {/* Versión Mobile */}


        <Swiper pagination={true} modules={[Pagination]} className="mySwiperMobile">
        <SwiperSlide>
            <Link to="/blog01">
                <div className="container--blog">
                    <div className="container--blog__img">
                        <img src="./img/header-blog01.png" alt="Card" className="blog-img" />
                    </div>
                    <div className="blogspot-content">
                        <h2>#1 - {lang==='castellano'?"Eleva tu Práctica en 2024":"Elevate Your Practice in 2024"}</h2>
                        {lang==='castellano'
                        ?
                        <p>Estrategias Comprobadas de Marketing Digital para el Crecimiento Médico</p>
                        :
                        <p>Proven Digital Marketing Strategies for Medical Growth</p>
                        }
                    </div>
                </div>
            </Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link to="/blog02">
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/header-blog02.png" alt="Card" className="blog-img" />
                </div>
                <div className="blogspot-content">
                    <h2>#2 - {lang==='castellano'? "Guía Definitiva para Adquirir Pacientes" : "Ultimate Guide to Patient Acquisition"}</h2>
                    {lang==='castellano'
                    ?
                    <p>5 Estrategias que Toda Práctica Debe Conocer</p>
                    :
                    <p>5 Strategies Every Practice Should Know</p>
                    }
                </div>
            </div>
        </Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link to="/blog03">
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/header-blog03.png" alt="Miniatura Blog 3" className="blog-img" />
                </div>
                <div className="blogspot-content">
                    <h2>#3 - {lang==='castellano'? "Domina el Marketing Digital" : "Master Digital Marketing"}</h2>
                    {lang==='castellano'
                    ?
                    <p>8 Estrategias para Elevar tu Práctica Médica</p>
                    :
                    <p>8 Strategies to Elevate Your Medical Practice</p>
                    }
                </div>
            </div>
        </Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link to="/blog04">
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/header-blog04.png" alt="Miniatura Blog 4" className="blog-img" />
                </div>
                <div className="blogspot-content">
                    <h2>#4 - {lang==='castellano' ? "Estrategias de Email Marketing" : "Email Marketing Strategies" }</h2>
                    {lang==='castellano'
                    ?
                    <p>5 Formas de generar Leads y Retener Pacientes</p>
                    :
                    <p>5 Ways to Nurture Leads and Retain Patients</p>
                    }
                </div>
            </div>
        </Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link to="/blog05">
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/header-blog05.png" alt="manos estrechándose en acuerdo mutuo" className="blog-img" />
                </div>
                <div className="blogspot-content">
                    <h2>#5 - {lang==='castellano' ? "El Arte de la Participación del Paciente" : "Art of Patient Engagement"}</h2>
                    {lang==='castellano'
                    ?
                    <p>10 Técnicas para Construir Conexiones Significativas</p>
                    :
                    <p>10 Techniques for Building Meaningful Connections</p>
                    }
                </div>
            </div>
        </Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link to="/blog06">
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/header-blog06.png" alt="Miniatura blog 6" className="blog-img" />
                </div>
                <div className="blogspot-content">
                    <h2>#6 - {lang==='castellano' ? "Genera Leads de Calidad" : "Generate Quality Leads"}</h2>
                    {lang==='castellano'
                    ?
                    <p>6 Estrategias Efectivas de Generación de Leads para tu Práctica</p>
                    :
                    <p>6 Effective Lead Generation Strategies for Your Practice</p>
                    }
                </div>
            </div>
        </Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link to="/blog07">
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/header-blog07.png" alt="Miniatura blog 7" className="blog-img" />
                </div>
                <div className="blogspot-content">
                    <h2>#7 - {lang==='castellano'?"Crea Landing pages Altamente Convertidoras":"Create High-Converting Landing Pages"}</h2>
                    {lang==='castellano'
                    ?
                    <p>Diseña landing pages que atraigan y conviertan pacientes potenciales</p>
                    :
                    <p>How to design landing pages that attract and convert potential patients</p>
                    }
                </div>
            </div>
        </Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link to="/blog08">
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Miniatura blog 8" className="blog-img" />
                </div>
                <div className="blogspot-content">
                    <h2>#8 - {lang==='castellano'?"Campañas Publicitarias Exitosas: Una Guía para...":"Successful Ad Campaigns: A Guide for..."}</h2>
                    {lang==='castellano'
                    ?
                    <p>Consejos Paso a Paso para Crear y Gestionar Publicidad Efectiva</p>
                    :
                    <p>Step-by-Step Tips for Creating and Managing Effective Advertising</p>
                    }
                </div>
            </div>
        </Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link to="/blog09">
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/header-blog09.png" alt="Miniatura blog 9" className="blog-img" />
                </div>
                <div className="blogspot-content">
                    <h2>#9 - {lang==='castellano'?"Ranking y Visibilidad: 10 tips de SEO":"Ranking & Visibility: 10 SEO Tips"}</h2>
                    {lang==='castellano'
                    ?
                    <p>Aprende a optimizar tu sitio web para los motores de búsqueda y mejorar su ranking y visibilidad.</p>
                    :
                    <p>Learn how to optimize your website for search engines and improve its ranking and visibility.</p>
                    }
                </div>
            </div>
        </Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link to="/blog10">
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/header-blog10.png" alt="Miniatura blog 10" className="blog-img" />
                </div>
                <div className="blogspot-content">
                    <h2>#10 - {lang==='castellano' ? "MKT: Mide el Éxito de tus Esfuerzos" : "Measure the Success of Your MKT Efforts"}</h2>
                    {lang==='castellano'
                    ?
                    <p>6 Métricas Clave para Evaluar la Efectividad de las Estrategias de Marketing de tu Práctica Médica</p>
                    :
                    <p>6 Key Metrics to Track for Evaluating the Effectiveness of Your Medical {`Practice's`} Marketing Strategies</p>
                    }
                </div>
            </div>
        </Link>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
};

BlogSpotsSlider.propTypes = {
    content: PropTypes.node.isRequired,
  };
