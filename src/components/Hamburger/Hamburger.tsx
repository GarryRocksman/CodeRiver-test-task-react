import './Hamburger.scss';
import React from 'react';
import cn from 'classnames';

type HamburgerProps = {
  isOpen: boolean;
  togleMenu: () => void;
};

export const Hamburger: React.FC<HamburgerProps> = ({ togleMenu, isOpen }) => {
  return (
    <>
      <button
        type="button"
        className={cn('hamburger', { 'hamburger--active': isOpen })}
        onMouseDown={togleMenu}
      >
        <div className="hamburger__line hamburger__line--1" />
        <div className="hamburger__line hamburger__line--2" />
        <div className="hamburger__line hamburger__line--3" />
      </button>
    </>
  );
};
