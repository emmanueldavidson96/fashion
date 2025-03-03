"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../lib/variants'

export default function Schedule() {
  return (
    <div className='w-screen h-fit py-24 px-10 flex flex-col bg-white gap-8 justify-center items-center'>
        <motion.h2 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.3}} 
            style={{ fontFamily: "'Anton', sans-serif" }}
            className='lg:text-6xl text-4xl font-extrabold text-black uppercase text-center'>2025 Schedule</motion.h2>
        
        <div className='w-[85%] mx-auto flex max-lg:flex-col max-lg:gap-6 justify-between h-fit mt-12'>
            
            <motion.div 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}} 
                className='flex flex-col gap-6 w-[30%] max-lg:w-full'>
                <div className='w-full bg-black h-[250px] py-16 px-4 flex flex-col items-center justify-center gap-5 mb-8'>
                    <h2 className='text-6xl max-lg:text-3xl text-white font-bold ' style={{ fontFamily: "'Anton', sans-serif" }}>12pm - 8pm </h2>
                    <p className='text-3xl max-lg:text-xl text-white font-semibold' >Friday 12 December</p>
                </div>

                <p className='text-black text-xl font-semibold'>AFWN2025 Set Up</p>
                <p className='text-black text-xl font-semibold'>(tbc) Sponsor Led Activities</p>
            </motion.div>

            <motion.div 
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}} 
                className='flex flex-col gap-6 w-[30%] max-lg:w-full'>
                <div className='w-full bg-black h-[250px] py-16 flex flex-col items-center justify-center gap-5 mb-8'>
                    <h2 className='text-6xl max-lg:text-3xl text-white font-bold' style={{ fontFamily: "'Anton', sans-serif" }}>12pm - 9pm </h2>
                    <p className='text-3xl max-lg:text-xl text-white font-semibold'>Saturday 13 December</p>
                </div>

                <p className='text-black text-xl font-semibold'>AFWN2025 Exhibitors</p>
                <p className='text-black text-xl font-semibold'>Food & Drink</p>
                <p className='text-black text-xl font-semibold'>1pm - Special Performance</p>
                <p className='text-black text-xl font-semibold'>4pm - Gen z Catwalk Showcase</p>
                <p className='text-black text-xl font-semibold'>7pm - VIP Celebrity Catwalk Showcase</p>
            </motion.div>

            <motion.div 
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}} 
                className='flex flex-col gap-6 w-[30%] max-lg:w-full'>
                <div className='w-full bg-black h-[250px] py-16 flex flex-col items-center justify-center gap-5 mb-8'>
                    <h2 className='text-6xl max-lg:text-3xl text-white font-bold' style={{ fontFamily: "'Anton', sans-serif" }}>12pm - 7pm </h2>
                    <p className='text-3xl max-lg:text-xl text-white font-semibold'>Sunday 14 December</p>
                </div>

                <p className='text-black text-xl font-semibold'>AFWN2025 Exhibitors</p>
                <p className='text-black text-xl font-semibold'>Food & Drink</p>
                <p className='text-black text-xl font-semibold'>1pm - Peoples Catwalk</p>
                <p className='text-black text-xl font-semibold'>4pm - 15 Year Anniversary Special Catwalk</p>
                <p className='text-black text-xl font-semibold'>7pm - Close 2025</p>
            </motion.div>
        </div>
    </div>
  )
}
