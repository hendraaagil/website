import { ReactCusdis } from 'react-cusdis';

const Disqus = ({ pageUrl, pageId, pageTitle }) => {
  const appId = process.env.NEXT_PUBLIC_CUSDIS_APPID;

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

export default Disqus;
