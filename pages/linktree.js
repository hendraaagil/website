import { NextSeo } from 'next-seo';
import { createClient } from 'contentful';
import { Divider, Heading, Stack, Text } from '@chakra-ui/react';

import PageContainer from '../components/PageContainer';
import SocialButton from '../components/about/SocialButton';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

export const getStaticProps = async () => {
  const res = await client.getEntries({ content_type: 'about' });
  const discussions = await res.items.filter(
    (item) => item.fields.title === 'discussions'
  )[0].fields.items;
  const socials = await res.items.filter(
    (item) => item.fields.title === 'socials'
  )[0].fields.items;
  const supports = await res.items.filter(
    (item) => item.fields.title === 'supports'
  )[0].fields.items;

  return { props: { discussions, socials, supports } };
};

const Linktree = ({ discussions, socials, supports }) => {
  const title = 'Linktree';
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/linktree`;

  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />

      <PageContainer>
        <Heading as="h1" mt={8} textAlign="center">
          Linktree
        </Heading>
        <Divider my={8} />
        <Stack pt={2} spacing={3}>
          <Heading as="h3" fontSize="2xl">
            Socials
          </Heading>
          <Text>If you want to contact me.</Text>
          {socials.map((social) => (
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
          {discussions.map((discussion) => (
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
          {supports.map((support) => (
            <SocialButton
              key={support.name}
              name={support.name}
              url={support.url}
              isLinktree
            />
          ))}
        </Stack>
      </PageContainer>
    </>
  );
};

export default Linktree;
