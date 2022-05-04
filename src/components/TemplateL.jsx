import '../Template.scss';

export default function TemplateL(props) {
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
          <div className="template-l-detail">
            <div className="template-l-txt">
              <img src={templatetxt} alt="" />
            </div>
            <div className="template-l-btn">
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
TemplateL.defaultProps = {
  btn: 'white',
};
