import { PropTypes } from 'prop-types';
import { useState, useEffect, useCallback } from 'react';

const SliderCards = ({ cardsData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % cardsData.length);
  }, [cardsData.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + cardsData.length) % cardsData.length);
  }, [cardsData.length]);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 500000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <div className="slider-container">
      {cardsData.map((card, index) => (
        <div
          className={`card ${index === currentSlide ? 'active' : ''}`}
          key={index}
        >
          <img src={card.image} alt="Card" className="card-image" />
          <div className="card-content">
            <div>
                <img src="./img/comillas.svg" alt="comillas decorativas" />
                <p>{card.description}</p>
            </div>
            <div className='card-titles-arrows'>
                <div>
                    <h2>{card.title}</h2>
                    <h3>{card.subtitle}</h3>
                </div>
                
                <div className='slider-btn'>
                    <button className="prev" onClick={prevSlide}>
                        <svg width="90" height="34" viewBox="0 0 90 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24.006" height="4.8012" transform="matrix(-0.70606 -0.708152 0.70606 -0.708152 16.9502 33.9999)" fill="black"/>
                            <rect width="24.006" height="4.8012" transform="matrix(-0.70606 0.708152 -0.70606 -0.708152 20.3396 3.3999)" fill="black"/> 
                            <rect x="31.4775" y="19.4291" width="25.7491" height="4.8083" transform="rotate(180 31.4775 19.4291)" fill="black"/>
                        </svg>
                    </button>

                    <button className="next" onClick={nextSlide}>
                        <svg width="90" height="34" viewBox="0 0 90 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24.006" height="4.8012" transform="matrix(0.70606 0.708152 -0.70606 0.708152 73.0503 0.000366211)" fill="black"/>
                            <rect width="24.006" height="4.8012" transform="matrix(0.70606 -0.708152 0.70606 0.708152 69.6606 30.6002)" fill="black"/>
                            <rect x="58.5225" y="14.5712" width="25.7491" height="4.8083" fill="black"/>
                        </svg>
                    </button>
                </div>

            </div>
          </div>

          

        </div>
      ))}
      
    </div>
  );
};

SliderCards.propTypes = {
    cardsData: PropTypes.node.isRequired,
  };
export default SliderCards;
