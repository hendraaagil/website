import { useEffect, useState } from 'react';
import { ReactCusdis } from 'react-cusdis';

const Comments = ({ pageUrl, pageId, pageTitle }) => {
  const appId = process.env.NEXT_PUBLIC_CUSDIS_APPID;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) {
    return null;
  }

  return (
    <ReactCusdis
      attrs={{
        host: 'https://cusdis.com',
        appId,
        pageId,
        pageTitle,
        pageUrl,
      }}
    />
  );
};

export default Comments;
