import { VStack } from '@chakra-ui/react';
import Card from './Card';

const BlogList = ({ blogs, router }) => (
  <VStack spacing={6}>
    {blogs.map((blog) => {
      const { createdAt, slug, summary, tags } = blog;

      return (
        <Card
          key={slug}
          slug={slug}
          summary={summary}
          title={blog.title}
          tags={tags}
          createdAt={createdAt}
          router={router}
        />
      );
    })}
  </VStack>
);

export default BlogList;
