import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TemplateL from '../TemplateL';
import TemplateR from '../TemplateR';
import TopBannerNotice from '../TopBannerNotice';
import TopBannerSlide from '../TopBannerSlide';
import TopBannerTop from '../TopBannerTop';

export default function MenuMenu() {
  const urlarr = ['images/topbannermenuslide1.jpg'];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TopBannerTop name="MENU" />
      <TopBannerSlide url={urlarr} />
      <TopBannerNotice />
      <TemplateR
        bg="menu/menu_bimg1.jpg"
        txt="menu/menu_btxt1.png"
        btn="white"
      />
      <TemplateL
        bg="menu/menu_bimg2.jpg"
        txt="menu/menu_btxt2.png"
        btn="black"
      />
      <TemplateR
        bg="menu/menu_bimg3.jpg"
        txt="menu/menu_btxt3.png"
        btn="white"
      />
      <TemplateL
        bg="menu/menu_bimg4.jpg"
        txt="menu/menu_btxt4.png"
        btn="black"
      />
      <TemplateR
        bg="menu/menu_teavana_bg1.jpg"
        txt="menu/teavana_txt.png"
        btn="black"
      />
    </>
  );
}
