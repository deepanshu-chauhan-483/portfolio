import React from 'react';
import Profile from '../assets/profile3.png';
import { Link } from 'react-scroll';
import { BsCode, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const Banner1 = () => {
  return (
    <div className='container mx-auto' id='banner'>
      <div className='flex flex-grow-0'>
        <div className='flex flex-col my-10'>
          <h1 className='h1 mt-10 mb-5 font-bold'>Deepanshu</h1>
          <h1 className='h1 py-5 font-tertiary text-gradient font-bold'>Chauhan</h1>
          <h2 className='h2 tracking-wide'>I am a <span className='text-[#FF56F6] '>Developer</span></h2>
          <p className='h'>Computer Science student at Galgotias College of Engineering and Technology. Currently studying in the field of Artifial Intelligenece and Machine Learning.</p>
          <div className='flex flex-row button-container mt-5 mb-10 gap-5'>
          <Link to='contact' smooth={true} spy={true}>
          <button className='btn btn-lg'>Contact me</button>
          </Link>
            <button className='btn-link text-gradient'>My Portfolio</button>
          </div>
          <div className='social-media-container flex gap-8'>
            <a href="#"><BsTwitter /></a>
            <a href="https://github.com/deepanshu-chauhan-483?tab=repositories"><BsGithub /></a>
            <a href="https://www.instagram.com/_deep.thakur_/profilecard/?igsh=ZDRuMGtqd3UxcjVr"><BsInstagram /></a>
            <a href="https://leetcode.com/u/Deepanshu_Chauhan_/"><BsCode /></a>
          </div>
        </div>
        <img src={Profile} alt="Profile" className='xl:h-[450px] w-[500px] hidden xl:block' />
      </div>
    </div>
  );
}

export default Banner1;
