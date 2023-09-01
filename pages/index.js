import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Skills from '@/components/Skills'
import RecentProjects from "@/components/RecentProjects";

const MAX_DISPLAY = 21

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Welcome to Hoone's den!
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <Skills />
        <RecentProjects MAX_PROJECTS="4" />
        <div className="flex h-full overflow-hidden rounded bg-white dark:bg-gray-900">
          <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {/*<div className="mx-0 sm:mx-6">*/}
            {!posts.length && 'no posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags, cover } = frontMatter
              return (
                <article className="py-2" key={slug}>
                  <div className="card h-full rounded-bl-md rounded-br-md bg-slate-50 transition hover:drop-shadow dark:bg-zinc-800">
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div className="relative h-64 w-full lg:h-48 lg:w-full">
                          <Link href={`/blog/${slug}`}>
                            <Image
                              src={`/static/images/cover/${cover}`}
                              alt="cardcoverimage"
                              layout="fill"
                            />
                          </Link>
                        </div>
                        <h2 className="px-4 text-lg leading-8 tracking-tight lg:h-24 lg:overflow-y-hidden">
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                        </h2>
                        <div className="flex items-center justify-between px-4 pb-6">
                          <div className="text-xs text-gray-700 dark:text-gray-300">
                            <time dateTime={date}>{formatDate(date)}</time>
                          </div>
                          <div className="">
                            {tags.slice(0, 1).map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
        <div>
          {posts.length > MAX_DISPLAY && (
            <div className="flex justify-end pt-6 text-base font-medium leading-6">
              <Link
                href="/blog"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="all posts"
              >
                All Posts &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
