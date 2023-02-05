import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/869d9a14-d11d-4290-90f1-383b2b88e38e" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8' >
                <p className='text-4xl font-bold text-gray-300 border-b-4 inline border-pink-600'>Contact</p>
                <p className='py-4 text-gray-300'>Send me an email </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name="name" />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name="email" />
            <textarea className='bg-[#ccd6f6] p-2' name="message" placeholder='Message' rows="10"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's collaborate</button>
        </form>
    </div>
  )
}
