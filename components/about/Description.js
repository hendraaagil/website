import { Box, Text } from '@chakra-ui/react';

import { getAge } from '../../lib/age';
import CustomLink from './CustomLink';

const Description = () => (
  <Box py={4} lineHeight="tall">
    <Text py={2}>
      Hello, my name is <b>Hendra Agil Syaputra</b>. Usually called{' '}
      <b>Hendra</b> / <b>Agil</b>. I'm currently {getAge()} years old. Born and
      live in{' '}
      {
        <CustomLink link="https://karanganyarkab.go.id">
          Karanganyar, Central Java, Indonesia
        </CustomLink>
      }
      . Graduated from{' '}
      {
        <CustomLink link="https://smkn2kra.sch.id">
          SMKN 2 Karanganyar
        </CustomLink>
      }{' '}
      at 2021 as Software Engineering student.
    </Text>
    <Text py={2}>
      I started learn about web development since 2020 with PHP language. But
      for now I spend more time to explore about frontend development especially
      using JavaScript and React.
    </Text>
  </Box>
);

export default Description;
