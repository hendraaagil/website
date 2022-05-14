import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { createClient } from 'contentful';
import { Divider, Heading, VStack } from '@chakra-ui/react';

import Description from '@/components/about/Description';
import PageContainer from '@/components/PageContainer';
import Skills from '@/components/about/Skills';
import Socials from '@/components/about/Socials';
import logo from '@/public/ha-logo.png';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

export const getStaticProps = async () => {
  const res = await client.getEntries({ content_type: 'about' });
  const socials = await res.items.filter(
    (item) => item.fields.title === 'socials'
  )[0].fields.items;
  const skills = await res.items.filter(
    (item) => item.fields.title === 'skills'
  )[0].fields.items;

  return { props: { socials, skills } };
};

const About = ({ socials, skills }) => {
  const title = 'About';
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/about`;

  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />

      <PageContainer>
        <Heading as="h1" mt={8} textAlign="center">
          About Me
        </Heading>
        <Divider my={8} />
        <VStack>
          <Image
            src={logo}
            alt="Hendra Agil's Logo"
            width={128}
            height={128}
            placeholder="blur"
          />
          <Description />
          <Divider />
          <Skills skills={skills} />
          <Divider />
          <Socials socials={socials} />
        </VStack>
      </PageContainer>
    </>
  );
};

export default About;
