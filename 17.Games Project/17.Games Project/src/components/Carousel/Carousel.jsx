import "./Carousel.css"
import React, { useState } from 'react';

const Carousel = (props) =>{
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = props.slides.length;

  const moveToSlide = (index) => {
    setActiveIndex(index);
  }

  const moveNext = () => {
    const nextIndex = activeIndex === slideCount - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const movePrevious = () => {
    const prevIndex = activeIndex === 0 ? slideCount - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  }

  const slideItems = props.slides.map((slide, index) => {
    const slideStyles = {
      transform: `translateX(${(index - activeIndex) * 100}%)`
    };

    return (
      <div className="slide" style={slideStyles} key={index}>
        {slide}
      </div>
    );
  });

  return (
    <div className="carousel">
      {slideItems}
      <button className="btn-prev" onClick={movePrevious}>Previous</button>
      <button className="btn-next" onClick={moveNext}>Next</button>
    </div>
  );
}
export default Carousel;