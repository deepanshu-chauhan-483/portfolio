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
<<<<<<< HEAD
      </div>
      <div id="services" className="section my-[100px]">
        <Services1 />
      </div>
      <div id="work" className="section my-[100px]">
        <Work1 />
      </div>
      <div id="contact" className="section mt-[100px] mb-[50px]">
=======
      </section>
      <section id="services" className="section m-[200px]">
        <Services1 />
      </section>
      <section id="work" className="section m-[200px]">
        <Work1 />
      </section>
      <section id="contact" className="section mt-[200px]">
>>>>>>> 5177bf686c959c32b6d2a0e6bb99a5cb8247da25
        <Contact1 />
      </section>
      
      
    </div>
  );
};

export default App;
