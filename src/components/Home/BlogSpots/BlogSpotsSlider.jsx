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
        slidesPerGroupSkip={1}
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
                                <img src="./img/blog.png" alt="Card" className="blog-img" />
                            </div>
                            <div className="blog-content">
                                <h2>{lang==='castellano'?"Guía Completa":"A Comprehensive Guide"}</h2>
                                {lang==='castellano'
                                ?
                                <p>10 Estrategias Comprobadas de Marketing Digital para Elevar el Crecimiento de tu Práctica de Salud en 2024</p>
                                :
                                <p>10 Proven Digital Marketing Strategies to Elevate Your Healthcare {`Practice's`} Growth in 2024</p>
                                }
                            </div>
                        </div>
                    </Link>

                    <Link to="/blog02">
                        <div className="container--blog">
                            <div className="container--blog__img">
                                <img src="./img/blog.png" alt="Card" className="blog-img" />
                            </div>
                            <div className="blog-content">
                                <h2>BLOG 2</h2>
                                {lang==='castellano'
                                ?
                                <p>Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                :
                                <p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
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
                                <img src="./img/blog.png" alt="Card" className="blog-img" />
                            </div>
                            <div className="blog-content">
                                <h2>BLOG 3</h2>
                                {lang==='castellano'
                                ?
                                <p>Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                :
                                <p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                }
                                </div>
                        </div>
                    </Link>

                    <Link to="/blog04">
                        <div className="container--blog">
                            <div className="container--blog__img">
                                <img src="./img/blog.png" alt="Card" className="blog-img" />
                            </div>
                            <div className="blog-content">
                                <h2>BLOG 4</h2>
                                {lang==='castellano'
                                ?
                                <p>Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                :
                                <p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
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
                                <img src="./img/blog.png" alt="Card" className="blog-img" />
                            </div>
                            <div className="blog-content">
                                <h2>BLOG 5</h2>
                                {lang==='castellano'
                                ?
                                <p>Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                :
                                <p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                }
                            </div>
                        </div>
                    </Link>

                    <Link to="/blog06">
                        <div className="container--blog">
                            <div className="container--blog__img">
                                <img src="./img/blog.png" alt="Card" className="blog-img" />
                            </div>
                            <div className="blog-content">
                                <h2>BLOG 6</h2>
                                {lang==='castellano'
                                ?
                                <p>Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                :
                                <p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
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
                                <img src="./img/blog.png" alt="Card" className="blog-img" />
                            </div>
                            <div className="blog-content">
                                <h2>BLOG 7</h2>
                                {lang==='castellano'
                                ?
                                <p>Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                :
                                <p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                }
                            </div>
                        </div>
                    </Link>

                    <Link to="/blog08">
                        <div className="container--blog">
                            <div className="container--blog__img">
                                <img src="./img/blog.png" alt="Card" className="blog-img" />
                            </div>
                            <div className="blog-content">
                                <h2>BLOG 8</h2>
                                {lang==='castellano'
                                ?
                                <p>Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                :
                                <p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
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
                                <img src="./img/blog.png" alt="Card" className="blog-img" />
                            </div>
                            <div className="blog-content">
                                <h2>BLOG 9</h2>
                                {lang==='castellano'
                                ?
                                <p>Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                :
                                <p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                }
                            </div>
                        </div>
                    </Link>

                    <Link to="/blog10">
                        <div className="container--blog">
                            <div className="container--blog__img">
                                <img src="./img/blog.png" alt="Card" className="blog-img" />
                            </div>
                            <div className="blog-content">
                                <h2>BLOG 10</h2>
                                {lang==='castellano'
                                ?
                                <p>Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                :
                                <p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                }
                            </div>
                        </div>
                    </Link>
                </div>
            </SwiperSlide>
            
        </Swiper>

        <Swiper pagination={true} modules={[Pagination]} className="mySwiperMobile">
        <SwiperSlide>
            <Link to="/blog01">
                <div className="container--blog">
                    <div className="container--blog__img">
                        <img src="./img/blog.png" alt="Card" className="blog-img" />
                    </div>
                    <div className="blog-content">
                        <h2>BLOG 1</h2>
                        {lang==='castellano'
                        ?
                        <p>Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        :
                        <p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        }
                    </div>
                </div>
            </Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link to="/blog02">
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Card" className="blog-img" />
                </div>
                <div className="blog-content">
                    <h2>BLOG 2</h2>
                    {lang==='castellano'
                    ?
                    <p>Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    :
                    <p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    }
                </div>
            </div>
        </Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link to="/blog03">
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Card" className="blog-img" />
                </div>
                <div className="blog-content">
                    <h2>BLOG 3</h2>
                    {lang==='castellano'
                    ?
                    <p>Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    :
                    <p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    }
                </div>
            </div>
        </Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link to="/blog04">
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Card" className="blog-img" />
                </div>
                <div className="blog-content">
                    <h2>BLOG 4</h2>
                    {lang==='castellano'
                    ?
                    <p>Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    :
                    <p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    }
                </div>
            </div>
        </Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link to="/blog05">
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Card" className="blog-img" />
                </div>
                <div className="blog-content">
                    <h2>BLOG 5</h2>
                    {lang==='castellano'
                    ?
                    <p>Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    :
                    <p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    }
                </div>
            </div>
        </Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link to="/blog06">
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Card" className="blog-img" />
                </div>
                <div className="blog-content">
                    <h2>BLOG 6</h2>
                    {lang==='castellano'
                    ?
                    <p>Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    :
                    <p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    }
                </div>
            </div>
        </Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link to="/blog07">
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Card" className="blog-img" />
                </div>
                <div className="blog-content">
                    <h2>BLOG 7</h2>
                    {lang==='castellano'
                    ?
                    <p>Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    :
                    <p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    }
                </div>
            </div>
        </Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link to="/blog08">
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Card" className="blog-img" />
                </div>
                <div className="blog-content">
                    <h2>BLOG 8</h2>
                    {lang==='castellano'
                    ?
                    <p>Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    :
                    <p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    }
                </div>
            </div>
        </Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link to="/blog09">
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Card" className="blog-img" />
                </div>
                <div className="blog-content">
                    <h2>BLOG 9</h2>
                    {lang==='castellano'
                    ?
                    <p>Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    :
                    <p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    }
                </div>
            </div>
        </Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link to="/blog10">
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Card" className="blog-img" />
                </div>
                <div className="blog-content">
                    <h2>BLOG 10</h2>
                    {lang==='castellano'
                    ?
                    <p>Español: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    :
                    <p>English: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
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
