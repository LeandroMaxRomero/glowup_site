import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";


export const BlogSpotsSlider = () => {
  return (
    <div className="container__BlogSpotsSlider" id="blogs">

        <h2>Stay Informed</h2>

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
                    <div className="container--blog">
                        <div className="container--blog__img">
                            <img src="./img/blog.png" alt="Card" className="blog-img" />
                        </div>
                        <div className="blog-content">
                            <h2>BLOG 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>

                    <div className="container--blog">
                        <div className="container--blog__img">
                            <img src="./img/blog.png" alt="Card" className="blog-img" />
                        </div>
                        <div className="blog-content">
                            <h2>BLOG 2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="blogs--columns">
                    <div className="container--blog">
                        <div className="container--blog__img">
                            <img src="./img/blog.png" alt="Card" className="blog-img" />
                        </div>
                        <div className="blog-content">
                            <h2>BLOG 3</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>

                    <div className="container--blog">
                        <div className="container--blog__img">
                            <img src="./img/blog.png" alt="Card" className="blog-img" />
                        </div>
                        <div className="blog-content">
                            <h2>BLOG 4</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="blogs--columns">
                    <div className="container--blog">
                        <div className="container--blog__img">
                            <img src="./img/blog.png" alt="Card" className="blog-img" />
                        </div>
                        <div className="blog-content">
                            <h2>BLOG 5</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>

                    <div className="container--blog">
                        <div className="container--blog__img">
                            <img src="./img/blog.png" alt="Card" className="blog-img" />
                        </div>
                        <div className="blog-content">
                            <h2>BLOG 6</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="blogs--columns">
                    <div className="container--blog">
                        <div className="container--blog__img">
                            <img src="./img/blog.png" alt="Card" className="blog-img" />
                        </div>
                        <div className="blog-content">
                            <h2>BLOG 7</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>

                    <div className="container--blog">
                        <div className="container--blog__img">
                            <img src="./img/blog.png" alt="Card" className="blog-img" />
                        </div>
                        <div className="blog-content">
                            <h2>BLOG 8</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="blogs--columns">
                    <div className="container--blog">
                        <div className="container--blog__img">
                            <img src="./img/blog.png" alt="Card" className="blog-img" />
                        </div>
                        <div className="blog-content">
                            <h2>BLOG 9</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>

                    <div className="container--blog">
                        <div className="container--blog__img">
                            <img src="./img/blog.png" alt="Card" className="blog-img" />
                        </div>
                        <div className="blog-content">
                            <h2>BLOG 10</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            
        </Swiper>

        <Swiper pagination={true} modules={[Pagination]} className="mySwiperMobile">
        <SwiperSlide>
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Card" className="blog-img" />
                </div>
                <div className="blog-content">
                    <h2>BLOG 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Card" className="blog-img" />
                </div>
                <div className="blog-content">
                    <h2>BLOG 2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Card" className="blog-img" />
                </div>
                <div className="blog-content">
                    <h2>BLOG 3</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Card" className="blog-img" />
                </div>
                <div className="blog-content">
                    <h2>BLOG 4</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Card" className="blog-img" />
                </div>
                <div className="blog-content">
                    <h2>BLOG 5</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Card" className="blog-img" />
                </div>
                <div className="blog-content">
                    <h2>BLOG 6</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Card" className="blog-img" />
                </div>
                <div className="blog-content">
                    <h2>BLOG 7</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Card" className="blog-img" />
                </div>
                <div className="blog-content">
                    <h2>BLOG 8</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Card" className="blog-img" />
                </div>
                <div className="blog-content">
                    <h2>BLOG 9</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className="container--blog">
                <div className="container--blog__img">
                    <img src="./img/blog.png" alt="Card" className="blog-img" />
                </div>
                <div className="blog-content">
                    <h2>BLOG 10</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}
