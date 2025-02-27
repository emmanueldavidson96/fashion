"use client";
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {motion} from "framer-motion";
import { usePathname, useRouter } from 'next/navigation';
import Image from "next/image";
import {IoMdArrowDropdown} from "react-icons/io"
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { CgClose, CgMenu } from 'react-icons/cg';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { fadeIn } from '../../../lib/variants';


function Header() {
    const [scrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const [pasteditionHovered, setPastEditionHovered] = useState(false);
    const [applyHovered, setApplyHovered] = useState(false);
    const [aboutHovered, setAboutHovered] = useState(false);
    const [registerHovered, setRegisterHovered] = useState(false);
    const [afwn2024, setAfwn2024] = useState(false)
    const router = useRouter();

    // Mobile Nav navigation
    const [normalNav, setNormalNav] = useState(true);
    const [applyNav, setApplyNav] = useState(false);

  return (
    <header
      className={`w-screen flex justify-between items-center fixed top-0 left-0 z-50 px-4 md:px-12 lg:px-16 transition-all duration-500 ${
        scrolled
          ? "h-[110px] md:h-[100px] bg-black"
          : "h-[120px] md:h-[120px] bg-black"
      }`}
    >
        <div className='flex lg:hidden'>

        </div>
        {/* Left Navigation */}
        <nav className="hidden lg:flex items-center gap-3 lg:gap-6">
            
            <motion.div
                whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(255,255,255,0.8)" }}
                transition={{ duration: 0.3 }}
                >
                <h3 onMouseEnter={() => setAboutHovered(true)} onMouseLeave={() => setAboutHovered(false)} 
                    className={`uppercase cursor-pointer lg:text-xs py-5 flex items-center gap-2 relative text-sm tracking-wider transition-all duration-300 hover:text-[#32de84]`}>
                        About <IoMdArrowDropdown size={25} className="text-white"/>
                    <div className={`flex-col gap-4 w-[200px] h-fit px-6 py-6 rounded-md absolute top-[45px] bg-black ${aboutHovered ? "flex": "hidden"}`}>
                        <p className={`lg:text-xs text-sm uppercase hover:text-green-500 duration-500 cursor-pointer ${pathName === "/about-us" ? "text-[#32de84]":"text-white"}`} onClick={() => router.push("/about-us")}>About AFWN</p>
                        {/* <p className={`text-white lg:text-xs text-sm uppercase hover:text-green-500 duration-500 cursor-pointer`}>AFWN Stats</p> */}
                    </div>  
                </h3>
            </motion.div> 

            <motion.div
                whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(255,255,255,0.8)" }}
                transition={{ duration: 0.3 }}
            >
                <h3 onMouseEnter={() => setApplyHovered(true)} onMouseLeave={() => setApplyHovered(false)} className={`uppercase cursor-pointer lg:text-xs py-5 flex items-center gap-2 relative text-sm tracking-wider transition-all duration-300 hover:text-[#32de84] ${pathName === "/team"? "text-[#32de84]":""}`}>Apply <IoMdArrowDropdown size={25} className="text-white"/>
                    <div className={`gap-4 w-[500px] h-fit px-6 py-6 rounded-md absolute top-[60px] bg-black ${applyHovered ? "flex": "hidden"}`}>
                        <div className='w-[50%] flex-col flex gap-5'>
                            <p className={`lg:text-xs text-sm uppercase hover:text-green-500 duration-500 cursor-pointer ${pathName === "/emerging-fashion-designers-application"? "text-[#32de84]":"text-white"}`} onClick={() => router.push("/emerging-fashion-designers-application")}>Emerging Fashion Designers Application</p>
                            <p className={`lg:text-xs text-sm uppercase hover:text-green-500 duration-500 cursor-pointer ${pathName === "/models-casting-form"? "text-[#32de84]":"text-white"}`} onClick={() => router.push("/models-casting-form")}>Models Casting Form</p>
                            <p className={`lg:text-xs text-sm uppercase hover:text-green-500 duration-500 cursor-pointer ${pathName === "/partnership-application"? "text-[#32de84]":"text-white"}`} onClick={() => router.push("/partnership-application")}>Partnership</p>
                            <p className={`lg:text-xs text-sm uppercase hover:text-green-500 duration-500 cursor-pointer ${pathName === "/press-media-pass"? "text-[#32de84]":"text-white"}`} onClick={() => router.push("/press-media-pass")}>Press & Media Pass</p>
                        </div>

                        <div className='w-[50%] flex-col flex gap-5'>
                            <p className={`lg:text-xs text-sm uppercase hover:text-green-500 duration-500 cursor-pointer ${pathName === "/agency-form"? "text-[#32de84]":"text-white"}`} onClick={() => router.push("/agency-form")}>Agency Form</p>
                            {/* <p className={`lg:text-xs text-sm uppercase hover:text-green-500 duration-500 cursor-pointer ${pathName === "/reserve-a-seat"? "text-[#32de84]":"text-white"}`} onClick={() => router.push("/reserve-a-seat")}>Reserve a Seat</p> */}
                            <p className={`lg:text-xs text-sm uppercase hover:text-green-500 duration-500 cursor-pointer ${pathName === "/volunteer-application"? "text-[#32de84]":"text-white"}`} onClick={() => router.push("/volunteer-application")}>Volunteer Application</p>
                            <p className={`lg:text-xs text-sm uppercase hover:text-green-500 duration-500 cursor-pointer ${pathName === "/afwn-summit"? "text-[#32de84]":"text-white"}`} onClick={() => router.push("/afwn-summit")}>AFWN Summit</p>
                        </div>

                    </div>  
                </h3>
            </motion.div>    

            <motion.div
                whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(255,255,255,0.8)" }}
                transition={{ duration: 0.3 }}
                >
                <h3 onMouseEnter={() => setPastEditionHovered(true)} onMouseLeave={() => setPastEditionHovered(false)} className={`uppercase cursor-pointer lg:text-xs py-5 flex items-center gap-2 relative text-sm tracking-wider transition-all duration-300 hover:text-[#32de84] ${pathName === "/team"? "text-[#32de84]":""}`}>Gallery <IoMdArrowDropdown size={25} className="text-white"/>
                    <div className={`flex-col gap-4 w-[200px] h-fit px-6 py-6 rounded-md absolute top-[45px] bg-black ${pasteditionHovered ? "flex": "hidden"}`}>
                        <p className={`lg:text-xs text-sm uppercase hover:text-green-500 duration-500 cursor-pointer ${pathName === "/afwn-2024-gallery" ? "text-green-500" :"text-white"}`} onClick={() => router.push("/afwn-2024-gallery")}>AFWN 2024 Gallery</p>
                        {/* <p className="text-white lg:text-xs text-sm uppercase hover:text-green-500 duration-500 cursor-pointer">AFWN 2023 Gallery</p> */}
                    </div>  
                </h3>
            </motion.div>            
        </nav>

        <Link href={"/"} className='w-fit h-fit'>
            <motion.h1 
                variants={fadeIn("up", 0.2)}
                initial="visible"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className="text-2xl max-lg:w-[320px] max-lg:text-center md:text-3xl text-white font-black uppercase tracking-wider">Africa Fashion Week Nigeria</motion.h1>
        </Link>   

        {/* Right Navigation */}
      <nav className="hidden lg:flex items-center gap-3 lg:gap-6">
        <div className='flex gap-5 items-center '>
            <Link href="/https://web.facebook.com/Africafashionweeknigeria/?_rdc=1&_rdr#">
                <FaFacebook size={20} className='text-white cursor-pointer hover:text-green-500'/>            
            </Link>
            <Link href={"https://www.instagram.com/afwnigeria/"}>
                <FaInstagram  size={20} className='text-white cursor-pointer hover:text-green-500'/>
            </Link>
            <Link href={"https://twitter.com/africafwl"}>
                <FaXTwitter size={20} className='text-white cursor-pointer hover:text-green-500'/>
            </Link>
            <Link href={"https://www.youtube.com/channel/UC9wCLho35UTbuzbwDfp3XKA"}>
                <FaYoutube size={20} className='text-white cursor-pointer hover:text-green-500'/>
            </Link>
        </div>
      </nav>

      <nav className="hidden lg:flex items-center gap-3 lg:gap-6">
        <Link className='flex gap-4 items-center' href={"https://www.eventbrite.co.uk/o/africa-fashion-week-london-8259623456"}>
            <button className='text-white text-sm hover:text-green-500'>Buy AFWN2025 Tickets</button>
        </Link>
      </nav>



      {/* Mobile Menu Button */}
      <button onClick={toggleMobileMenu} className="lg:hidden text-white focus:outline-none">
        {isMobileMenuOpen ? <CgClose size={25} /> : <CgMenu size={25} />}
      </button>

      {
        isMobileMenuOpen && (
            <div className='w-screen absolute p-8 top-0 left-0 bottom-0 h-screen bg-white flex flex-col justify-between'>
                <div className='w-full justify-between items-center flex'>
                    <div>

                    </div>
                    
                    <Link href={"/"} className='w-fit h-fit'>
                        <motion.h1
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:false, amount:0.3}}
                            className="text-2xl max-lg:w-[320px] max-lg:text-center md:text-3xl text-black font-black uppercase tracking-wider"
                        >Africa Fashion Week Nigeria</motion.h1>
                    </Link>   

                    <button onClick={toggleMobileMenu} className="lg:hidden text-black focus:outline-none">
                        {isMobileMenuOpen ? <CgClose size={30} /> : <CgMenu size={25} />}
                    </button>
                </div>


                {
                    normalNav && 
                    <div className='flex flex-col gap-10'>
                        <motion.p 
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:false, amount:0.3}} 
                            onClick={() => router.push("/about-us")}
                            className='text-5xl cursor-pointer text-black font-light flex gap-8 items-center'>About <MdOutlineArrowForwardIos size={30} className='text-black'/></motion.p>
                        <motion.p 
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:false, amount:0.3}} 
                            className='text-5xl text-black cursor-pointer font-light flex gap-8 items-center' onClick={() => {setApplyNav(!applyNav); setNormalNav(false)}}>Apply <MdOutlineArrowForwardIos size={30} className='text-black'/></motion.p>
                        <motion.p 
                            variants={fadeIn("up", 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:false, amount:0.3}} 
                            onClick={() => router.push("/afwn-2024-gallery")}
                            className='text-5xl text-black font-light flex cursor-pointer gap-8 items-center'>Gallery <MdOutlineArrowForwardIos size={30} className='text-black'/></motion.p>
                    </div>
                }
                {
                    applyNav && 
                    <div className='flex flex-col gap-5 items-start overflow-y-scroll '>
                        <p className='text-xl cursor-pointer text-black font-light flex gap-8 items-center' 
                            onClick={() =>{setNormalNav(true);setApplyNav(false)}}
                        >
                            Back
                        </p>
                        
                        <Link href={"/emerging-fashion-designers-application"}>
                            <p className='text-xl cursor-pointer text-black font-light flex gap-4 items-center'>Emerging-fashion-designers-application <MdOutlineArrowForwardIos size={30} className='text-black'/></p>
                        </Link>
                        <Link href={"/models-casting-form"}>
                            <p className='text-xl cursor-pointer text-black font-light flex gap-8 items-center'>Models Casting Form <MdOutlineArrowForwardIos size={30} className='text-black'/></p>
                        </Link>
                        <Link href={"/partnership-application"}>
                            <p className='text-xl cursor-pointer text-black font-light flex gap-8 items-center'>Partnership <MdOutlineArrowForwardIos size={30} className='text-black'/></p>
                        </Link>
                        <Link href={"/press-media-pass"}>
                            <p className='text-xl cursor-pointer text-black font-light flex gap-8 items-center'>Press & Media Pass <MdOutlineArrowForwardIos size={30} className='text-black'/></p>
                        </Link>
                        <Link href={"/agency-form"}>
                            <p className='text-xl cursor-pointer text-black font-light flex gap-8 items-center'>Agency <MdOutlineArrowForwardIos size={30} className='text-black'/></p>
                        </Link>
                        {/* <Link href={"/reserve-a-seat"}>
                            <p className='text-xl cursor-pointer text-black font-light flex gap-8 items-center'>Reserve A Seat <MdOutlineArrowForwardIos size={30} className='text-black'/></p>
                        </Link> */}
                        <Link href={"/volunteer-application"}>
                            <p className='text-xl cursor-pointer text-black font-light flex gap-8 items-center'>Volunteer Application <MdOutlineArrowForwardIos size={30} className='text-black'/></p>
                        </Link>
                        <Link href={"/afwn-summit"}>
                            <p className='text-xl cursor-pointer text-black font-light flex gap-8 items-center'>AFWN Summit <MdOutlineArrowForwardIos size={30} className='text-black'/></p>
                        </Link>                        
                    </div>
                }

                <motion.div 
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}} 
                    className='flex gap-5 items-center '>
                    <Link href="https://web.facebook.com/Africafashionweeknigeria/?_rdc=1&_rdr#">
                        <FaFacebook size={30} className='text-black cursor-pointer hover:text-green-500'/>            
                    </Link>
                    <Link href={"https://www.instagram.com/afwnigeria/"}>
                        <FaInstagram  size={30} className='text-black cursor-pointer hover:text-green-500'/>
                    </Link>
                    <Link href={"https://twitter.com/africafwl"}>
                        <FaXTwitter size={30} className='text-black cursor-pointer hover:text-green-500'/>
                    </Link>
                    <Link href={"https://www.youtube.com/channel/UC9wCLho35UTbuzbwDfp3XKA"}>
                        <FaYoutube size={30} className='text-black cursor-pointer hover:text-green-500'/>
                    </Link>
                </motion.div>
                

                <Link className='flex gap-4 items-center bg-black w-fit px-6 py-3' href={"https://www.eventbrite.co.uk/o/africa-fashion-week-london-8259623456"}>
                    <motion.button 
                        variants={fadeIn("up", 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once:false, amount:0.3}} 
                        className='text-white text-sm hover:text-green-500'>Buy AFWN2025 Tickets</motion.button>
                </Link>
            </div>
        )
      }
    </header>
  )
}

export default Header