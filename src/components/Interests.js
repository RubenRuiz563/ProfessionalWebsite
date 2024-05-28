import React from 'react';

function Interests() {
    return (
        <div name='interests' className='w-full md:h-screen text-gray-300 bg-[#2d6c8c]'>
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#49b0ff]'>
              Interests
              </p>
            </div>
            <div className='mb-8'>
            <div className='flex justify-between items-center'>
              <h3 className='text-2xl font-bold'>Artificial Intelligence</h3>
            </div>
              <p>I am passionate about AI due to its immense potential to enhance human capabilities. 
                My deep interest in AI was sparked by the launch of ChatGPT, which demonstrated remarkable capabilities and left a profound impression on me. 
                Since then, I have been dedicated to pursuing a career in AI. 
                Along the way, I have developed several simple AI applications, further solidifying my commitment to contributing to advancements in this transformative field.</p>
            </div>
            <div className='mb-8'>
            <div className='flex justify-between items-center'>
              <h3 className='text-2xl font-bold'>Game Development</h3>
            </div>
              <p>I have always been a fan of video games, and recently, I decided to explore game development as a hobby. 
                I have been immersing myself in learning the tools and techniques required to one day create my own video game.</p>
            </div>
          </div>
        </div>
      );
}

export default Interests;
