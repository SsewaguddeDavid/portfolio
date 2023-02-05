import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div> 
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi, I'm David. Please take a look around</p>
          </div>
          <div>
            <p>Highly motivated and detail-oriented software developer with a 
              passion for delivering innovative and scalable solutions. Proficient in React, JavaScript,
               Firebase, Tailwind CSS, and Node, with experience building web applications and delivering 
               quality code. Seeking a challenging
               role where I can continue to grow my technical skills and make a positive impact on users.</p>
          </div>
        </div>  
      </div>

    </div>
  )
}
