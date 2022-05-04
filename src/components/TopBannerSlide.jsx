import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'; // 추가
import 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]); // 추가

export default function TopBannerSlide(props) {
  const urlArr = props.url;
  if (urlArr.length === 1) {
    return (
      <div className="slidewrap">
        <Swiper
          className="swiper"
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          loop={false}
        >
          {urlArr.map(url => (
            <SwiperSlide className="swiper-slide">
              <div
                style={{
                  height: 400,
                  backgroundImage: `url(${url})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  } else {
    return (
      <div className="slidewrap">
        <Swiper
          className="swiper"
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          loop={true}
        >
          {urlArr.map(url => (
            <SwiperSlide className="swiper-slide">
              <div
                style={{
                  height: 400,
                  backgroundImage: `url(${url})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}
