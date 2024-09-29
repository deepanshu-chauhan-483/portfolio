import React from 'react';
import Logo from '../assets/logo1.png';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    
      <div className='container mx-auto my-6'>
        <div className='flex justify-between items-center'>
          {/* logo */}
         
          <a href='#'>
            <img src={Logo} alt='logo' className='w-[150px] h-[50px]'/>
          </a>
         
          {/* button */}
          <Link to='contact' smooth={true} spy={true}>
          <button className='btn btn-sm'>Work with me</button>
           </Link>
        </div>
      </div>
    
   
  );
};

export default Header;
