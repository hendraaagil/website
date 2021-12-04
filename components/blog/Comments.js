import { useColorModeValue } from '@chakra-ui/react';
import { Giscus } from '@giscus/react';

const Comments = () => {
  const theme = useColorModeValue('light', 'dark_dimmed');

  return (
    <Giscus
      repo="hendraaagil/website"
      repoId="MDEwOlJlcG9zaXRvcnkzNjg4MDQwNDI="
      category="General"
      categoryId="DIC_kwDOFfuAys4CAJMi"
      mapping="title"
      reactionsEnabled="1"
      emitMetadata="0"
      theme={theme}
    />
  );
};

export default Comments;
