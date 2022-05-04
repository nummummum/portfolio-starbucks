import { useEffect } from 'react';
import TemplateL from '../TemplateL';
import TemplateR from '../TemplateR';
import TopBannerNotice from '../TopBannerNotice';
import TopBannerTop from '../TopBannerTop';

export default function MenuRespon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TopBannerTop name="RESPONSIBILITY" />
      <TopBannerNotice />
      <TemplateL
        bg="responsibility/responsibility05.jpg"
        txt="responsibility/responsibility05_txt.png"
        btn="black"
      />
      <TemplateR
        bg="responsibility/responsibility01.jpg"
        txt="responsibility/responsibility01_txt.png"
        btn="white"
      />
      <TemplateL
        bg="responsibility/responsibility02.jpg"
        txt="responsibility/responsibility02_txt.png"
        btn="black"
      />
      <TemplateR
        bg="responsibility/responsibility03.jpg"
        txt="responsibility/responsibility03_txt.png"
        btn="white"
      />
      <TemplateL
        bg="responsibility/responsibility04.jpg"
        txt="responsibility/responsibility04_txt.png"
        btn="black"
      />

      <div className="box">
        <div className="btn">
          <a className="btn--brown">assda</a>
        </div>
      </div>
    </>
  );
}
