import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'; // 추가
import 'swiper';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

SwiperCore.use([Navigation, Pagination, Autoplay]); // 추가

export default function Visual() {
  const visualAni = ['.title', '.cup1', '.cup2', '.cup3', '.visual .btn'];
  const reserveAni = '.reserve .reserve_img';
  const favAni = ['.fav_title', '.fav_content'];
  const favAni2 = '.fav_btnWrap';
  const storeAni = [
    '.reserve2_img',
    '.store_exp_img01',
    '.store_exp_img02',
    '.store_exp_img03',
    '.store_exp_img04',
  ];
  const storeAni2 = [
    '.store_exp_text01',
    '.store_exp_text02',
    '.store_exp_btn',
  ];
  //boxRef.current는 현재 참조되고있는 것을 말한다.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    visualAni.map((pos, index) => {
      gsap.fromTo(
        pos,
        { opacity: 0 },
        {
          duration: 1.2,
          delay: 0.5 + index * 0.5,
          ease: 'ease',
          opacity: 1,
        }
      );
    });
    gsap.fromTo(
      reserveAni,
      { opacity: 0 },
      {
        scrollTrigger: '.reserve',
        delay: 0.6,
        duration: 1.2,
        ease: 'ease',
        opacity: 1,
      }
    );
    favAni.map((pos, index) => {
      gsap.fromTo(
        pos,
        { opacity: 0 },
        {
          scrollTrigger: '.reserve',
          duration: 1,
          delay: 0.6 + index * 0.08,
          left: 100 + index * -100,
          ease: 'ease',
          opacity: 1,
        }
      );
    });
    gsap.fromTo(
      favAni2,
      { opacity: 0 },
      {
        scrollTrigger: '.reserve',
        delay: 0.3,
        duration: 1.3,
        ease: 'ease',
        opacity: 1,
      }
    );
    gsap.fromTo(
      storeAni,
      { opacity: 0 },
      {
        scrollTrigger: '.reserve2',
        duration: 1.5,
        opacity: 1,
      }
    );
    storeAni2.map((pos, index) => {
      gsap.fromTo(
        pos,
        { opacity: 0, x: 300 },
        {
          scrollTrigger: '.reserve2',
          x: 0,
          duration: 1.5,
          delay: 0.8 + index * 0.2,
          opacity: 1,
        }
      );
    });
  }, []);

  return (
    <>
      <div className="visual">
        <div className="inner">
          <div className="title">
            <img src="images/visual_title.png" alt="visualtitle" />
          </div>
          <div className="cup1">
            <img src="images/visual_cup1.png" alt="visual1" />
          </div>
          <div className="cup2">
            <img src="images/visual_cup2.png" alt="visual2" />
          </div>
          <div className="cup3">
            <img src="images/visual_cup3.png" alt="visual3" />
          </div>
          <div className="btn btn--slogan" style={{ opacity: 0 }}>
            <a href="javascript:void(0)">자세히 보기</a>
          </div>
        </div>
      </div>
      <div className="notice">
        <div className="notice-line">
          <div className="bg-left"></div>
          <div className="bg-right"></div>
          <div className="inner">
            <div className="inner__left">
              <h2>공지사항</h2>
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
              <a href="javascript:void(0)" className="notice-line__more">
                <div className="material-icons">add_circle</div>
              </a>
            </div>
            <div className="inner__right">
              <a>
                <h2>스타벅스 프로모션</h2>
                <div className="toggle-promotion">
                  <img
                    src="images/outline_expand_circle_down_black_48dp.png"
                    alt="promotion"
                    className="material-icons"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="new-rewards_wrap">
        <div className="inner">
          <div className="new-rewards_logo">
            <img src="images/rewards-logo.png" alt="rewardsImg" />
          </div>
          <div className="new-rewards_conts">
            <div className="new-rewards_info">
              <h2>
                스타벅스만의 특별한 혜택, <strong>스타벅스 리워드</strong>
              </h2>
              <p>
                <strong>스타벅스 회원이세요?</strong> 로그인을 통해 나만의
                리워드를 확인해보세요.
                <br />
                <strong>스타벅스 회원이 아니세요?</strong> 가입을 통해 리워드
                혜택을 즐기세요.
              </p>
            </div>
            <div className="btn-signin-group">
              <a href="javascript:void(0)" className="btn btn--signin_join">
                회원가입
              </a>
              <a href="javascript:void(0)" className="btn btn--signin_login">
                로그인
              </a>
            </div>
            <div className="new-rewards_gift">
              <p>
                회원 가입 후, 스타벅스 e-Gift Card를
                <strong>
                  "나에게 선물하기"로 구매하시고, 편리하게 등록하세요!
                </strong>
                <br /> 카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를
                하시면 무료 음료쿠폰을 드립니다!
              </p>
            </div>
            <div className="btn-gift">
              <a href="javasacript:void(0)">e-Gift Card 선물하기</a>
            </div>
          </div>
        </div>
      </div>
      <div className="reserve">
        <div className="inner">
          <div className="reserve_title">
            <img src="images/reserve_title.png" alt="reserveTitle" />
          </div>
          <div className="reserve_detail">
            <a href="javascript:void(0)" className="btn btn--brown">
              자세히 보기
            </a>
          </div>
          <div className="reserve_img">
            <img src="images/reserve_bg.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="favWrap">
        <div className="inner">
          <div className="fav_title">PICK YOUR FAVORITE</div>
          <div className="fav_content">
            다양한 메뉴를 스타벅스에서 즐겨보세요. 스타벅스만의 특별함을 경험할
            수 있는 최상의 선택 음료, 스타벅스 커피와 완벽한 어울림을 자랑하는
            푸드, 다양한 시도와 디자인으로 가치를 더하는 상품, 소중한 사람에게
            마음을 전하는 가장 좋은 방법 스타벅스 카드
          </div>
          <div className="fav_img">
            <img src="images/fav_img.png" alt="favImg" />
          </div>
          <Link to="/menu">
            <div className="fav_btnWrap">
              <a href="javascript:void(0)" className="btn btn--white">
                자세히 보기
              </a>
            </div>
          </Link>
        </div>
      </div>

      <div className="reserve2">
        <div className="inner">
          <div className="reserve2_title">
            <img src="images/reserve2_text_pc.png" alt="reservetext" />
          </div>
          <div className="reserve2_img">
            <img src="images/reserve2_visual_pc.png" alt="reserveImg" />
          </div>
          <div className="reserve2_btn_wrap">
            <div className="reserve2_btnWrap">
              <a href="javascript:void(0)" className="btn btn--black">
                자세히 보기
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="storeExp">
        <div className="inner">
          <div className="store_exp_img01"></div>
          <div className="store_exp_img02"></div>
          <div className="store_exp_img03"></div>
          <div className="store_exp_img04"></div>
          <div className="store_exp_text01"></div>
          <div className="store_exp_text02"></div>
          <div className="store_exp_btn">
            <a href="javascript:void(0)" className="btn btn--black">
              매장찾기
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
