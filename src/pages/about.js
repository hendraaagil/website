import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { Divider, Heading, VStack } from '@chakra-ui/react';

import Description from '@/components/about/Description';
import PageContainer from '@/components/PageContainer';
import Skills from '@/components/about/Skills';
import Socials from '@/components/about/Socials';

import logo from '@/public/ha-logo.png';
import skills from '@/data/skills.json';
import socials from '@/data/socials.json';

const About = () => {
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
