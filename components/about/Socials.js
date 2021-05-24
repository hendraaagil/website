import { Stack, Text, VStack } from '@chakra-ui/react';

import about from '../../data/about.json';
import CustomLink from './CustomLink';
import SocialButton from './SocialButton';

const Socials = () => {
  return (
    <VStack pt={2} pb={4} align="start" w="full">
      <Text>
        You can reach me out via email at{' '}
        {
          <CustomLink link="mailto:hendraaagil@gmail.com">
            hendraaagil@gmail.com
          </CustomLink>
        }
        , or via socials below:
      </Text>
      <Stack
        pt={2}
        direction={{ base: 'column', lg: 'row' }}
        w="full"
        spacing={{ base: 3, lg: 6 }}
      >
        {about.socials.map((social, index) => (
          <SocialButton key={index} name={social.name} url={social.url} />
        ))}
      </Stack>
    </VStack>
  );
};

export default Socials;
