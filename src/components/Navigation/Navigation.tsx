import { Hamburger } from 'components/Hamburger';
import './Navigation.scss';
import React from 'react';
import { CallToAction } from 'components/CallToAction';
import cn from 'classnames';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const togleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation">
      <ul
        className={cn('navigation__list', {
          'navigation__list--burger': isOpen,
        })}
      >
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Clothes
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Sneakers
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Bags
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Accessorize
          </a>
        </li>
        <li className="navigation__item">
          <CallToAction />
        </li>
      </ul>
      <Hamburger togleMenu={togleMenu} isOpen={isOpen} />
    </nav>
  );
};
