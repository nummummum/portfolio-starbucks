import { useEffect, useState } from 'react';
import '../../coffee.scss';

export default function AlignView(props) {
  const on1 = props.on1;
  const on2 = props.on2;
  const on3 = props.on3;
  const newOnoff = {
    on1: on1,
    on2: on2,
    on3: on3,
  };
  const [onoff, setOnoff] = useState({
    on1: on1,
    on2: on2,
    on3: on3,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setOnoff(newOnoff);
  }, [on1, on2]);

  const changeClick1 = () => {
    const newOnoff = { ...onoff };
    newOnoff.on1 = true;
    newOnoff.on2 = false;
    newOnoff.on3 = false;
    setOnoff(newOnoff);
  };
  const changeClick2 = () => {
    const newOnoff = { ...onoff };
    newOnoff.on1 = false;
    newOnoff.on2 = true;
    newOnoff.on3 = false;
    setOnoff(newOnoff);
  };
  const changeClick3 = () => {
    const newOnoff = { ...onoff };
    newOnoff.on1 = false;
    newOnoff.on2 = false;
    newOnoff.on3 = true;
    setOnoff(newOnoff);
  };

  return (
    <>
      <div className="alignwrap">
        <div className="inner">
          <div className="align-title">
            <h4>분류 보기</h4>
            <a href="javascript:void(0)" className="align-title-icon">
              <div class="material-icons">expand_less</div>
            </a>
          </div>
          <div className="align-button">
            <ul className="button-title">
              <li
                className={onoff.on1 ? 'click' : 'unclick'}
                onClick={changeClick1}
              >
                스타벅스 원두
              </li>
              <li
                className={onoff.on2 ? 'click' : 'unclick'}
                onClick={changeClick2}
              >
                스타벅스 비아
              </li>
              <li
                className={onoff.on3 ? 'click' : 'unclick'}
                onClick={changeClick3}
              >
                스타벅스앳홈 by 캡슐
              </li>
            </ul>
            <ul className="button-detail">
              <label>
                <input type="checkbox" name="coffeeitem" />
                전체 상품보기
              </label>
              <label>
                <input type="checkbox" name="coffeeitem" />
                블론드 로스트
              </label>
              <label>
                <input type="checkbox" name="coffeeitem" />
                미디엄 로스트
              </label>
              <label>
                <input type="checkbox" name="coffeeitem" />
                다크 로스트
              </label>
              <label>
                <input type="checkbox" name="coffeeitem" />
                플레이버
              </label>
              <label>
                <input type="checkbox" name="coffeeitem" />
                리저드 원드
              </label>
              <label>
                <input type="checkbox" name="coffeeitem" />
                플레이버 라떼
              </label>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
AlignView.defaultProps = {
  on1: true,
  on2: false,
  on3: false,
};
