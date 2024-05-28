import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div name='contact' className='w-full bg-[#2d6c8c] flex justify-center items-center p-4'>
      <div className='flex space-x-4'>
        <a href="https://www.linkedin.com/in/rubenruiz563/" target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:scale-125'>
          <FaLinkedin size={50} style={{ color: 'white' }} />
        </a>
        <a href="https://github.com/RubenRuiz563" target="_blank" rel="noopener noreferrer" className='transition-transform duration-300 hover:scale-125'>
          <FaGithub size={50} style={{ color: 'white' }} />
        </a>
        <a href="mailto:rrubenruiz563@gmail.com" className='transition-transform duration-300 hover:scale-125'>
          <FaEnvelope size={50} style={{ color: 'white' }} />
        </a>
      </div>
    </div>
  )
}

export default Footer;
