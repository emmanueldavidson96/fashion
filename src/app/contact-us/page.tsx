import React from 'react'
import { IoIosContacts } from "react-icons/io";
import { MdQuestionAnswer } from "react-icons/md";
import Header from '../components/Header';

export default function page() {
  return (
    <div className=''>
      <Header />
      <section className="w-screen h-[100vh] relative overflow-hidden flex items-center justify-center px-4">
        {/* Background Video */}
        <video
          controls={false}
          src="https://res.cloudinary.com/dyn1k6wcl/video/upload/v1739996427/ejiro_amos_tafiri_online-video-cutter.com_mjy5xs.mp4"
          loop
          muted
          playsInline
          autoPlay
          className="absolute w-full h-full object-cover brightness-50"
        />

        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>

        {/* Content Wrapper */}
        <div className="absolute bottom-[20%] max-lg:bottom-[5%] left-10 lg:left-[20%] text-left max-w-[80%] lg:max-w-[70%] flex max-lg:flex-col gap-12 items-start">
          <form className='flex flex-col gap-3 max-lg:gap-1 w-[50%] max-lg:w-full'>
            <label className='text-4xl max-lg:text-xl text-green-500 uppercase font-bold tracking-widest'>Contact Us</label>
            <input type="text" className='text-white w-full border-b border-white bg-transparent p-3 max-lg:p-2' placeholder='First Name' />
            <input type="text" className='text-white w-full border-b border-white bg-transparent p-3 max-lg:p-2' placeholder='Last Name' />
            <input type="email" className='text-white w-full border-b border-white bg-transparent p-3 max-lg:p-2' placeholder='Email' />
            <input type="text" className='text-white w-full border-b border-white bg-transparent p-3 max-lg:p-2' placeholder='Phone' />
            <textarea className='text-white w-full border-b border-white bg-transparent p-3 h-[150px] max-lg:h-[100px] max-lg:p-2' placeholder='Comment' />
            <button className='text-white bg-green-500 px-8 py-3 rounded-xl mt-8 max-lg:mt-4' type='submit'>Submit</button>

          </form>   
          {/* Title Section */}
          <div className='flex flex-col gap-4 max-lg:gap-2 w-[45%] max-lg:w-full'>
            
            <div className='flex gap-4 max-lg:gap-2 items-center'>
              <MdQuestionAnswer 
                size={40}
                className='text-green-500 '
              />

              <p className='text-white text-xl'>info@africafashionweeknigeria.com</p>
            </div>

            <div className='flex gap-4 items-center'>
              <IoIosContacts 
                size={40}
                className='text-green-500'
              />

              <p className='text-white xl'>07088800866</p>
            </div>
            <h3 className='text-white text-lg mt-8 max-lg:mt-3 max-lg:text-sm' >Simply send us an email anytime you want. We are open to all suggestions, ideas and partnerships from all.</h3>
          </div> 
          
        </div>
      </section>
    </div>
  )
}
