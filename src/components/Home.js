import React from 'react';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#2d6c8c]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#67c7d8]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-8xl font-bold text-[#ccd6f6]'>
          Ruben Ruiz Vazquez
        </h1>
        <p className='text-[#bdc7e4] py-4 max-w-[700px]'>
        I'm a Computer Science student aspiring to be a software engineer, dedicated to creating innovative and impactful software solutions.
        </p>
      </div>
    </div>
  );
};

export default Home;
