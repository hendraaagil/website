import { ThemeToggle } from '@/components/theme'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold">Hello there 👋</h1>
      <p>Personal website v4 is coming soon ... 👀</p>
      <ThemeToggle />
    </main>
  )
}
