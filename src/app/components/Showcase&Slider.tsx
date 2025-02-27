"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { IoCloseCircle } from 'react-icons/io5'
import { IoArrowRedo, IoArrowUndoSharp } from "react-icons/io5";
import { MdArrowBackIos,MdArrowForwardIos} from "react-icons/md";
import { motion } from 'framer-motion'
import { fadeIn } from '../../../lib/variants'

const gallery = [
    {
        id:1,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048322/IMG_3603_gxu3et.jpg",
    },
    {
        id:2,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048333/IMG_3616_hgbl5q.jpg",
    },
    {
        id:3,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048321/IMG_2250_vhurki.jpg",
    },
    {
        id:4,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048321/IMG_2239_qoy1yc.jpg"
    },
    {
        id:5,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048321/IMG_2239_qoy1yc.jpg"
    },
    {
        id:6,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048320/IMG_2260_wa3ywt.jpg"
    },
    {
        id:7,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048320/IMG_1324_bbxkak.jpg"
    },
    {
        id:8,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048319/IMG_1542_urbmod.jpg"
    },
    {
        id:9,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739988258/IMG_1164_q0maxd.jpg"
    },
    {
        id:10,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739432937/IMG_5075_il2xnk.jpg"
    }
]


export default function ShowcaseSlider() {
    const [selectedImg, setSelectedImg] = useState<number>(0);
    const [imgPop, setImgPop] = useState<boolean>(false);

    const swipeImg = (moveType:string) => {
        if(moveType == "prv"){
            if(selectedImg == 0){
                setSelectedImg(gallery.length -1)
            }else{
                setSelectedImg(selectedImg -1)
            }
        }
        if(moveType== "nxt"){
            if(selectedImg == gallery.length - 1){
                setSelectedImg(0)
            }else{
                setSelectedImg(selectedImg +1)
            }
        }
    }

  return (
    <div className='w-screen h-[800px] py-16 bg-white'>
        <div className='w-[94%] mx-auto h-full flex max-lg:flex-col items-center justify-between gap-6'>
            
            <div className='w-[50%] max-lg:w-full h-full gap-6 flex justify-between'>
                <div className='w-[50%] h-full overflow-hidden'>
                    <motion.img
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once:false, amount:0.3}}
                        src={"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048333/IMG_3616_hgbl5q.jpg"}
                        alt=''
                        className='w-full object-cover h-full'
                        onClick={() => setImgPop(true)}
                    />
                </div>
                <div className='w-[50%] h-full overflow-hidden'>
                    <motion.img
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once:false, amount:0.3}}
                        src={"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048322/IMG_3603_gxu3et.jpg"}
                        alt=''
                        className='w-full object-cover h-full'
                        onClick={() => setImgPop(true)}
                    />
                </div>
            </div>

            <div className='w-[50%] max-lg:w-full h-full gap-6 flex justify-between items-center'>
                
                <div className='w-[50%] h-full gap-6 flex flex-col justify-between'>                   
                    
                    <div className='w-full h-[50%] overflow-hidden'>
                        <motion.img
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:false, amount:0.3}}
                            src={"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739988258/IMG_1164_q0maxd.jpg"}
                            alt=''
                            className='w-full object-cover h-full'
                            onClick={() => setImgPop(true)}
                        />
                    </div>

                    <div className='w-full h-[50%] overflow-hidden'>
                        <motion.img
                            variants={fadeIn("up", 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:false, amount:0.3}}
                            src={"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739432937/IMG_5075_il2xnk.jpg"}
                            alt=''
                            className='w-full object-cover h-full'
                            onClick={() => setImgPop(true)}
                        />
                    </div>

                </div>

                <div className='w-[50%] h-full overflow-hidden'>
                    <motion.img
                        variants={fadeIn("up", 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once:false, amount:0.3}}
                        src={"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048319/IMG_1542_urbmod.jpg"}
                        alt=''
                        className='w-full object-cover h-full'
                        onClick={() => setImgPop(true)}
                    />
                </div>

            </div>

        </div>
        {imgPop && (                       
            <div className='left-0 right-0 bottom-0 bg-black bg-opacity-95 z-50 flex justify-between w-full items-center fixed top-0 '>
                               
                <IoCloseCircle size={40} className='cursor text-green-500 pointer absolute top-2 right-2 cursor-pointer' onClick={() => setImgPop(!imgPop)}/>                
                
                <div className="bg-green-500 max-lg:absolute max-lg:left-2 max-lg:bottom-[45%]  ml-2 rounded-full hover:translate-x-3 transition-all ease-linear cursor-pointer p-2" onClick={() => swipeImg("prv")}>
                    <MdArrowBackIos size={20} className='cursor-pointer text-white '/>
                </div>
                <img 
                    src={gallery[selectedImg].img}
                    alt={""}
                    className='lg:max-w-[600px] w-full h-auto'
                /> 
                <div className="bg-green-500 rounded-full mr-2 max-lg:absolute max-lg:right-2 max-lg:bottom-[45%] hover:-translate-x-3 transition-all ease-linear cursor-pointer p-2" onClick={() => swipeImg("nxt")}>
                    <MdArrowForwardIos size={20} className='cursor-pointer text-white'/>
                </div>
            </div>
            
        )}

    </div>
  )
}
