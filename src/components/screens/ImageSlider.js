import React, { useState } from 'react';
import { SliderData } from './SliderData';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './ImageSlider.css'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      {SliderData.map((slide, index) => {
          return (
              <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
              >
              <ArrowBackIosIcon className='left-arrow' onClick={prevSlide} />
              <ArrowForwardIosIcon className='right-arrow' onClick={nextSlide} />
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;



