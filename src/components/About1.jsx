import React from 'react';
import { Link } from 'react-scroll';
import Image from '../assets/img1.png';

const About1 = () => {
  return (
    <div className='container mx-auto' id='about'>
      {/* Main Flex Container */}
      <div className="flex flex-col md:flex-row items-center justify-between my-10">
        {/* Left Image Section */}
        <div className="hidden md:block md:w-1/2 mb-8 md:mb-0">
          <img
            src={Image}
            alt="Developer Profile"
            className="w-auto max-w-md mx-auto"
          />
        </div>
        {/* Right Content Section */}
        <div className="md:w-1/2 space-y-6 px-4 md:px-8"> {/* Adjusted padding inside container */}
          <h2 className="h1 text-5xl font-bold text-pink-500 font-tertiary">ABOUT ME</h2>
          <h1 className="h2 text-3xl font-bold font-secondary">
            I'm an Engineering Student and  <br />
            Front-end Developer currently <br />
             in my final year.
          </h1>
          <p className="text-gray-300">
            I am <strong>SDG Hackathon 2024 (IIIT Delhi) finalist</strong> <br />Featured top 10 in Technothon 2.0 among 350+ teams from Delhi NCR.<br />
            I am also <strong>District Topper </strong>in Hindustan Olympiad 2019.  
          </p>
          <div className="flex justify-between text-center">
            <div>
              <p className="text-4xl font-bold text-gradient mb-2">2</p>
              <p className="text-sm h3">Times<br />College Mentor</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gradient mb-2">4+</p>
              <p className="text-sm h3">Projects<br />Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gradient mb-2">3+</p>
              <p className="text-sm h3">Years of<br />Web Development</p>
            </div>
          </div>
          <div className="flex space-x-4">
          <Link to='contact' smooth={true} spy={true} >
          <button className="btn btn-sm">Contact me</button>
          </Link>
           
            <button className="px-6 py-2 text-white font-medium">My Portfolio</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1;
