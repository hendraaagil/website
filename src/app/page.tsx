import { ThemeToggle } from '@/components/theme'
import { Heading } from '@/components/ui'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <Heading>Hello there 👋</Heading>
      <p>Personal website v4 is coming soon ... 👀</p>
      <Heading variant="h2">0123456789</Heading>
      <Heading variant="h3">ABCDEFGHIJKLMNOPQRSTUVWXYZ</Heading>
      <Heading variant="h4">abcdefghijklmnopqrstuvwxyz</Heading>
      <ThemeToggle />
    </main>
  )
}
