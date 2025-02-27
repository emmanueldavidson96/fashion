import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function page() {
  return (
    <div className='w-screen h-fit bg-black'>
        
        <Header />

        <div className='w-full flex items-center justify-center h-fit bg-black py-24 mt-[80px]'>
            <div className='bg-black h-fit flex max-lg:flex-col-reverse max-lg:gap-6 justify-between w-[90%] mx-auto '>
                <div className='flex flex-col gap-5 lg:w-[45%] w-full '>
                    <h2 className='lg:text-7xl text-3xl text-white font-black'>About</h2>
                    <p className='text-white leading-8 text-sm lg:text-base'>
                    In 2011, African Fashion Week London was created by Queen Ronke Ademiluyi-Ogunwusi to increase the visibility, 
                    awareness and sustainability of African and Black fashion brands through catwalk showcases, exhibitions and education.
                    </p>
                    <p className='text-white leading-8 text-sm lg:text-base'>
                    Queen Ronke is also the founder of Africa Fashion Week London, the Adire Oodua Textile Hub in Nigeria and co-founder of Africa Fashion Week Brazil.
                    </p>
                    <p className='text-white leading-8 text-sm lg:text-base'>
                    Our annual event is the world's largest, longest-running showcase of African and African-inspired fashion and design. 
                    </p>
                    <p className='text-white leading-8 text-sm lg:text-base'>
                    We have hosted 14 editions of catwalk and exhibition events, and have curated and participated in other major events.
                    </p>
                    <p className='text-white leading-8 text-sm lg:text-base'>
                    We have hosted 1700 emerging designers and exhibitors from across the globe including Africa, Europe and America to 90,000 visitors including buyers, retailers and industry professionals.
                    </p>
                </div>

                <div className='lg:w-[45%] w-full h-fit flex items-center justify-center'>
                    <img 
                        src={'https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740539471/Queen_Ronke_by_Photographer_Kelechi_Amadi_Obi_trsxqg.jpg'}
                        alt=''
                        className='lg:w-[70%] w-[85%] h-auto object-cover'
                    />
                </div>
            </div>
        </div>
        


        {/* What Sets Us Apart */}
        <div className='w-full flex items-center justify-center h-fit bg-white py-24'>
            <div className='bg-white h-fit flex justify-between w-[90%] mx-auto max-lg:flex-col max-lg:gap-6'>
                <div className='lg:w-[45%] w-full h-fit flex items-center justify-center'>
                    <img 
                        src={'https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740071811/IMG_8909-Pano_1_er4nv4.jpg'}
                        alt=''
                        className='w-[100%] h-auto object-cover'
                    />
                </div>
                <div className='flex flex-col gap-5 lg:w-[45%] w-full'>
                    <h2 className='lg:text-5xl text-2xl text-black font-black'>What Sets Us Apart</h2>
                    <p className='text-black leading-8 text-sm lg:text-base'>
                    Africa Fashion Week Nigeria is seen as the beacon of African fashion and design outside the African continent.  We highlight and nurture sustainability, social enterprise and entrepreneurship through international visibility. 
                    </p>
                    <p className='text-black leading-8 text-sm lg:text-base'>
                    We support market expansion of indigenous craftsmanship, traditional textile manufacturing, local business development and cross-cultural engagement.
                    </p>
                    <p className='text-black leading-8 text-sm lg:text-base'>
                    Over the past 15 years we have built a significant track record in working collaboratively with the African Diaspora.
                    </p>                
                </div>
            </div>
        </div>

        {/* Who We Represent */}
        <div className='w-full flex items-center justify-center h-fit bg-black py-24'>
            <div className='bg-black h-fit flex justify-between w-[90%] mx-auto max-lg:flex-col-reverse max-lg:gap-8'>
                <div className='flex flex-col gap-5 lg:w-[45%] w-full'>
                    <h2 className='lg:text-5xl text-2xl text-white font-black'>Who We Represent</h2>
                    <p className='text-white leading-8 text-sm lg:text-base'>
                    Our primary market is emerging African heritage designers and SMEs who are typically ignored by the major fashion events and, if not, are tokenised. 
                    </p>
                    <p className='text-white leading-8 text-sm lg:text-base'>
                    At AFWN, we make sure our designers are afforded the same promotional opportunities, access to buyers and showcased in a world-class venue. We support and nurture the sustainable design and apparel manufacturing industry. Our goal is to make African-inspired fashion, not only a high-street staple but also a force to rival established fashion houses. 
                    </p>
                    <p className='text-white leading-8 text-sm lg:text-base'>
                    Similarly, we make sure 90% of our workforce is made up of POC, fashion students and marginalised communities, giving the experience of working for a major fashion showcasing event.
                    </p>                
                </div>
                <div className='lg:w-[45%] w-full h-fit flex items-center justify-center'>
                    <img 
                        src={'https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739432997/IMG_5046_nhm8tb.jpg'}
                        alt=''
                        className='w-[100%] h-auto object-cover'
                    />
                </div>
            </div>
        </div>

        <Footer />


    </div>
  )
}
