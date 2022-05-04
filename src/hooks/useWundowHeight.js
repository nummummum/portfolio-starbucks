import { useEffect, useState } from 'react';

export default function useWindowHeight() {
  //윈도우 내에 가로값
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const resize = () => {
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', resize);

    return () => {
      //추가가 계속 되기때문에 메모리 소모가 많아지고 버그의 위험이 있기에 cleanup을 해주어야 한다.
      window.removeEventListener('resize', resize);
    };
  }, []);
  return height;
}
