import { useEffect, useState } from 'react';

export default function useWindowWidth() {
  //윈도우 내에 가로값
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', resize);

    return () => {
      //추가가 계속 되기때문에 메모리 소모가 많아지고 버그의 위험이 있기에 cleanup을 해주어야 한다.
      window.removeEventListener('resize', resize);
    };
  }, []);
  return width;
}
