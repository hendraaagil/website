import { NextSeo } from 'next-seo';
import { createClient } from 'contentful';
import { Divider, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import Card from '@/components/projects/Card';
import PageContainer from '@/components/PageContainer';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

export const getStaticProps = async () => {
  const res = await client.getEntries({ content_type: 'project' });

  return { props: { projects: res.items } };
};

const Projects = ({ projects }) => {
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
            } = project.fields;
            const { url: imgUrl } = thumbnail.fields.file;
            const { id } = project.sys;

            return (
              <Card
                key={id}
                name={projectName}
                thumbnail={`https:${imgUrl}`}
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
