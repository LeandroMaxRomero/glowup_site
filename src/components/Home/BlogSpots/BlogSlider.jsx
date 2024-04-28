// import { useState, useEffect, useCallback } from 'react';
// import { PropTypes } from 'prop-types';

// const BlogSlider = ({ blogsData }) => {
//   const [currentSlideBlog, setCurrentSlideBlog] = useState(0);

//   const nextSlide = useCallback(() => {
//     setCurrentSlideBlog((prevSlide) => (prevSlide + 1) % blogsData.length);
//   }, [blogsData.length]);

//   const prevSlide = useCallback(() => {
//     setCurrentSlideBlog((prevSlide) => (prevSlide - 1 + blogsData.length) % blogsData.length);
//   }, [blogsData.length]);

//   useEffect(() => {
//     const intervalId = setInterval(nextSlide, 50000);
//     return () => clearInterval(intervalId);
//   }, [nextSlide]);

//   return (
//     <div className="blog-container">
//       {blogsData.map((blog, index) => (
//         <div
//           className={`blog ${index === currentSlideBlog ? 'active' : ''}`}
//           key={index}
//         >
//             <div>
//                 <img src={blog.img} alt="Card" className="blog-img" />
//                 <div className="blog-content">
//                     <h2>{blog.title}</h2>
//                     <p>{blog.text}</p>
//                 </div>
//             </div>

//         </div>
//       ))}
//       <button className="prev" onClick={prevSlide}>&#10094;</button>
//       <button className="next" onClick={nextSlide}>&#10095;</button>
//     </div>
//   );
// };

// BlogSlider.propTypes = {
//     blogsData: PropTypes.node.isRequired,
//   };

// export default BlogSlider;
