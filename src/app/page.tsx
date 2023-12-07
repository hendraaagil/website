import { Heading } from '@/components/ui'

export default function Home() {
  return (
    <section className="flex flex-col space-y-4 px-2 py-8 sm:px-4">
      <div className="flex space-x-2">
        <Heading>Hi there!</Heading>
        <div className="animate-wiggle motion-reduce:animate-none">
          <p className="text-4xl">👋</p>
        </div>
      </div>
      <p>
        My name is <strong>Hendra Agil</strong>, I&apos;m a web developer
        specializing in JavaScript. With expertise in the full software
        development life cycle, I create scalable web applications with a focus
        on clean, maintainable code and effective problem-solving.
      </p>
      <div className="border-t pt-4 border-color">
        <Heading variant="h3">Latest Posts</Heading>
      </div>
    </section>
  )
}
