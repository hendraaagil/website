import { NextSeo } from 'next-seo';
import { Divider, Heading, Stack } from '@chakra-ui/react';

import PageContainer from '@/components/PageContainer';
import LinkList from '@/components/linktree/LinkList';

import discussions from '@/data/discussions.json';
import socials from '@/data/socials.json';
import supports from '@/data/supports.json';

const Linktree = () => {
  const title = 'Linktree';
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/linktree`;

  const links = [
    {
      title: 'Socials',
      description: 'If you want to contact me.',
      links: socials,
    },
    {
      title: 'Discussions',
      description: 'If you want to discuss with me.',
      links: discussions,
    },
    {
      title: 'Supports',
      description: 'If you want to support me.',
      links: supports,
    },
  ];

  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />

      <PageContainer>
        <Heading as="h1" mt={8} textAlign="center">
          Linktree
        </Heading>
        <Divider my={8} />
        <Stack pt={2} spacing={3}>
          {links.map((link, index) => (
            <>
              <LinkList
                key={link.title}
                title={link.title}
                description={link.description}
                links={link.links}
              />
              {index + 1 !== links.length && <Divider my={4} />}
            </>
          ))}
        </Stack>
      </PageContainer>
    </>
  );
};

export default Linktree;
