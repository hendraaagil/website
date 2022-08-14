import { NextSeo } from 'next-seo';
import { Divider, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import Card from '@/components/projects/Card';
import PageContainer from '@/components/PageContainer';

import projects from '@/data/projects.json';

const Projects = () => {
  const title = 'Projects';
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/projects`;

  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />

      <PageContainer>
        <Heading as="h1" mt={8} textAlign="center">
          Projects
        </Heading>
        <Text my={5} fontWeight="600" textAlign="center">
          Learning by Doing
        </Text>
        <Divider mb={8} />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {projects.map((project) => {
            const {
              demo,
              description,
              github,
              thumbnail,
              title: projectName,
            } = project;

            return (
              <Card
                key={title}
                name={projectName}
                thumbnail={thumbnail}
                desc={description}
                github={github}
                demo={demo}
              />
            );
          })}
        </SimpleGrid>
      </PageContainer>
    </>
  );
};

export default Projects;
