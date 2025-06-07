import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2d6c8c] text-gray-300'>
      <ul className='hidden md:flex ml-auto'>
        <li>
          <Link to='home' smooth={true} duration={500} className='hover:underline hover:text-white transition duration-300'>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500} className='hover:underline hover:text-white transition duration-300'>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500} className='hover:underline hover:text-white transition duration-300'>
            Education and Skills
          </Link>
        </li>
        <li>
          <Link to='experience' smooth={true} duration={500} className='hover:underline hover:text-white transition duration-300'>
            Experience
          </Link>
        </li>
        <li>
          <Link to='interests' smooth={true} duration={500} className='hover:underline hover:text-white transition duration-300'>
            Interests
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500} className='hover:underline hover:text-white transition duration-300'>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
