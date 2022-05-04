import { useEffect } from 'react';
import TemplateL from '../TemplateL';
import TemplateR from '../TemplateR';
import TopBannerNotice from '../TopBannerNotice';
import TopBannerSlide from '../TopBannerSlide';
import TopBannerTop from '../TopBannerTop';

export default function MenuNews() {
  const urlarr = [
    'images/topbannernewsslide1.jpg',
    'images/topbannernewsslide2.jpg',
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TopBannerTop name="WHAT'S NEW" />
      <TopBannerSlide url={urlarr} />
      <TopBannerNotice />
      <TemplateR
        bg="whatsnew/promotion_bimg1.jpg"
        txt="whatsnew/promotion_btxt1.png"
        btn="white"
      />
      <TemplateL
        bg="whatsnew/promotion_bimg2.jpg"
        txt="whatsnew/promotion_bimg2.png"
        btn="black"
      />
      <TemplateR
        bg="whatsnew/promotion_bimg3.jpg"
        txt="whatsnew/promotion_btxt3.png"
        btn="white"
      />
      <TemplateL
        bg="whatsnew/promotion_bimg4.jpg"
        txt="whatsnew/promotion_bimg4.png"
        btn="black"
      />
    </>
  );
}
