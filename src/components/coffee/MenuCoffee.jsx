import { useEffect } from 'react';
import TemplateL from '../TemplateL';
import TemplateR from '../TemplateR';
import TopBannerNotice from '../TopBannerNotice';
import TopBannerSlide from '../TopBannerSlide';
import TopBannerTop from '../TopBannerTop';

export default function MenuCoffee() {
  const urlarr = [
    'images/topbannercoffeeslide1.jpg',
    'images/topbannercoffeeslide2.jpg',
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TopBannerTop name="COFFEE" />
      <TopBannerSlide url={urlarr} />
      <TopBannerNotice />
      <TemplateR
        bg="coffee/coffee_choice_wrap_bg.jpg"
        txt="coffee/coffee_choice_txt.png"
        btn="white"
      />
      <TemplateL
        bg="coffee/coffee_reserve_wrap_bg.jpg"
        txt="coffee/coffee_reserve_txt.png"
        btn="black"
      />
      <TemplateR
        bg="coffee/coffee_espresso_wrap_bg.jpg"
        txt="coffee/coffee_espresso_txt.png"
        btn="white"
      />
      <TemplateL
        bg="coffee/coffee_best_wrap_bg.jpg"
        txt="coffee/coffee_best_txt.png"
        btn="black"
      />
      <TemplateR
        bg="coffee/coffee_hs_wrap_bg.jpg"
        txt="coffee/coffee_hs_txt.png"
        btn="white"
      />
    </>
  );
}
