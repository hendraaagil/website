import { ExternalLink } from '@/components/ui'
import htmrLib from 'htmr'

export function htmr(html: string) {
	return htmrLib(html, {
		transform: {
			a: ({ href, children }) => (
				<ExternalLink href={href}>{children}</ExternalLink>
			),
		},
	})
}
