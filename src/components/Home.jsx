import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>
        <div className="max-w mx-aut0 px-8 flex flex-col justify-center h-full">
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ssewagudde David</h1>
            <h2 className='text-4xl sm:text-7xl text-[#8892b0]'>I'm a fullstack developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestias fugiat officiis sit eaque culpa vero voluptatibus odit earum facere, amet quod minima impedit, repudiandae totam delectus. Asperiores, praesentium amet!</p>
            <div>
             <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                View work 
                <span className='group-hover:rotate-90'>
                    <HiArrowNarrowRight className='ml-3'/>
                </span>
            </button>
            </div>
        </div>
    </div>
  )
}
