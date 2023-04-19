import './AppsIcons.scss';
import React from 'react';

export const AppsIcons: React.FC = () => (
  <div className="apps">
    <div className="apps__container">
      <div className="apps__image">
        <div className="apps__image--apple" />
      </div>
      <div className="apps__image apps__image--left">
        <div className="apps__image--android" />
      </div>
    </div>
    <p className="apps__text">App available</p>
  </div>
);
