import Link from 'next/link'
import { Heading } from '@/components/ui'

export default function NotFound() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center space-y-4">
      <Heading>Page not found!</Heading>
      <Link href="/" className="underline underline-offset-4">
        Go to home
      </Link>
    </section>
  )
}
