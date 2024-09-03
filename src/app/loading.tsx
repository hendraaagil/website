import { Loader2 } from 'lucide-react'
import { PageContainer } from '@/components/layout'

export default function Loading() {
	return (
		<PageContainer className="min-h-screen items-center justify-center">
			<Loader2 className="h-10 w-10 animate-spin text-color-secondary" />
		</PageContainer>
	)
}
