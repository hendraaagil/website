import { Link } from '@/components'
import { getAge } from '@/libs/math'

export const Description = () => (
  <div className="space-y-2">
    <p>
      Hi there! My name is <strong>Hendra Agil</strong>. Usually called <strong>Hendra</strong> / <strong>Agil</strong>.
      I&apos;m currently {getAge()} years old. Born and live in{' '}
      <Link url="https://karanganyarkab.go.id" isExternal>
        Karanganyar, Central Java, Indonesia
      </Link>
      . Graduated from{' '}
      <Link url="https://smkn2kra.sch.id" isExternal>
        VHS 2 Karanganyar
      </Link>{' '}
      at 2021 as Software Engineering student.
    </p>
    <p>
      I started learn about web development since 2019 with PHP language. But for now I spend more time to explore about
      web development using JavaScript, Node.js and React.
    </p>
  </div>
)
