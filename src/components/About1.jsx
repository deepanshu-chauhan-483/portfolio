import React from 'react';
import { Link } from 'react-scroll';
import Image from '../assets/img1.png';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import CountUp from 'react-countup';

const About1 = () => {
  return (
    <div className='container mx-auto'>
     
      <div className="flex flex-col flex-grow-0 md:flex-row items-center justify-between">
        {/* Left Image Section */}
        <motion.div className="hidden md:block md:w-1/2 mb-8 md:mb-0"
         variants={fadeIn('right', 0.2)}
         initial="hidden"
         whileInView="show">
          <img
            src={Image}
            alt="Developer Profile"
            className="w-[400px] h-[600px] rounded-xl"
          />
        </motion.div>
        {/* Right Content Section */}
        <div className="md:w-1/2 space-y-6 px-4 md:px-8"> 
          <motion.h2 className="h1 text-5xl font-bold text-pink-500 font-tertiary"
           variants={fadeIn('up', 0.2)}
           initial="hidden"
           whileInView="show">ABOUT ME</motion.h2>
          <motion.h1 className="h2 text-3xl font-bold font-secondary"
           variants={fadeIn('up', 0.3)}
           initial="hidden"
           whileInView="show">
            I'm an Engineering Student and  <br />
            Front-end Developer currently <br />
             in my final year.
          </motion.h1>
          <motion.p className="text-gray-300"
           variants={fadeIn('up', 0.4)}
           initial="hidden"
           whileInView="show">
            I am <strong>SDG Hackathon 2024 (IIIT Delhi) finalist</strong> <br />Featured top 10 in Technothon 2.0 among 350+ teams from Delhi NCR.<br />
            I am also <strong>District Topper </strong>in Hindustan Olympiad 2019.  
          </motion.p>
          <motion.div className="flex justify-between text-center"
           variants={fadeIn('up', 0.5)}
           initial="hidden"
           whileInView="show">
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">
              <CountUp start={0} end={2} duration={2}/>
              </div>
              <p className="text-sm h3">Times<br />College Mentor</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2"><CountUp start={0} end={10} duration={5}/><span>+</span></div>
              <p className="text-sm h3">Projects<br />Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2"><CountUp start={0} end={2} duration={2}/><span>+</span></div>
              <p className="text-sm h3">Years of<br />Web Development</p>
            </div>
          </motion.div>
          <motion.div className="flex space-x-4"
           variants={fadeIn('up', 0.2)}
           initial="hidden"
           whileInView="show">
          <Link to='contact' smooth={true} spy={true} >
          <button className="btn btn-sm">Contact me</button>
          </Link>
           
            <button className="px-6 py-2 text-white font-medium">My Portfolio</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About1;
