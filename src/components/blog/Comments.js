import { useColorModeValue } from '@chakra-ui/react';
import Giscus from '@giscus/react';

const Comments = () => {
  const theme = useColorModeValue('light', 'dark_dimmed');

  return (
    <Giscus
      repo="hendraaagil/website"
      repoId="MDEwOlJlcG9zaXRvcnkzNjg4MDQwNDI="
      category="General"
      categoryId="DIC_kwDOFfuAys4CAJMi"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      loading="lazy"
      theme={theme}
    />
  );
};

export default Comments;
