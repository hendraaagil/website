import { NextSeo } from 'next-seo';
import { Divider, Heading, Stack, Text } from '@chakra-ui/react';

import about from '../data/about.json';
import SocialButton from '../components/about/SocialButton';

const Linktree = () => {
  const title = 'Linktree';
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/linktree`;

  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />

      <Heading as="h1" mt={8} textAlign="center">
        Linktree
      </Heading>
      <Divider my={8} />
      <Stack pt={2} spacing={3}>
        <Heading as="h3" fontSize="2xl">
          Socials
        </Heading>
        <Text>If you want to contact me.</Text>
        {about.socials.map((social) => (
          <SocialButton
            key={social.name}
            name={social.name}
            url={social.url}
            isLinktree
          />
        ))}
        <Divider my={4} />
        <Heading as="h3" fontSize="2xl">
          Discussions
        </Heading>
        <Text>If you want to discuss with me.</Text>
        {about.discussions.map((discussion) => (
          <SocialButton
            key={discussion.name}
            name={discussion.name}
            url={discussion.url}
            isLinktree
          />
        ))}
        <Divider my={4} />
        <Heading as="h3" fontSize="2xl">
          Supports
        </Heading>
        <Text>If you want to support me.</Text>
        {about.supports.map((support) => (
          <SocialButton
            key={support.name}
            name={support.name}
            url={support.url}
            isLinktree
          />
        ))}
      </Stack>
    </>
  );
};

export default Linktree;
