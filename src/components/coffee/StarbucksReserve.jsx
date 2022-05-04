import '../../coffeereserve.scss';
import TopBannerTop from '../TopBannerTop';
import ProductMake from './ProductMake';

export default function StarbucksReserve() {
  return (
    <>
      <TopBannerTop name="스타벅스 리저브" />
      <div className="Reserve">
        <div className="inner">
          <img src="/images/coffee/coffee_reserve_info_img01.jpg" alt="" />
          <p>가장 진귀하고 이국적이며 정교한 풍미의 커피</p>
          <h2>“스타벅스 리저브™ 커피는 아주 진귀하고 특별한 커피입니다.”</h2>
          <h4>
            적은 수량 때문에 모든 분들에게 선보일 수 없으나, 독특한 맛과 향은
            리저브 커피를 더욱 소중하게 만듭니다. 가장 신선한 상태에서 손으로
            골라낸 커피는 <br />이 세상에서 가장 훌륭한 최상의 커피이자,
            스타벅스에서 제공하는 특별한 경험입니다. 남부 탄자니아의 고지대부터
            자메이카의 블루 마운틴까지 <br />
            각각의 스타벅스 리저브 원두는 고객들을 새로운 커피 여정으로
            초대합니다. <br />
            2가지 혹은 소수의 스타벅스 리저브 커피만이 지정된 스타벅스 리저브
            매장™에서 제공되며, 새로운 커피들이 주기적으로 추가됩니다.
          </h4>
          <h4>
            스타벅스 커피팀은 고객에게 최고의 품질의 커피를 제공하기 위해 매년
            25만 잔의 커피를 테스트합니다. 스타벅스의 커피 전문가들은 <br />
            커피 농가와 돈독한 인연을 이어오며, 세계 최고급 커피의 상위 3 %
            원두를 찾기 위해 세계 각지를 여행합니다. <br />그 여정 속에서 진정
            가치가 있는 이국적이며 희귀하고, 매우 특별한 커피를 발견하고
            있습니다. <br />
            단일 원산지에서 극소량만 재배되어 한정된 기간에만 만나볼 수 있는
            진귀한 고품질의 커피를 스타벅스 리저브™로 제공해오고 있습니다.
          </h4>
          <div className="horizen_line"></div>
          <div className="multiplewrap">
            <img
              className="multi1img"
              src="/images/coffee/reserve_info_ttl2.png"
              alt=""
            />
            <h4>
              클로버®뿐만 아니라 다양한 추출 방식으로 리저브를 즐길 수 있습니다.
              <br />
              추출방식에 따라 색다른 리저브로 여러분의 커피 경험을 완성해보세요.
            </h4>
            <img
              className="multi2img"
              src="/images/coffee/icon_reserve_info2.png"
              alt=""
            />
            <h4>
              리저브 전용매장에서는 리저브 추출방식을 5가지 (클로버®, 블랙 이글,
              푸어 오버(Pour Over) 핸드 드립, 케멕스, 리저브 콜드 브루) 중에서
              직접 선택하여 즐길 수 있습니다. <br />
              추출 방식에 따라 색다른 리저브를 즐겨보세요. <br />※ 매장 별로
              보유하고 있는 장비와 장비도입 시기는 상이할 수 있으며 리저브 일부
              매장에서 먼저 선보입니다.
            </h4>
            <div className="btnwrap">
              <a href="javascript:void(0)" className="btn btn--brown">
                추출방식 별 상세 특징 보러가기
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="sellingreserve">
        <div className="inner">
          <div className="sellingwrap">
            <div className="sellingtitle">
              <p>New Brewing 판매 중인 스타벅스 리저브™ 커피</p>
            </div>
            <ul>
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
