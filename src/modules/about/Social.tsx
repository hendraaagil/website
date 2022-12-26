import socials from '@/_data/socials.json'
import { Heading, Link, UnorderedList } from '@/components'

export const Social = () => (
  <>
    <Heading variant="h2">Get in touch</Heading>
    <p>
      You can reach me out via email at:{' '}
      <Link url="mailto:hi@hendraaagil.dev" className="underline">
        hi@hendraaagil.dev
      </Link>{' '}
      or via socials below:
    </p>
    <UnorderedList className="mt-2 space-y-2">
      {socials.map((social) => (
        <li key={social.name}>
          <strong className="mr-1">{social.name}</strong>-
          <Link url={social.url} className="ml-1 underline" isExternal>
            {social.url}
          </Link>
        </li>
      ))}
    </UnorderedList>
  </>
)
