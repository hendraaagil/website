import { Box, Flex } from '@chakra-ui/react';

const PageContainer = (props) => {
  const { children } = props;

  return (
    <Flex align="center" justify="center" minH="100vh">
      <Box w="full" {...props}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageContainer;
