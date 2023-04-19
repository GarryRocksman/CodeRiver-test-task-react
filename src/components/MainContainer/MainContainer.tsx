import './MainContainer.scss';
import React, { useEffect, useState } from 'react';

type MainContainerProps = {
  children: React.ReactNode;
};

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  const reveal = () => {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
      const windowheight = window.innerHeight;
      const revealtop = section.getBoundingClientRect().top;
      const revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        section.classList.add('section--active');
      } else {
        section.classList.remove('section--active');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', reveal);

    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);

  return <div className="main-container">{children}</div>;
};
