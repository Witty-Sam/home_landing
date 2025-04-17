import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

 const ImageSlider = () => (
  <Swiper
    modules={[Autoplay]}
    slidesPerView="auto"
    breakpoints={{
        640: {slidesPerview: "auto"},
        768: {slidesPerView: "auto"},
        1024: {slidesPerView: "auto"},
    }}
    loop={true}
    autoplay={{ delay: 1    , disableOnInteraction: false }}
    speed={4000}
    spaceBetween={5}
    grabCursor={false}
  >
    <SwiperSlide><strong className="text-[20px] text-left text-[600] leading-[1.2]">We are<br/> backed by</strong   ></SwiperSlide>
    <SwiperSlide style={{ width: '20px' }}><img src="./images/techStars.svg" alt="Techstars" /></SwiperSlide>
    <SwiperSlide style={{ width: '20px' }}><img src="./images/resilience.svg" alt="Resilience 7" /></SwiperSlide>
    <SwiperSlide style={{ width: '20px' }}><img src="./images/voltron.svg" alt="Voltron" /></SwiperSlide>
    <SwiperSlide style={{ width: '20px' }}><img src="./images/magicFund.svg" alt="Magic Fund" /></SwiperSlide>
    <SwiperSlide style={{ width: '20px' }}><img src="./images/firstCircle.svg" alt="First Circle" /></SwiperSlide>
    <SwiperSlide style={{ width: '20px' }}><img src="./images/oak.svg" alt="The Oak Capital" /></SwiperSlide>
  </Swiper>
);

export default ImageSlider;