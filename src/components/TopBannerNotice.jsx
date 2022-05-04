import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'; // 추가
import 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]); // 추가

export default function TopBannerNotice() {
  return (
    <div className="banner-notice">
      <div className="notice-line">
        <div className="bg-left"></div>
        <div className="bg-right"></div>
        <div className="inner">
          <div className="inner__left">
            <h2>보도자료</h2>
            <Swiper
              className="swiper"
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ delay: 2000 }}
              loop={true}
              direction={'vertical'}
            >
              <SwiperSlide className="swiper-slide">
                <a href="javascript:void(0)">시스템 개선 및 점검 안내</a>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <a href="javascript:void(0)">
                  스타벅스 카드 유효기간 관련 안내
                </a>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <a href="javascript:void(0)">
                  영상정보처리기기 운영관리 방침 개정 안내
                </a>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <a href="javascript:void(0)">개인정보처리방침 개정 안내</a>
              </SwiperSlide>
            </Swiper>
            <a href="javascript:void(0)" class="notice-line__more">
              <div class="material-icons">add_circle</div>
            </a>
          </div>
          <div className="inner__right">
            <img src="images/useInfo_txt.png" alt="" />
            <a href="javascript:void(0)" class="notice-line__more">
              <div class="material-icons">add_circle</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
