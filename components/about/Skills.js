import { SimpleGrid } from '@chakra-ui/react';
import Card from './Card';

const Skills = ({ skills }) => (
  <SimpleGrid py={4} w="full" columns={[1, 2, 3, 4]} spacing={6}>
    {skills.map((skill) => (
      <Card key={skill.name} title={skill.name} skills={skill.items} />
    ))}
  </SimpleGrid>
);

export default Skills;
