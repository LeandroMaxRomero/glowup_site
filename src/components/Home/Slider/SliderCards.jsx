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
          <div className="card-image">
            <img src={card.image} alt="Card" className='card-image-original'/>
            <img src={card.imagehover} alt="Card" className='card-image-hover'/>
          </div>
          
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
                        <svg width="91" height="35" viewBox="0 0 91 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="24.006" height="4.8012" transform="matrix(-0.70606 -0.708152 0.70606 -0.708152 16.998 34.499)" fill="white"/>
                          <rect width="24.006" height="4.8012" transform="matrix(-0.70606 0.708152 -0.70606 -0.708152 20.3877 3.89917)" fill="white"/>
                          <rect x="31.5259" y="19.9282" width="25.7491" height="4.8083" transform="rotate(180 31.5259 19.9282)" fill="white"/>
                        </svg>
                    </button>

                    <button className="next" onClick={nextSlide}>
                        
                        <svg width="91" height="35" viewBox="0 0 91 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="24.006" height="4.8012" transform="matrix(0.70606 0.708152 -0.70606 0.708152 73.0986 0.499756)" fill="white"/>
                          <rect width="24.006" height="4.8012" transform="matrix(0.70606 -0.708152 0.70606 0.708152 69.7085 31.0996)" fill="white"/>
                          <rect x="58.5703" y="15.0703" width="25.7491" height="4.8083" fill="white"/>
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
