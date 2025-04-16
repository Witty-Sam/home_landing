import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

 ImageSlider = () => (
  <Swiper
    modules={[Autoplay]}
    slidesPerView={3}
    loop={true}
    autoplay={{ delay: 0, disableOnInteraction: false }}
    speed={4000}
    spaceBetween={20}
    grabCursor={true}
  >
    <SwiperSlide><text className="text-[5px]">We are backed by</text></SwiperSlide>
    <SwiperSlide><img src="/.jpg" alt="1" /></SwiperSlide>
    <SwiperSlide><img src="/.jpg" alt="2" /></SwiperSlide>
    <SwiperSlide><img src="/.jpg" alt="3" /></SwiperSlide>
  </Swiper>
);

export default ImageSlider;