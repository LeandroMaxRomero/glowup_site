import { PropTypes } from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export const SliderAboutUs =({cardsBoxes})=> {

  return (
    <>
      <Swiper pagination={{
          dynamicBullets: true,
        }} modules={[Pagination]} className="mySwiper--AboutUs">


        <SwiperSlide>
          <div className="box box1">
              <img src="./img/fondo-card.svg" alt="" className="img-card"/>
              <div className="box--text">
                  <h3>{cardsBoxes[0].title}</h3>
                  <p>{cardsBoxes[0].desc}</p>
              </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="box box1">
              <img src="./img/fondo-card.svg" alt="" className="img-card"/>
              <div className="box--text">
                  <h3>{cardsBoxes[1].title}</h3>
                  <p>{cardsBoxes[1].desc}</p>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box box1">
              <img src="./img/fondo-card.svg" alt="" className="img-card"/>
              <div className="box--text">
                  <h3>{cardsBoxes[2].title}</h3>
                  <p>{cardsBoxes[2].desc}</p>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box box1">
              <img src="./img/fondo-card.svg" alt="" className="img-card"/>
              <div className="box--text">
                  <h3>{cardsBoxes[3].title}</h3>
                  <p>{cardsBoxes[3].desc}</p>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box box1">
              <img src="./img/fondo-card.svg" alt="" className="img-card"/>
              <div className="box--text">
                  <h3>{cardsBoxes[4].title}</h3>
                  <p>{cardsBoxes[4].desc}</p>
              </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}

SliderAboutUs.propTypes = {
    cardsBoxes: PropTypes.node.isRequired,
}
