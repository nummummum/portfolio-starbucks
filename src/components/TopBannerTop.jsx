import '../Banner.scss';

export default function TopBannerTop(props) {
  return (
    <div className="bannerwrap">
      <div className="inner">
        <h2>{props.name}</h2>
        <ul>
          <li>
            <a>
              <div className="material-icons">home</div>
            </a>
          </li>
          <li>
            <div className="material-icons">chevron_right</div>
          </li>
          <li>
            <a href="javascript:void(0)">{props.name}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
