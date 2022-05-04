import { Link } from 'react-router-dom';
import '../../coffee.scss';

export default function ProductMake(props) {
  const pimgurl = '/images/coffee/' + props.url;
  const ptxt = props.title;
  return (
    <>
      <Link to="./product_view" state={{ pimg: props.url, ptxt: props.title }}>
        <div className="productwrap">
          <div className="productimgwrap">
            <img src={pimgurl} alt="" className="productimg" />
          </div>
          <p className="producttxt">{ptxt}</p>
        </div>
      </Link>
    </>
  );
}
