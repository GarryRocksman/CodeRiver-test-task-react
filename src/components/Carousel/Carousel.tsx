import { CarouselPicture } from 'types/CarouselPicture';
import './Carousel.scss';
import React, { useEffect, useState } from 'react';

type Props = {
  images: CarouselPicture[];
  step: number;
  frameSize: number;
  itemWidth: number;
  animationDuration: number;
  infinite: boolean;
};
export const Carousel: React.FC<Props> = ({
  images,
  step,
  frameSize,
  itemWidth,
  animationDuration,
  infinite,
}) => {
  const [move, setMove] = useState(0);
  const [itemLength, setItemWidth] = useState(itemWidth);
  const carouselWidth = images.length * itemLength;

  useEffect(() => {
    if (itemWidth !== itemLength) {
      if (move !== 0) {
        setMove(prevState => prevState - frameSize);
      }

      setItemWidth(itemWidth);
    }
  });
  const handlerNext = () => {
    if (move < -carouselWidth + step * itemLength) {
      if (infinite) {
        setMove(0);
      }
    } else {
      setMove(prevPosition => prevPosition - step * itemLength);
    }
  };

  const handlerPrev = () => {
    if (move < 0) {
      setMove(prevPosition => prevPosition + step * itemLength);
    }
  };

  return (
    <div className="carousel__container">
      <div
        className="carousel"
        style={{
          width: `${frameSize * itemLength}px`,
        }}
      >
        <ul
          className="carousel__list"
          style={{
            transform: `translateX(${move}px)`,
            transitionDuration: `${animationDuration}ms`,
          }}
        >
          {images.map((image, index) => (
            <li key={Math.random()} style={{ width: `${itemLength}px` }}>
              <figure style={{ width: `${itemLength}px` }}>
                <img
                  className="carousel__picture"
                  src={image.src}
                  alt={(index + 1).toString()}
                  style={{ width: `${itemLength}px` }}
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
      <button
        aria-label="prev"
        className="carousel__button carousel__button--prev"
        type="button"
        onClick={() => {
          handlerPrev();
        }}
      />
      <button
        aria-label="next"
        className="carousel__button carousel__button--next"
        data-cy="next"
        type="button"
        onClick={() => {
          handlerNext();
        }}
      />
    </div>
  );
};
