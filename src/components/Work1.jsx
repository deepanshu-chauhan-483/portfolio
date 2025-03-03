import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import Image1 from '../assets/sarathi.png';
import Image2 from '../assets/MERN_ESTATE.png';
import Image3 from '../assets/meme_explorer.png';
import Image4 from '../assets/accredian.png';
import Image5 from '../assets/product-landing.png';
import Image6 from '../assets/pdf_app.png';
import Image7 from '../assets/portfolio-img1.png';

const projects = [
  { id: 1, image: Image1, alt: "Hackathon Project", title: "Sarathi", link: "https://github.com/deepanshu-chauhan-483/Sarathi" },
  { id: 2, image: Image2, alt: "Full Stack Project", title: "MERN-ESTATE", link: "https://mern-estate-app-wjtr.onrender.com/sign-in" },
  { id: 3, image: Image3, alt: "Frontend Project", title: "Meme-explorer", link: "https://meme-explorer.vercel.app/" },
  { id: 4, image: Image4, alt: "Frontend Project", title: "Accredian Referral Page", link: "https://accredian-frontend-pi-one.vercel.app/" },
  { id: 5, image: Image5, alt: "Frontend Project", title: "Product Landing Page", link: "https://product-landing-page-orpin-alpha.vercel.app/" },
  { id: 6, image: Image6, alt: "Full Stack Gen-AI Project", title: "PDF chatting AI", link: "https://pdf-app-jade.vercel.app/" },
  { id: 7, image: Image7, alt: "Full Stack Gen-AI Project", title: "Generative AI App", link: "https://github.com/deepanshu-chauhan-483/Generative_AI_Application" }
];

const Work1 = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className='container mx-auto px-4' id='work'>
      <motion.div className="flex flex-col lg:flex-row items-start lg:items-center justify-between my-10 gap-8"
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
      >
        {/* Left side: Heading, Description & Featured Project */}
        <motion.div className="lg:w-1/2 flex flex-col gap-6 lg:pr-8">
          <motion.h2 className="h1 text-pink-500 text-5xl font-bold"
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
          >
            MY LATEST WORK
          </motion.h2>
          <motion.p className="text-gray-300 my-4"
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
          >
            Explore some of my latest projects, including full-stack, frontend, and AI-based applications.
          </motion.p>

          {/* Button aligned with text */}
          <motion.button 
            className="btn btn-sm self-start"
            onClick={() => setShowAll(!showAll)}
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </motion.button>

          {/* Featured Project (Clickable) */}
          <motion.a href={projects[0].link} target="_blank" rel="noopener noreferrer"
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl block'
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView="show"
          >
            <img className='group-hover:scale-110 transition-all duration-500'
              src={projects[0].image}
              alt={projects[0].alt}
            />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>{projects[0].alt}</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>{projects[0].title}</span>
            </div>
          </motion.a>
        </motion.div>

        {/* Right side: Two Clickable Projects */}
        <div className="lg:w-1/2 flex flex-col gap-12 lg:pl-8">
          {projects.slice(1, 3).map((project) => (
            <motion.a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer"
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl block'
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView="show"
            >
              <img className='group-hover:scale-110 transition-all duration-500'
                src={project.image}
                alt={project.alt}
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>{project.alt}</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>{project.title}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Expanded View */}
      {showAll && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10"
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
        >
          {projects.slice(3).map((project) => (
            <motion.a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer"
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl block'
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
            >
              <img className='group-hover:scale-110 transition-all duration-500'
                src={project.image}
                alt={project.alt}
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>{project.alt}</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>{project.title}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Work1;
