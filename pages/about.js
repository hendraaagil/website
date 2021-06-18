import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { Divider, Heading, VStack } from '@chakra-ui/react';

import Description from '../components/about/Description';
import Skills from '../components/about/Skills';
import Socials from '../components/about/Socials';
import logo from '../public/ha-logo.png';

const About = () => {
  const title = 'About';
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/about`;

  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />

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
        <Skills />
        <Divider />
        <Socials />
      </VStack>
    </>
  );
};

export default About;
