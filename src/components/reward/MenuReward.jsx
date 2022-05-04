import { useEffect } from 'react';
import TemplateL from '../TemplateL';
import TemplateR from '../TemplateR';
import TopBannerNotice from '../TopBannerNotice';
import TopBannerTop from '../TopBannerTop';

export default function MenuReward() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TopBannerTop name="STARBUCKS REWARD"></TopBannerTop>
      <TopBannerNotice />
    </>
  );
}
