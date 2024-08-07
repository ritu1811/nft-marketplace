import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// Import required modules
import users from '../../../public/data/users'
import AvatarCard from './AvatarCard'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function AvatarSlider() {
  return (
    <div
      className='text-white h-full max-w-6xl container '
    >
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'
      >
        {users.map((user, idx) => {
          return (
            <SwiperSlide key={user.name}>
              <div>
                <AvatarCard
                  img={user.img}
                  name={user.name}
                  handle={user.handle}
                  gradient={user.gradient}
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default AvatarSlider