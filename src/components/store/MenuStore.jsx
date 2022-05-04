import { useEffect } from 'react';
import TemplateL from '../TemplateL';
import TemplateR from '../TemplateR';
import TopBannerNotice from '../TopBannerNotice';
import TopBannerTop from '../TopBannerTop';

export default function MenuStore() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TopBannerTop name="STORE" />
      <TopBannerNotice />
      <TemplateL
        bg="store/store_bn2_img01.jpg"
        txt="store/store_bn2_txt01.png"
        btn="black"
      />
      <TemplateR
        bg="store/store_bn3_img01.jpg"
        txt="store/store_bn3_txt01.png"
        btn="white"
      />
      <TemplateL
        bg="store/store_bn4_img01.jpg"
        txt="store/store_bn4_txt01.png"
        btn="black"
      />
    </>
  );
}
