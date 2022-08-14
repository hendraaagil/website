import { Heading, Text } from '@chakra-ui/react';
import SocialButton from '@/components/about/SocialButton';

const LinkList = ({ title, description, links }) => (
  <>
    <Heading as="h3" fontSize="2xl">
      {title}
    </Heading>
    <Text fontWeight="400">{description}</Text>
    {links.map((link) => (
      <SocialButton
        key={link.name}
        name={link.name}
        url={link.url}
        isLinktree
      />
    ))}
  </>
);

export default LinkList;
