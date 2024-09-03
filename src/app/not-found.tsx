import { Link } from 'next-view-transitions'
import { Heading } from '@/components/ui'
import { PageContainer } from '@/components/layout'

export default function NotFound() {
	return (
		<PageContainer className="min-h-screen items-center justify-center">
			<Heading>Page not found!</Heading>
			<Link href="/" className="underline underline-offset-4">
				Go to home
			</Link>
		</PageContainer>
	)
}
