import '../Template.scss';
export default function TemplateR(props) {
  const templatebg = 'images/' + props.bg;
  const templatetxt = 'images/' + props.txt;
  const templatebtn = 'btn btn--' + props.btn;

  return (
    <>
      <div
        className="template-wrap"
        style={{ backgroundImage: `url(${templatebg})` }}
      >
        <div className="inner">
          <div className="template-r-detail">
            <div className="template-r-txt">
              <img src={templatetxt} alt="" />
            </div>
            <div className="template-r-btn">
              <a href="javascript:void(0)" className={templatebtn}>
                자세히 보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
TemplateR.defaultProps = {
  btn: 'white',
};
