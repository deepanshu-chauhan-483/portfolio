import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

import Image1 from '../assets/portfolio-img1.png';
import Image2 from '../assets/portfolio-img2.png';
import Image3 from '../assets/portfolio-img3.png';



const projects = [
  { id: 1, image: Image1, alt: "Hackathon Project", title: "Sarathi" },
  { id: 2, image: Image2, alt: "College Project", title: "Generative AI App" },
];

const Work1 = () => {
  return (
    <div className='container mx-auto ' id='work'>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between my-10 gap-8">
        {/* side 1 */}
        <motion.div className="lg:w-1/2 flex flex-col gap-12 lg:pr-8"
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"> 
          <div>
            <motion.h2 className="h1 text-pink-500 text-5xl font-bold"
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show">MY LATEST WORK</motion.h2>
            <motion.p className="text-gray-300 my-6"
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, hic! Harum quis, cum velit neque esse eos molestias doloremque explicabo!
            </motion.p>
            <motion.button className="btn btn-sm mb-2"
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show">
              View all projects
            </motion.button>
          </div>
          {/* Image Section */}
        
          <motion.div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="show">
            {/* overlay */}
            <a href='https://mern-estate-app-wjtr.onrender.com' target="_blank" rel="noopener noreferrer">
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Image3}
                alt='MERN Estate App'
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Full Stack Project</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>MERN Estate App</span>
              </div>
            </a>
          </motion.div>
        
        </motion.div>

        {/* side 2 */}
        <div className="lg:w-1/2 flex flex-col gap-12 lg:pl-8"
        
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView="show" // Add a key for each project
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
            >
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={project.image} // Corrected the image source
                alt={project.alt} // Corrected the alt attribute
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>{project.alt}</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>{project.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work1;