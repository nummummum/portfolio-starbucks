import { useLocation } from 'react-router-dom';
import TopBannerTop from '../TopBannerTop';
import coffeedata from '../../db/productlist.json';
import { useEffect } from 'react';

export default function ProductView() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const pimg = '/images/coffee/' + location.state.pimg;
  const ptxt = location.state.ptxt;
  const success = coffeedata.type;
  var productarray = {
    name: '',
    e_name: '',
    sub_desc: '',
    coffee_type: '',
    coffee_type_desc: '',
    coffee_desc: '',
    design_story: '',
    coffee_tasting: '',
    coffee_info: {
      Tasting_Notes: '',
      Enjoy_with: '',
      Processing_Method: '',
      Body: '',
      Acidity: '',
    },
  };
  if (success === 'success') {
    coffeedata['product-list'].map(product => {
      if (ptxt === product.name) {
        productarray = product;
        console.log(productarray);
      }
    });
  }

  return (
    <>
      <TopBannerTop name="스타벅스 원두" />
      <div className="product-view-wrap">
        <div className="inner">
          <div className="view-main">
            <div className="main-image">
              {/* 제품이미지 */}
              <img src={pimg} alt="" />
            </div>
            <div className="main-desc">
              <div className="main-title">
                <div className="title-k">{productarray.name}</div>
                <div className="title-e">{productarray.e_name}</div>
                <div className="btnwrap">
                  <a href="javascript:void(0)" className="btn btn--signin_join">
                    나만의 상품으로 등록
                  </a>
                </div>
              </div>
              <div className="coffee-favor">
                <p className="favor-desc">{productarray.sub_desc}</p>
                {productarray.coffee_type.length !== 0 ? (
                  <div className="favor-type">
                    <div className="title_blond">
                      {productarray.coffee_type === '블론드 로스트' ? (
                        <img src="/images/coffee/icon_blond.png" alt="" />
                      ) : null}
                      {productarray.coffee_type === '미디엄 로스트' ? (
                        <img src="/images/coffee/icon_medium.png" alt="" />
                      ) : null}
                      {productarray.coffee_type === '다크 로스트' ? (
                        <img src="/images/coffee/icon_dark.png" alt="" />
                      ) : null}
                      <p>{productarray.coffee_type}</p>
                      <p>{productarray.coffee_type_desc}</p>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="coffee-etc">
                {/* 커피의 속성 알아보기 */}
                <img src="/images/product_investigate_img01.jpg" alt="" />
                {/* 커피 추출방법 알아보기 */}
                <img src="/images/product_investigate_img02.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="horizen-bar" />
          <div className="view-sub">
            <div className="sub-notice">
              <div className="notice-title">
                <p>{productarray.coffee_desc}</p>
              </div>
              <div className="notice-context">
                <div className="context-design-wrap">
                  <img src="/images/productInvestigate_img01.jpg" alt="" />
                  <h2>디자인 스토리</h2>
                  <p>{productarray.design_story}</p>
                </div>
                <div className="context-tasting">
                  <img src="/images/productInvestigate_img02.jpg" alt="" />
                  <h2>커피 테이스팅 노트</h2>
                  <p>{productarray.coffee_tasting}</p>
                </div>
              </div>
            </div>
            <div className="sub-info">
              <div className="info-wrap">
                <ul>
                  {productarray.coffee_info.Tasting_Notes.length !== 0 ? (
                    <li>
                      <div className="info-title">Testing Notes</div>
                      <div className="info-desc">
                        {productarray.coffee_info.Tasting_Notes}
                      </div>
                    </li>
                  ) : null}
                  {productarray.coffee_info.Enjoy_with.length !== 0 ? (
                    <li>
                      <div className="info-title">Enjoy with</div>
                      <div className="info-desc">
                        {productarray.coffee_info.Enjoy_with}
                      </div>
                    </li>
                  ) : null}
                  {productarray.coffee_info.Processing_Method.length !== 0 ? (
                    <li>
                      <div className="info-title">Processing Method</div>
                      <div className="info-desc">
                        {productarray.coffee_info.Processing_Method}
                      </div>
                    </li>
                  ) : null}
                  {productarray.coffee_info.Body.length !== 0 ? (
                    <li>
                      <div className="info-title">Body</div>
                      <div className="info-desc">
                        {productarray.coffee_info.Body}
                      </div>
                    </li>
                  ) : null}
                  {productarray.coffee_info.Acidity.length !== 0 ? (
                    <li>
                      <div className="info-title">Acidity</div>
                      <div className="info-desc">
                        {productarray.coffee_info.Acidity}
                      </div>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
