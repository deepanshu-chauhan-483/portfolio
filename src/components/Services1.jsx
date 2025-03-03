import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-scroll';
import {BsArrowUpRight} from "react-icons/bs"
import Image from '../assets/lillustration.svg'
import { Navigate } from 'react-router-dom';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const services = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces for web and mobile applications.",
    learnMore: "#uiux-design"
  },
  {
    title: "Development",
    description: "Building responsive and performant web applications using modern full stack technologies React, Node.js, Express.js, MongoDB",
    learnMore: "#development"
  },
  {
    title: "Data Structures and Algorithms",
    description: "Solving DSA questions in C++ and Javascript language",
    learnMore: "#digital-marketing"
  }
  
];

const Services1 = () => {
  return (
    <div className='container mx-auto' id='services'>
      <div className="flex flex-col lg:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <motion.h2 className="h1 text-pink-500 text-5xl font-bold"
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView="show">WHAT I DO</motion.h2>
        <motion.h1 className="h2 text-3xl font-bold my-8 font-secondary"
        variants={fadeIn('right', 0.4)}
        initial="hidden"
        whileInView="show">
          I'm a Freelance Front-end Developer with over 5 years of experience.
        </motion.h1>
        <Link to='work' smooth={true} spy={true} >
        <motion.button className="btn btn-sm "
        variants={fadeIn('right', 0.5)}
        initial="hidden"
        whileInView="show">
          See my work
        </motion.button>
        </Link>
        <div className="hidden md:block  mt-8">
  <motion.img
    src={Image}
    alt="Developer working on laptop"
    width={400}
    height={400}
    className="rounded-lg"
    variants={fadeIn('right', 0.6)}
          initial="hidden"
          whileInView="show"
  />
</div>

      </div>
      <div className="md:w-1/2 md:pl-8 my-4">
        {services.map((service, index) => (
          <motion.div key={index} 
          variants={fadeIn('left', 0.6)}
          initial="hidden"
          whileInView="show"
          className="mb-8 pb-4 border-b border-purple-700 last:border-b-0">
            <div className='flex items-center justify-between'> 
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <a href='#' className='btn w-[30px] h-[30px] mb-[42px] flex justify-center items-center'>
           <BsArrowUpRight/> 
          </a>
              
            </div>
            <p className="text-purple-300 mb-2">
              {service.description}
            </p>
            <a href={service.learnMore} className="flex items-center text-pink-400 hover:underline">
            
            <span className="mr-2 text-gradient">Learn more</span>    
              </a>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Services1