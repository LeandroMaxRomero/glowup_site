// import { useState } from 'react';
// import { PropTypes } from 'prop-types';

// const Carousel = ({ cards }) => {
//   const [startIndex, setStartIndex] = useState(0);

//   const handleNext = () => {
//     if (startIndex < cards.length - 4) {
//       setStartIndex(startIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - 1);
//     }
//   };

//   return (
//     <div className="carousel-container">
//       <div className="carousel">
//         {cards.slice(startIndex, startIndex + 4).map((card, index) => (
//           <div className="card" key={index}>
//             {card}
//           </div>
//         ))}
//       </div>
//       <button className="nav-button prev" onClick={handlePrev}>{'<'}</button>
//       <button className="nav-button next" onClick={handleNext}>{'>'}</button>
//     </div>
//   );
// };

// Carousel.propTypes = {
//     cards: PropTypes.node.isRequired,
//   };

// export default Carousel;
