import React from 'react';
import './Header.scss';
import { Navigation } from 'components/Navigation';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">LANDING</h1>
        <Navigation />
      </div>
    </header>
  );
};
