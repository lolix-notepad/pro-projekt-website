import Link from 'next/link'
import Image from 'next/image'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade])

export default function Navbar() {
  return (
      <nav className="relative w-full h-screen flex">
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-screen"
          allowTouchMove={false}
          loop
          autoplay={{ delay: 4000 }}
          speed={1500}
          disableOnInteraction={false}
        >



          <SwiperSlide className="text-xl text-white text-center text-bold bg-red-400 w-screen h-auto">
            <div className="w-full h-screen absolute bgk-yellow-200 z-0">
              <Image className="" layout="fill" objectFit="cover" alt="cryptocurrency" src="/Slider-Cryptocurrency.jpg" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="text-xl text-white text-center text-bold bg-blue-400 w-screen h-auto">Slide 2</SwiperSlide>
          <SwiperSlide className="text-xl text-white text-center text-bold bg-yellow-400 w-screen h-auto">Slide 3</SwiperSlide>
        </Swiper>
      </nav>
    )
}
