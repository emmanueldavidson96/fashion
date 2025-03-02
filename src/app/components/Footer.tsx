"use client"
import Image from 'next/image'
import React from 'react'
import logoImage from "../../../public/assets/AFWN - white.png";
import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-full relative lg:h-[90vh] h-[1000px]'>
        <video
            controls={false}
            src="https://res.cloudinary.com/dyn1k6wcl/video/upload/v1739994319/adebakare_online-video-cutter.com_wglcy9.mp4"
            loop
            muted
            playsInline
            autoPlay
            className="absolute w-full h-full object-cover brightness-50"
        />

        <div className='absolute top-[4%] left-[4%] w-[90%] mx-auto flex max-md:flex-col max-md:gap-6 justify-between py-8 border-b border-white h-[300px]'>
            
            <motion.div 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}} 
                className='flex flex-col gap-4 w-[45%] max-md:w-full h-full'>
                <h3 className='lg:text-4xl text-lg uppercase font-extrabold text-white'>STAY UPDATED, JOIN OUR MAILING LIST</h3>
                <p className='max-lg:text-sm text-white'>Sign up to be the first to find out when we add new events and share African Fashion Week Nigeria news and more.</p>
                <p className='max-lg:text-sm text-white'>We respect your privacy and will never share your information with third-party vendors.</p>
            </motion.div>

            <div className='flex items-center justify-end w-[45%] max-md:w-full h-full'>
                <div className='flex w-fit h-[60px]'>
                    <input type="email" placeholder='Email Address' className='p-4 h-full w-[350px] text-black text-sm' />
                    <button className='bg-green-500 text-sm text-white p-4 hover:bg-green-600 h-full transition-all duration-500 '>Sign Up</button>
                </div>
            </div>
        </div>

        <div className='flex justify-between py-8 w-[85%] max-md:flex-col max-md:gap-10 mx-auto absolute bottom-[15%] max-lg:bottom-[9%] left-[4%]'>
            
            <motion.div 
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}} 
                className='flex flex-col gap-4 max-md:w-full'>
                <h3 className='md:text-4xl text-xl uppercase text-white font-bold'>Support</h3>
                <p className='d:text-base text-sm text-white'>Terms and Conditions</p>
                <p className='d:text-base text-sm text-white'>Privacy Policy</p>
                <p className='d:text-base text-sm text-white'>FAQs</p>
            </motion.div>

            <motion.div 
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}} 
                className='flex flex-col gap-4 md:items-center  max-md:w-full'>
                <Image 
                    src={logoImage}
                    alt=''
                    className='lg:w-[150px] w-[80px] h-auto bg-cover '
                />
                <h2 className='uppercase font-bold text-base lg:text-3xl text-white'>African Fashion Week Nigeria</h2>
            </motion.div>

            
            <motion.div 
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}} 
                className='flex flex-col gap-4 max-md:w-full' >
                <h3 className='md:text-4xl text-xl uppercase text-white font-bold'>Contact</h3>
                <Link href={"/contact-us"} className='d:text-base text-sm text-white cursor-pointer'>Contact Us</Link>
                <Link href={"/press-media-pass"} className='d:text-base text-sm text-white cursor-pointer' >Press </Link>
                
            </motion.div>

           

        </div>

    </footer>
  )
}
