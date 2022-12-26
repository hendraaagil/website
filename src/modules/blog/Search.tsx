import type { BlogTag } from '@/types/blog'

import clsx from 'clsx'
import { FiXCircle } from 'react-icons/fi'

export type SearchProps = {
  tags: BlogTag[]
  currentTag?: string
  setTag: (selectedTag?: string) => void
}

export const Search = ({ tags, currentTag, setTag }: SearchProps) => (
  <div className="mb-4 -mt-1 flex flex-wrap items-center space-x-2">
    <p className="font-medium">Tags :</p>
    {tags.map((tag) => (
      <button
        key={tag.value}
        onClick={() => setTag(tag.value)}
        disabled={tag.value === currentTag}
        className={clsx(
          'my-1 rounded border border-gray-200 py-1 px-2 text-base',
          'transition-[background-color,border-color] duration-300',
          'hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-700',
          'disabled:cursor-not-allowed disabled:bg-gray-200 dark:disabled:bg-gray-700'
        )}
      >
        {tag.label}
      </button>
    ))}
    {currentTag && (
      <button
        aria-label="Clear chosen tag"
        onClick={() => setTag(undefined)}
        className={clsx(
          'rounded border border-gray-200 p-2',
          'transition-[background-color,border-color] duration-300',
          'hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-700'
        )}
      >
        <FiXCircle />
      </button>
    )}
  </div>
)
