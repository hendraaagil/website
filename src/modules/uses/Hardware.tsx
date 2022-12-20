import uses from '@/_data/uses.json'
import { Heading, UnorderedList } from '@/components'

export const Hardware = () => {
  const { heading, lists } = uses.hardware

  return (
    <>
      <Heading variant="h2">{heading}</Heading>
      {lists.map((list) => (
        <div key={list.heading}>
          <Heading variant="h3">{list.heading}</Heading>
          <UnorderedList className="space-y-1">
            {list.lists.map((item) => (
              <li key={item.name}>
                {item.title && <strong>{item.title}</strong>} {item.name}
                {item.specs && (
                  <UnorderedList className="space-y-1">
                    {item.specs?.map((spec) => (
                      <li key={spec.title}>
                        <strong>{spec.title}</strong> {spec.name}
                      </li>
                    ))}
                  </UnorderedList>
                )}
              </li>
            ))}
          </UnorderedList>
        </div>
      ))}
    </>
  )
}
