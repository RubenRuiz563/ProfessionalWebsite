import React from 'react';


const Experience = () => {
  return (
    <div name='experience' className='w-full md:h-screen text-gray-300 bg-[#2d6c8c]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#49b0ff]'>
            Experience
          </p>  
        </div>
        <div className='mb-8'>
        <div className='flex justify-between items-center'>
          <h3 className='text-2xl font-bold'>E-commerce Database Management System - CS166 Final Project</h3>
          <p className='italic'>Winter 2023</p>
        </div>
          <p>Developed a relational database system using SQL which imitates Amazon's core functionalities.</p>
          <ul className='list-disc ml-5'>
              <li>Utilized advanced SQL queries to handle data insertion, updates, deletions, and retrieval operations, simulating real-world e-commerce transactions.</li>  
              <li>Enhanced database performance by optimizing queries and indexing critical columns to speed up data retrieval processes.</li>
          </ul>
        </div>

        <div className='mb-8'>
        <div className='flex justify-between items-center'>
          <h3 className='text-2xl font-bold'>Flight Booking System - CS100 Final Project</h3>
          <p className='italic'>Winter 2022</p>
        </div>
          <p>Collaborated with a team of 4 developers to design and develop the system, using Git for version control and project management.</p>
          <ul className='list-disc ml-5'>
              <li>Implemented a user interface that allowed customers to search for flights, book tickets, and manage their bookings. Incorporated features such as seat selection, and filters to enhance the user experience.</li>
              <li>Conducted rigorous testing and debugging to ensure the system was bug-free and had a high level of accuracy in terms of pricing, availability, and booking confirmation.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
