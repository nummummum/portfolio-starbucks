import { useLocation } from 'react-router-dom';
import TopBannerTop from '../TopBannerTop';
import AlignView from './AlignView';
import ProductMake from './ProductMake';
export default function CoffeeProduct() {
  const location = useLocation();
  const on1 = location.state.on1;
  const on2 = location.state.on2;
  const on3 = location.state.on3;
  return (
    <>
      <div className="coffeewrap">
        <div className="inner">
          <TopBannerTop name="커피" />
          <AlignView on1={on1} on2={on2} on3={on3} />
          {/* 분류 보기 */}
          <div className="title_wrap">
            <div className="title_blond">
              <img src="../images/coffee/icon_blond.png" alt="" />
              <p>블론드 로스트</p>
            </div>
            <ul className="productlist">
              <li>
                <ProductMake
                  url="veranda_blend.jpg"
                  title="베란다 블렌드 250g"
                />
              </li>
            </ul>
            <div className="title_medium">
              <img src="../images/coffee/icon_medium.png" alt="" />
              <p>미디엄 로스트</p>
            </div>
            <ul className="productlist">
              <li>
                <ProductMake
                  url="Decaf_House_Blend_250g.jpg"
                  title="디카페인 하우스 블렌드 250g"
                />
              </li>
              <li>
                <ProductMake url="Ethiopia_250g.jpg" title="에티오피아 250g" />
              </li>
              <li>
                <ProductMake
                  url="Byuldabang_Blend_250g.jpg"
                  title="별다방 블렌드 250g"
                />
              </li>
              <li>
                <ProductMake
                  url="Pike_Place_Roast 250g.jpg"
                  title="파이크 플레이스™ 로스트 250g"
                />
              </li>
              <li>
                <ProductMake
                  url="House_Blend_250g.jpg"
                  title="하우스 블렌드 250g"
                />
              </li>
              <li>
                <ProductMake url="Kenya_250g.jpg" title="케냐 250g" />
              </li>
              <li>
                <ProductMake url="Colombia_250g.jpg" title="콜롬비아 250g" />
              </li>
            </ul>
            <div className="title_dark">
              <img src="../images/coffee/icon_dark.png" alt="" />
              <p>다크 로스트</p>
            </div>
            <ul className="productlist">
              <li>
                <ProductMake
                  url="Spring_Season_Blend_250g.jpg"
                  title="스프링 시즌 블렌드 250g"
                />
              </li>
              <li>
                <ProductMake
                  url="Espresso_Roast_250g.jpg"
                  title="에스프레소 로스트 250g"
                />
              </li>
              <li>
                <ProductMake url="Sumatra_250g.jpg" title="수마트라 250g" />
              </li>
              <li>
                <ProductMake
                  url="Caffe_Verona_250g.jpg"
                  title="카페 베로나 250g"
                />
              </li>
            </ul>
            <div className="title_reserve">
              <img src="../images/coffee/icon_reserve_bean.png" alt="" />
              <p>리저브 원드</p>
            </div>
            <ul className="productlist">
              <li>
                <ProductMake
                  url="Sun_Dried_Ethiopia_Gera_Farm.jpg"
                  title="선 드라이드 에티오피아 게라 팜"
                />
              </li>
              <li>
                <ProductMake
                  url="Nicaragua_Maracaturra.jpg"
                  title="니카라과 마라카투라"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
