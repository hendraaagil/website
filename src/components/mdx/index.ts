import H1 from './h1.astro'
import H2 from './h2.astro'
import H3 from './h3.astro'
import H4 from './h4.astro'
import ExternalLink from './external-link.astro'
import Figure from './figure.astro'
import Paragraph from './paragraph.astro'
import Code from './code.astro'
import Blockquote from './blockquote.astro'
import HorizontalRule from './horizontal-rule.astro'
import UnorderedList from './unordered-list.astro'
import OrderedList from './ordered-list.astro'
import ListItem from './list-item.astro'
import Table from './table.astro'
import TableHeader from './table-header.astro'
import TableCell from './table-cell.astro'
import LinkPreview from './link-preview.astro'

export const mdxComponents = {
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	a: ExternalLink,
	img: Figure,
	p: Paragraph,
	code: Code,
	blockquote: Blockquote,
	hr: HorizontalRule,
	ul: UnorderedList,
	ol: OrderedList,
	li: ListItem,
	table: Table,
	th: TableHeader,
	td: TableCell,
	LinkPreview: LinkPreview,
}
