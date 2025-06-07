import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import RESUME from '../assets/Resume.pdf'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#2d6c8c] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#49b0ff]'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-3xl font-bold'>
            <p>Hello! I'm Ruben, a fourth-year Computer Science major @ UCR.</p>
          </div>
          <div>
            <p>
              I have a strong foundation in software development and a keen interest
              in artificial intelligence and machine learning. I'm looking to leverage
              my technical skills and innovative thinking to drive advancements in technology
              and contribute to cutting-edge projects.
            </p>  
            <a href={RESUME} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4fa8df] hover:border-[#4fa8df]'>
                View Resume
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3 ' />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

