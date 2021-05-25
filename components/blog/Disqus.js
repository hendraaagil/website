import { DiscussionEmbed } from 'disqus-react';

const Disqus = ({ url, identifier, title }) => {
  const disqusShortname = process.env.NEXT_PUBLIC_DISQUS_SHORTNAME;
  const disqusConfig = { url, identifier, title };

  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
};

export default Disqus;
