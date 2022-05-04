export default function Footer() {
  return (
    <footer>
      <div className="inner">
        <ul className="menu1">
          <li>
            <ul>
              <li>
                <a href="/">COMPANY</a>
              </li>
              <li>
                <a href="/">한눈에 보기</a>
              </li>
              <li>
                <a href="/">스타벅스 사명</a>
              </li>
              <li>
                <a href="/">스타벅스 소개</a>
              </li>
              <li>
                <a href="/">국내 뉴스룸</a>
              </li>
              <li>
                <a href="/">세계의 스타벅스</a>
              </li>
              <li>
                <a href="/">글로벌 뉴스룸</a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <a href="/">COMPORATE SALES</a>
              </li>
              <li>
                <a href="/">단체 및 기업 구매 안내</a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <a href="/">PARTNERSHIP</a>
              </li>
              <li>
                <a href="/">신규 입점 제의</a>
              </li>
              <li>
                <a href="/">협력 고객사 등록신청</a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <a href="/">ONLINE COMMUNITY</a>
              </li>
              <li>
                <a href="/">페이스북</a>
              </li>
              <li>
                <a href="/">트위터</a>
              </li>
              <li>
                <a href="/">유튜브</a>
              </li>
              <li>
                <a href="/">인스타그램</a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <a href="/">RECRUIT</a>
              </li>
              <li>
                <a href="/">채용 소개</a>
              </li>
              <li>
                <a href="/">채용 지원하기</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="footaward">
        <ul className="footawardwrap">
          <a href="javascript:void(0)">
            <img src="images/footer_award1.jpg" alt="" />
          </a>
          <a href="javascript:void(0)">
            <img src="images/footer_award2.jpg" alt="" />
          </a>
          <a href="javascript:void(0)">
            <img src="images/footer_award3.jpg" alt="" />
          </a>
          <a href="javascript:void(0)">
            <img src="images/footer_award4.jpg" alt="" />
          </a>
          <a href="javascript:void(0)">
            <img src="images/footer_award5.jpg" alt="" />
          </a>
          <a href="javascript:void(0)">
            <img src="images/footer_award6.jpg" alt="" />
          </a>
        </ul>
      </div>

      <div className="inner">
        <ul className="menu2">
          <li>
            <a href="javascript:void(0)" className="green">
              개인정보처리방침
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">영상정보처리기기 운영관리 방침</a>
          </li>
          <li>
            <a href="javascript:void(0)">홈페이지 이용약관</a>
          </li>
          <li>
            <a href="javascript:void(0)">위치정보 이용약관</a>
          </li>
          <li>
            <a href="javascript:void(0)">스타벅스 카드 이용약관</a>
          </li>
          <li>
            <a href="javascript:void(0)">비회원 이용약관</a>
          </li>
          <li>
            <a href="javascript:void(0)">My DT Pass 서비스 이용약관</a>
          </li>
          <li>
            <a href="javascript:void(0)">윤리경영 핫라인</a>
          </li>
        </ul>

        <div className="btn-group">
          <a href="javascript:void(0)" className="btn btn--white">
            찾아오시는 길
          </a>
          <a href="javascript:void(0)" className="btn btn--white">
            신규입점제의
          </a>
          <a href="javascript:void(0)" className="btn btn--white">
            사이트 맵
          </a>
        </div>

        <div className="info">
          <span>사업자등록번호 201-81-21515</span>
          <span>(주) 스타벅스 코리아 대표이사 이석구</span>
          <span>TEL : 02) 3015-1100 / FAX : 02) 3015-1106</span>
          <span>개인정보 책임자 : 강기원</span>
        </div>

        <p className="copyright">
          &copy; <span className="this-year"></span> Starbucks Coffee Company.
          All Rights Reserved.
        </p>
        <img
          src="./images/starbucks_logo_only_text.png"
          alt=""
          className="logo"
        />
      </div>
    </footer>
  );
}
