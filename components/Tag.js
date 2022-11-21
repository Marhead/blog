import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="dark:text-secondary-400 dark:hover:text-secondary-500 rounded-md bg-slate-100 px-3 py-1 text-xs leading-5 text-primary-500 no-underline hover:text-primary-600 dark:bg-neutral-700">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
