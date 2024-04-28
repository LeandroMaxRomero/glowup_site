import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Keyboard, Scrollbar, Navigation } from "swiper/modules";


export const BlogSpotsSlider = () => {
  return (
    <div className="container__BlogSpotsSlider">

        <h2>Stay Informed</h2>

        <Swiper
        slidesPerView={2}
        spaceBetween={36}
        centeredSlides={false}
        slidesPerGroupSkip={2}
        grabCursor={false}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          650: {
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
                    <div className="container--blog">
                        <img src="./img/gris.png" alt="Card" className="blog-img" />
                        <div className="blog-content">
                            <h2>BLOG UNO</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>

                    <div className="container--blog">
                        <img src="./img/gris.png" alt="Card" className="blog-img" />
                        <div className="blog-content">
                            <h2>BLOG DOS</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="blogs--columns">
                    <div className="container--blog">
                        <img src="./img/gris.png" alt="Card" className="blog-img" />
                        <div className="blog-content">
                            <h2>BLOG TRES</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>
                    <div className="container--blog">
                        <img src="./img/gris.png" alt="Card" className="blog-img" />
                        <div className="blog-content">
                            <h2>BLOG CUATRO</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="blogs--columns">
                    <div className="container--blog">
                        <img src="./img/gris.png" alt="Card" className="blog-img" />
                        <div className="blog-content">
                            <h2>BLOG CINCO</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>
                    <div className="container--blog">
                        <img src="./img/gris.png" alt="Card" className="blog-img" />
                        <div className="blog-content">
                            <h2>BLOG SEIS</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="blogs--columns">
                    <div className="container--blog">
                        <img src="./img/gris.png" alt="Card" className="blog-img" />
                        <div className="blog-content">
                            <h2>BLOG SIETE</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>
                    <div className="container--blog">
                        <img src="./img/gris.png" alt="Card" className="blog-img" />
                        <div className="blog-content">
                            <h2>BLOG OCHO</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="blogs--columns">
                    <div className="container--blog">
                        <img src="./img/gris.png" alt="Card" className="blog-img" />
                        <div className="blog-content">
                            <h2>BLOG NUEVE</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>
                    <div className="container--blog">
                        <img src="./img/gris.png" alt="Card" className="blog-img" />
                        <div className="blog-content">
                            <h2>BLOG DIEZ</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    </div>
  )
}
