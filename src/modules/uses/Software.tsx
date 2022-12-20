import uses from '@/_data/uses.json'
import { Heading, Link, UnorderedList } from '@/components'

export const Software = () => {
  const { heading, lists } = uses.software

  return (
    <>
      <Heading variant="h2">{heading}</Heading>
      {lists.map((list) => (
        <div key={list.heading}>
          <Heading variant="h3">{list.heading}</Heading>
          <UnorderedList className="space-y-1">
            {list.lists.map((item) => (
              <li key={item.name}>
                <Link url={item.link} isExternal>
                  {item.title && <strong>{item.title}</strong>} {item.name}
                </Link>
              </li>
            ))}
          </UnorderedList>
        </div>
      ))}
    </>
  )
}
