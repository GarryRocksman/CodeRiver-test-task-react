import './App.css';
import React from 'react';
import { Header } from 'components/Header';
import { Hero } from 'components/Hero';
import { ChooseLooks } from 'components/ChooseLooks';
import { MainContainer } from 'components/MainContainer';
import { AboutUs } from 'components/AboutUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainContainer>
        <div className="section">
          <ChooseLooks />
        </div>
        <div className="section">
          <AboutUs />
        </div>
      </MainContainer>
    </div>
  );
}

export default App;
