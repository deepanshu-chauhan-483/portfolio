import React from 'react';
import { Link } from 'react-scroll';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About1 from './components/About1';
import Services1 from './components/Services1';
import Work1 from './components/Work1';
import Contact1 from './components/Contact1';
import Banner1 from './components/Banner1';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Nav />
      
      <div id="home" className="section">
        <Banner1 />
      </div>
      <div id="about" className="section">
        <About1 />
      </div>
      <div id="services" className="section my-[100px]">
        <Services1 />
      </div>
      <div id="work" className="section my-[100px]">
        <Work1 />
      </div>
      <div id="contact" className="section mt-[100px] mb-[50px]">
        <Contact1 />
      </div>
      
      
    </div>
  );
};

export default App;
