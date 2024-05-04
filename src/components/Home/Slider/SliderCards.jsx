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
          </div>
          
          <div className="card-content">
            <div className='card-text-comillas'>
                <p><span>{'“'}</span></p>
                <p className='card--description'>{card.description}</p>
            </div>
            <div className='card-titles-arrows'>
                <div>
                    <h2>{card.title}</h2>
                    <h3>{card.subtitle}</h3>
                </div>
                
                <div className='slider-btn'>
                    <button className="prev" onClick={prevSlide}>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="18.948" y="37.9285" width="26.2584" height="4" transform="rotate(-135 18.948 37.9285)" fill="white"/>
                      <rect x="21.7764" y="3.60449" width="26.2584" height="4" transform="rotate(135 21.7764 3.60449)" fill="white"/>
                    </svg>
                    </button>

                    <button className="next" onClick={nextSlide}>
                        
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="19.1484" y="0.776123" width="26.2584" height="4" transform="rotate(45 19.1484 0.776123)" fill="white"/>
                      <rect x="16.3198" y="35.1001" width="26.2584" height="4" transform="rotate(-45 16.3198 35.1001)" fill="white"/>
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
