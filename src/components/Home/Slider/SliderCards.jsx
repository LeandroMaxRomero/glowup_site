import { PropTypes } from 'prop-types';
// import { useState, useEffect, useCallback } from 'react';


// const SliderCards = ({ cardsData }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Función para avanzar al siguiente slide
//   const nextSlide = useCallback(() => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % cardsData.length);
//   }, [cardsData.length]);

//   // Función para retroceder al slide anterior
//   const prevSlide = useCallback(() => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + cardsData.length) % cardsData.length);
//   }, [cardsData.length]);

//   // Efecto para desplazamiento automático
//   useEffect(() => {
//     const intervalId = setInterval(nextSlide, 3000); // Cambiar cada 3 segundos
//     return () => clearInterval(intervalId); // Limpiar intervalo al desmontar el componente
//   }, [nextSlide]);

//   return (
//     <div className="slider-container">
//       {cardsData.map((card, index) => (
//         <div
//           className={`card ${index === currentSlide ? 'active' : ''}`}
//           key={index}
//         >
//           <img src={card.image} alt="Card" className="card-image" />
//           <div className="card-content">
//             <h2>{card.title}</h2>
//             <p>{card.description}</p>
//           </div>
//         </div>
//       ))}
//       <button className="prev" onClick={prevSlide}>&#10094;</button>
//       <button className="next" onClick={nextSlide}>&#10095;</button>
//     </div>
//   );
// };

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
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <div className="slider-container">
      {cardsData.map((card, index) => (
        <div
          className={`card ${index === currentSlide ? 'active' : ''}`}
          key={index}
        //   style={{ transform: `translateX(${index * -100}%)` }}
        >
          <img src={card.image} alt="Card" className="card-image" />
          <div className="card-content">
            
            <p>{card.description}</p>
            <h2>{card.title}</h2>
          </div>
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

SliderCards.propTypes = {
    cardsData: PropTypes.node.isRequired,
  };
export default SliderCards;
