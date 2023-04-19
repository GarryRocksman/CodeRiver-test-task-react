import { Carousel } from 'components/Carousel';
import './ChooseLooks.scss';
import React, { useEffect, useState } from 'react';
import { CarouselPicture } from 'types/CarouselPicture';

const images: CarouselPicture[] = [];

function importAll(r: __WebpackModuleApi.RequireContext) {
  r.keys().forEach((key: string) => images.push({ src: r(key), alt: '' }));
}

importAll(
  require.context('assets/images/carousel', false, /\.(png|jpe?g|svg)$/)
);

export const ChooseLooks: React.FC = () => {
  const [step, setStep] = React.useState(1);
  const [frameSize, setFrameSize] = useState(4);
  const [itemWidth, setItemWidth] = useState(292);
  const [animationDuration, setAnimationDuration] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width > 1100) {
        setFrameSize(4);
      }

      if (width < 1100 && width > 768) {
        setFrameSize(3);
      }

      if (width < 768 && width > 562) {
        setFrameSize(2);
      }

      if (width < 562) {
        setFrameSize(1);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="choose-looks">
      <h2 className="choose-looks__title">Choose Looks</h2>
      <Carousel
        images={images}
        step={step}
        frameSize={frameSize}
        itemWidth={itemWidth}
        animationDuration={animationDuration}
        infinite
      />
    </div>
  );
};
