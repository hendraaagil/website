import { Hr, Link } from '@/components'
import { getCurrentYear } from '@/libs/math'

export const Footer = () => {
  return (
    <footer className="mx-auto flex w-full max-w-5xl flex-col px-4 pb-4 text-sm xs:px-8">
      <Hr className="mb-4" />
      <div className="flex justify-between">
        <div className="space-x-2">
          <Link url="/me">/me</Link>
          <Link url="/source">/source</Link>
        </div>
        <p>&copy;{getCurrentYear()} by Hendra Agil</p>
      </div>
    </footer>
  )
}
