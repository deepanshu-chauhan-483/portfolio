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
      
      <section id="home" className="section">
        <Banner1 />
      </section>
      <section id="about" className="section">
        <About1 />
      </section>
      <section id="services" className="section m-[200px]">
        <Services1 />
      </section>
      <section id="work" className="section m-[200px]">
        <Work1 />
      </section>
      <section id="contact" className="section mt-[200px]">
        <Contact1 />
      </section>
      
      
    </div>
  );
};

export default App;
