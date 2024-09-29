import React from 'react';
import Profile from '../assets/profile3.png';
import { Link } from 'react-scroll';
import { BsCode, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';


const Banner1 = () => {
  return (
    <div className='container mx-auto' id='banner'>
      <div className='flex flex-grow-0'>
        <div className='flex flex-col my-10'>
          <motion.h1 className='font-tertiary text-[50px] tracking-[10%] uppercase mt-10  font-bold xl:h1'
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          >Deepanshu</motion.h1>
          <motion.h1 className='xl:h1 py-5 font-tertiary text-[50px] text-gradient font-bold'
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show">Chauhan
          </motion.h1>
          <motion.h2 className=' font-primary text-[24px] mb-6 tracking-[10%] uppercase xl:h2'
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show">I am a  
           
            <TypeAnimation
  sequence={[
    ' Developer', 
    2000,         
    ' Student',   
    2000,        
  ]}
  speed={50} 
  className='text-[#FF56F6] '  
  wrapper="span"  
  repeat={Infinity} 
/>
</motion.h2>
          <motion.p className='h'
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show">Computer Science student at Galgotias College of Engineering and Technology.
             Currently studying in the field of Artifial Intelligenece and Machine Learning.</motion.p>
          <motion.div className='flex flex-row button-container mt-5 mb-10 gap-5'
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show">
          <Link to='contact' smooth={true} spy={true}>
          <button className='btn btn-lg'>Contact me</button>
          </Link>
            <button className='btn-link text-gradient'>My Portfolio</button>
          </motion.div>
          <motion.div className='social-media-container flex gap-8'
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="show">
            <a href="#"><BsTwitter /></a>
            <a href="https://github.com/deepanshu-chauhan-483?tab=repositories"><BsGithub /></a>
            <a href="https://www.instagram.com/_deep.thakur_/profilecard/?igsh=ZDRuMGtqd3UxcjVr"><BsInstagram /></a>
            <a href="https://leetcode.com/u/Deepanshu_Chauhan_/"><BsCode /></a>
          </motion.div>
        </div>
        <motion.img variants={fadeIn('down', 0.5)}
          initial="hidden"
          whileInView="show"src={Profile} alt="Profile" className='xl:h-[450px] w-[500px] hidden xl:block' />
      </div>
    </div>
  );
}

export default Banner1;
