"use client";
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

const gallery2024 = [
    {
        id:1,
        imageCategory: "exhibition",
        imageFiles:[
            {
                id:1,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048322/IMG_2906_fagcss.jpg"
            },
            {
                id:2,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048339/IMG_4069_deg7so.jpg"
            },
            {
                id:3,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048337/IMG_3630_szetkw.jpg"
            },
            {
                id:4,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048336/IMG_3623_lx4ykx.jpg"
            },
            {
                id:5,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048333/IMG_3616_hgbl5q.jpg"
            },
            {
                id:6,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048319/IMG_0553_gtodxb.jpg"
            },
            {
                id:7,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048322/IMG_3603_gxu3et.jpg"
            },
            {
                id:8,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048322/IMG_2887_jlsuv3.jpg"
            },
            {
                id:9,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048322/IMG_2972_u2skki.jpg"
            },
            {
                id:10,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048322/IMG_2977_dsxr4z.jpg"
            },
            {
                id:11,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048321/IMG_2239_qoy1yc.jpg"
            },
            {
                id:12,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048321/IMG_2250_vhurki.jpg"
            },
            {
                id:13,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048321/IMG_2873_r5lpvd.jpg"
            },
            {
                id:14,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048320/IMG_1324_bbxkak.jpg"
            },
            {
                id:15,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048320/IMG_2096_rsib4w.jpg"
            },
            {
                id:16,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048320/IMG_2260_wa3ywt.jpg"
            },
            {
                id:17,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048320/IMG_1518_qmldzq.jpg"
            },
            {
                id:18,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048320/IMG_1331_h7x4zz.jpg"
            },
            {
                id:19,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048319/IMG_1542_urbmod.jpg"
            },
            {
                id:20,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048319/IMG_0536_kufdnu.jpg"
            },
            {
                id:21,
                img: "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048319/IMG_0582_ybtiqt.jpg"
            },
        ]
    },
    {
        id:2,
        imageCategory: "guests",
        imageFiles:[
            {
                id:1,
                img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740054696/IMG_2691_1_gj1wda.jpg"
            },
            {
                id:1,
                img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740054693/IMG_8761_1_fgddip.jpg"
            },
            {
                id:1,
                img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740054692/IMG_1218-Pano_1_b2gu9w.jpg"
            },
            {
                id:1,
                img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740054689/IMG_0523_1_dx3zdz.jpg"
            }
        ]
    },
    {
        id:3,
        imageCategory: "backstage",
        imageFiles:[
            {
                id:1,
                img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740055727/IMG_2434_1_dzudvt.jpg"
            },
            {
                id:2,
                img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740055724/IMG_1253_1_1_rjm7sk.jpg"
            },
            {
                id:3,
                img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740055723/IMG_1249_1_fumvfv.jpg"
            }
        ]
    },
    {
        id:4,
        imageCategory: "exhibition",
        imageFiles:[
            {
                id:1,
                img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740056190/IMG_5042_1_y47yya.jpg"
            },
            {
                id:2,
                img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740056188/IMG_5053_1_ei20gn.jpg"
            },
            {
                id:3,
                img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740056188/IMG_5097_1_vbgczy.jpg"
            },
            {
                id:4,
                img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740056188/IMG_1271_1_agf61s.jpg"
            },

        ]
    },
    {
        id:5,
        imageCategory: "fitting",
        imageFiles:[
            {
                id:1,
                img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740057012/Fittings_49_ki8pfs.jpg"
            },
            {
                id:2,
                img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740057002/IMG_9820_vc9xrl.jpg"
            },
            {
                id:3,
                img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740057000/IMG_9832_h26esz.jpg"
            },
            {
                id:4,
                img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740057001/IMG_9828_nptto0.jpg"
            },

        ]
    }

]

export default function page() {
    const [galleryImg, setGalleryImg] = useState<string | null>("runway")

  return (
    <div className='h-fit w-screen'>
        <Header />
        <div className='w-screen h-[350px] pt-24 bg-black flex relative items-center justify-center overflow-hidden'>
            <h2 className='lg:text-5xl text-xl text-center max-w-[90%] mx-auto uppercase text-white font-extrabold absolute bottom-24 '>AFWN 2024 Gallery Highlights</h2>
        </div>
        
        <div className='h-[100px] bg-[#141414] flex items-center justify-center gap-8'>
            <h4 className={`${galleryImg === "runway" ? "text-green-500" :"text-white"} max-lg:text-xs cursor-pointer`} onClick={() => setGalleryImg("runway")}>Runway</h4>
            <h4 className={`${galleryImg === "exhibition" ? "text-green-500" :"text-white"} max-lg:text-xs cursor-pointer`} onClick={() => setGalleryImg("exhibition")}>Exhibition</h4>
            <h4 className={`${galleryImg === "guests" ? "text-green-500" :"text-white"} max-lg:text-xs cursor-pointer`} onClick={() => setGalleryImg("guests")}>Guests</h4>
            <h4 className={`${galleryImg === "fitting" ? "text-green-500" :"text-white"} max-lg:text-xs cursor-pointer`} onClick={() => setGalleryImg("fitting")}>Fitting</h4>
            <h4 className={`${galleryImg === "backstage" ? "text-green-500" :"text-white"} max-lg:text-xs cursor-pointer`} onClick={() => setGalleryImg("backstage")}>Backstage</h4>
        </div>
        
        <div className='bg-white flex items-center h-fit py-24'>
            <div className='w-[95%] mx-auto flex flex-wrap justify-between gap-6'>
                
                {
                    galleryImg === "runway" && gallery2024[0].imageFiles.map((gallery, index) => {
                        return (
                            <div className='lg:w-[23%] w-[46%] h-[500px] max-lg:h-[350px] overflow-hidden' key={index}>
                                <img
                                    src={gallery.img}
                                    alt=''
                                    className='w-full h-full object-cover hover:scale-150 duration-500 transition-all '
                                />
                            </div>
                        )
                    })
                }

                {
                    galleryImg === "guests" && gallery2024[1].imageFiles.map((gallery, index) => {
                        return (
                            <div className='lg:w-[32%] w-[100%]  h-[400px] max-lg:h-[350px] overflow-hidden' key={index}>
                                <img
                                    src={gallery.img}
                                    alt=''
                                    className='w-full h-full object-cover hover:scale-125 duration-500 transition-all '
                                />
                            </div>
                        )
                    })
                } 

                {
                    galleryImg === "backstage" && gallery2024[2].imageFiles.map((gallery, index) => {
                        return (
                            <div className='lg:w-[32%] w-[100%]  h-[400px] max-lg:h-[350px] overflow-hidden' key={index}>
                                <img
                                    src={gallery.img}
                                    alt=''
                                    className='w-full h-full object-cover hover:scale-125 duration-500 transition-all '
                                />
                            </div>
                        )
                    })
                } 

                {
                    galleryImg === "exhibition" && gallery2024[3].imageFiles.map((gallery, index) => {
                        return (
                            <div className='lg:w-[32%] w-[100%]  h-[400px] max-lg:h-[350px] overflow-hidden' key={index}>
                                <img
                                    src={gallery.img}
                                    alt=''
                                    className='w-full h-full object-cover hover:scale-125 duration-500 transition-all '
                                />
                            </div>
                        )
                    })
                } 

                {
                    galleryImg === "fitting" && gallery2024[4].imageFiles.map((gallery, index) => {
                        return (
                            <div className='lg:w-[32%] w-[100%]  h-[400px] max-lg:h-[350px] overflow-hidden' key={index}>
                                <img
                                    src={gallery.img}
                                    alt=''
                                    className='w-full h-full object-cover hover:scale-125 duration-500 transition-all '
                                />
                            </div>
                        )
                    })
                }             
            </div>
        </div>
        <Footer />
    </div>
  )
}
