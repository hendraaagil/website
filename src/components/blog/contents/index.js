import Link from './Link';
import Blockquote from './Blockquote';
import Heading1 from './Heading1';
import Heading2 from './Heading2';
import Heading3 from './Heading3';
import Heading4 from './Heading4';
import Heading5 from './Heading5';
import Heading6 from './Heading6';
import HorizontalRule from './HorizontalRule';
import Image from './Image';
import OrderedList from './OrderedList';
import Paragraph from './Paragraph';
import UnorderedList from './UnorderedList';
import Table from './Table';
import TableBody from './TableBody';
import TableData from './TableData';
import TableHeader from './TableHeader';
import TableHead from './TableHead';
import TableRow from './TableRow';

const markdownComponents = {
  a: Link,
  blockquote: Blockquote,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  hr: HorizontalRule,
  img: Image,
  ol: OrderedList,
  p: Paragraph,
  ul: UnorderedList,
  table: Table,
  tbody: TableBody,
  td: TableData,
  th: TableHeader,
  thead: TableHead,
  tr: TableRow,
};

export default markdownComponents;
