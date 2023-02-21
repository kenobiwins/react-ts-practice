import { FC } from 'react';
import { EffectFade, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const images = [
  {
    path: 'https://img.freepik.com/free-photo/wooden-picture-frame-shelf-with-cactus_53876-134302.jpg',
  },
  {
    path: 'https://img.freepik.com/premium-photo/texture-dark-blue-concrete-wall-floor-with-smoke-fog-mist_334678-164.jpg?w=1060',
  },
];

export const Slider: FC = () => {
  return (
    <Swiper
      modules={[EffectFade, Pagination, A11y, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
      effect={'fade'}
      speed={800}
      loop
      spaceBetween={50}
      slidesPerView={1}
      //   onSlideChange={() => console.log('slide change')}
      //   onSwiper={swiper => console.log(swiper)}
    >
      {images.map((el, i) => {
        return (
          <SwiperSlide key={i}>
            <img
              style={{ width: '100%', height: 500 }}
              src={el.path}
              alt={'hello'}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
