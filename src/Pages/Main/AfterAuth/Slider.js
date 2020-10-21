import React, { useRef, useState } from 'react';
import './Slider.scss';

const SliderControl = ({ type, title, handleClick }) => (
  <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  </button>
);

function Slide({ handleSlideClick, current, info }) {
  const slide = useRef();
  const {
    src, button, headline, index,
  } = info;
  let classNames = 'slide';

  if (current === index) classNames += ' slide--current';
  else if (current - 1 === index) classNames += ' slide--previous';
  else if (current + 1 === index) classNames += ' slide--next';

  const handleMouseMove = (event) => {
    const el = slide.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
  };

  const handleMouseLeave = (event) => {
    slide.current.style.setProperty('--x', 0);
    slide.current.style.setProperty('--y', 0);
  };

  const clickOnSlide = (event) => {
    handleSlideClick(slide.index);
  };

  const imageLoaded = (event) => {
    event.target.style.opacity = 1;
  };

  return (
    <li
      ref={slide}
      className={classNames}
      onClick={clickOnSlide}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <img
          className="slide__image"
          alt={headline}
          src={src}
          onLoad={imageLoaded}
        />
      </div>

      <article className="slide__content">
        <h2 className="slide__headline">{headline}</h2>
        <button type="button" className="slide__action btn">{button}</button>
      </article>
    </li>
  );
}

function Slider({ slides, heading }) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev <= 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      handleNextClick();
    }
    if (e.keyCode === 37) {
      handlePreviousClick();
    }
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keyup', handleKeyDown);

    return () => {
      window.removeEventListener('keyup', handleKeyDown);
    };
  });

  const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`;
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  };
  return (
    <>
      <section className="section-slider">
        <div className="slider" aria-labelledby={headingId}>
          <ul className="slider__wrapper" style={wrapperTransform}>
            <h3 id={headingId} className="visuallyhidden">{heading}</h3>

            {slides.map((slide) => (
              <Slide
                key={slide.index}
                info={slide}
                current={current}
                handleSlideClick={() => handleSlideClick(slide.index)}
              />
            ))}
          </ul>

          <div className="slider__controls">
            <SliderControl
              type="previous"
              title="Go to previous slide"
              handleClick={handlePreviousClick}
            />

            <SliderControl
              type="next"
              title="Go to next slide"
              handleClick={handleNextClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Slider;
