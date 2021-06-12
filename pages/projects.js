import { NextSeo } from 'next-seo';
import { Divider, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Card from '../components/projects/Card';

import projects from '../data/projects.json';

const Projects = () => {
  const title = 'Projects';
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/projects`;

  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />

      <Heading as="h1" mt={8} textAlign="center">
        Projects
      </Heading>
      <Text my={5} fontWeight="600" textAlign="center">
        Learning by Doing
      </Text>
      <Divider mb={8} />
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {projects.map((project, index) => (
          <Card
            key={String(index)}
            name={project.name}
            thumbnail={project.thumbnail}
            desc={project.desc}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Projects;
