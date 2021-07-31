import Image from 'next/image'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade])

const imageLoader = ({ src }) => {
    return `https://github.com/`
}

export default function Carousel() {
  return (
      <div className="relative w-full h-screen flex">
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-screen"
          allowTouchMove={false}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={1500}
        >
          <SwiperSlide 
            className="text-xl text-white text-center text-bold bg-red-400 w-screen h-auto"
           >
            <div className="w-full h-screen absolute bgk-yellow-200 z-0"> 
              <Image className="" 
                loader={imageLoader}
                layout="fill" 
                objectFit="cover" 
                alt="cryptocurrency" 
                src="/slider-cryptocurrency.jpg"
               />
            </div>
          </SwiperSlide>
          <SwiperSlide 
            className="text-xl text-white text-center text-bold bg-red-400 w-screen h-auto"
           >
            <div className="w-full h-screen absolute bgk-yellow-200 z-0"> 
              <Image className="" 
                loader={imageLoader}
                layout="fill" 
                objectFit="cover" 
                alt="cryptocurrency" 
                src="/slider-remote-work.jpeg"
               />
            </div>
          </SwiperSlide>
          <SwiperSlide 
            className="text-xl text-white text-center text-bold bg-red-400 w-screen h-auto"
           >
            <div className="w-full h-screen absolute bgk-yellow-200 z-0"> 
              <Image className="" 
                loader={imageLoader}
                layout="fill" 
                objectFit="cover" 
                alt="cryptocurrency" 
                src="/slider-freelancer-work.webp"
               />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    )
}
