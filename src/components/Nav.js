import React from 'react';
import { Link } from 'react-scroll';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsTelephone } from 'react-icons/bs';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-4 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[60px] backdrop-blur-2xl rounded-full max-w-[350px] mx-auto px-2 flex justify-between items-center text-2xl text-white/50'>
          <Link to='home' smooth={true} spy={true} activeClass='active' className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center'>
            <BiHomeAlt />
          </Link>
          <Link to='about' smooth={true} spy={true} activeClass="active" className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center'>
            <BiUser />
          </Link>
          <Link to='services' smooth={true} spy={true} activeClass="active" className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center'>
            <BsClipboardData />
          </Link>
          <Link to='work' smooth={true} spy={true} activeClass="active" className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center'>
            <BsBriefcase />
          </Link>
          <Link to='contact' smooth={true} spy={true} activeClass="active" className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center'>
            <BsTelephone />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
