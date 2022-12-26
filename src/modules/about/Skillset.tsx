import skills from '@/_data/skills.json'
import { CardContainer, Heading } from '@/components'

export const Skillset = () => (
  <>
    <Heading variant="h2">Skillset</Heading>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {skills.map((skill) => (
        <CardContainer key={skill.name} className="px-4 pb-4">
          <Heading variant="h3">{skill.name}</Heading>
          <ul className="space-y-2">
            {skill.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CardContainer>
      ))}
    </div>
  </>
)
