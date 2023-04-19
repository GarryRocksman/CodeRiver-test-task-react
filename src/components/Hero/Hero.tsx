import './Hero.scss';
import React from 'react';
import { AppsIcons } from 'components/AppsIcons';
import { Line } from 'components/Line';

export const Hero: React.FC = () => {
  return (
    <div className="hero">
      <Line />
      <div className="hero__container">
        <div className="hero__promo">
          <AppsIcons />
          <div className="hero__title-container">
            <h2 className="hero__title">CHOOSE YOUR WINTER APPAREL</h2>
            <div className="hero__title-tip hero__title-tip--shake">LOOK</div>
          </div>
        </div>
        <div className="hero__image-container">
          <div className="hero__image-mask">
            <div className="hero__image" />
          </div>
        </div>
      </div>
    </div>
  );
};
