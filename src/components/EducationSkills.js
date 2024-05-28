import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GIT from '../assets/git.png';
import FireBase from '../assets/firebase.png';
import Cplusplus from '../assets/c++.png';
import PYTHON from '../assets/python.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import PSQL from '../assets/Postgresql_elephant.png'

const EducationSkills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#2d6c8c] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#49b0ff] '>Education and Skills</p>
              <p className='py-4'></p>
          </div>

      <div>
          <div className='space-y-4'>
            <div className='flex justify-between'>
              <div>
                <h3 className='text-2xl font-bold'>University of California, Riverside</h3>
                    <p className='text-xl'>Bachelor of Science in Computer Science</p>
                    <div className='mt-2'>
                    <h4 className='text-xl font-bold'>Relevant Coursework:</h4>
                    <ul className='list-disc list-inside'>
                        <li>CS166 - Database Management Systems</li>
                        <li>CS170 - Intorduction to Artificial Intelligence</li>
                        <li>CS171 - Intorduction to Machine Learning & Data Mining</li>
                    </ul>
                    </div>
                </div>
                <p className='text-xl'>March, 2025</p>
            </div>
          </div>
        </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={PYTHON} alt="Python icon" />
                  <p className='my-4'>PYTHON</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="JAVASCRIPT icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Cplusplus} alt="C++ icon" />
                  <p className='my-4'>C++</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="Node JS icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={PSQL} alt="PSQL icon" />
                  <p className='my-4'>PostgreSQL</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="Mongo DB icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="TAILWIND icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={FireBase} alt="FIREBASE icon" />
                  <p className='my-4'>FIREBASE</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GIT} alt="GIT icon" />
                  <p className='my-4'>GIT</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default EducationSkills;
