import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

const MAX_DISPLAY = 11

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Welcome to my Blog!
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          {siteMetadata.description}
        </p>
      </div>
      <div className="flex h-full overflow-hidden rounded bg-white dark:bg-gray-900">
        <a className="position: relative flex flex-wrap no-underline hover:no-underline">
          <div className="mx-0 sm:mx-6">
            <div className="w-full rounded-t bg-white text-xl leading-normal text-gray-800 dark:bg-gray-900 md:text-2xl">
              {!posts.length && 'no posts found.'}
              {posts.slice(0, 1).map((frontMatter, indexCount) => {
                const { slug, date, title, summary, tags, image } = frontMatter
                // 대문
                if (indexCount == 0) {
                  return (
                    <>
                      <div className="flex overflow-hidden rounded bg-white shadow-lg">
                        <a
                          href={`/blog/${slug}`}
                          className="flex flex-wrap no-underline hover:no-underline"
                        >
                          <div key={slug} className="w-full rounded-t md:w-2/3">
                            <Image
                              src={`/static/images/cover/${image}`}
                              width="800"
                              height="600"
                              className="h-full w-full shadow"
                            />
                          </div>
                          <div className="flex w-full flex-shrink flex-grow flex-col bg-gray-100 md:w-1/3">
                            <div className="flex-1 overflow-hidden rounded-t rounded-b-none shadow-lg">
                              <p className="w-full px-6 pt-6 text-xs text-gray-600 md:text-sm ">
                                {tags.map((tag) => (
                                  <Tag key={tag} text={tag} />
                                ))}
                              </p>
                              <div className="w-full px-6 text-xl font-bold text-gray-900">
                                <Link href={`/blog/${slug}`}>{title}</Link>
                              </div>
                              <p className="mb-5 px-6 text-base text-gray-800">{summary}</p>
                            </div>
                            <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-gray-100 p-6 shadow-lg">
                              <div className="position: relative flex items-center justify-between">
                                <Image
                                  src="/static/images/avatar.jpg"
                                  alt="Avatar"
                                  width="32px"
                                  height="32px"
                                  className="avatar mr-4 h-8 w-8 rounded-full"
                                  data-tippy-content="Marhead"
                                />
                                <p className="text-xs text-gray-600 md:text-sm">
                                  <time dateTime={date}>{formatDate(date)}</time>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </>
                  )
                }
              })}
              <div className="-mx-6 flex flex-wrap justify-between pt-12">
                {posts.slice(1, MAX_DISPLAY).map((frontMatter, indexCount) => {
                  const { slug, date, title, summary, tags, image } = frontMatter

                  if (indexCount == 1 || indexCount == 9) {
                    return (
                      <>
                        <div
                          key={slug}
                          className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-2/3"
                        >
                          <div className="flex-1 overflow-hidden rounded-t rounded-b-none bg-gray-100 shadow-lg">
                            <a
                              href="#"
                              className="position: relative flex flex-wrap no-underline hover:no-underline"
                            >
                              <Link href={`/blog/${slug}`}>
                                <Image
                                  src={`/static/images/cover/${image}`}
                                  width="800"
                                  height="600"
                                  className="h-full w-full rounded-t pb-6"
                                />
                              </Link>
                              <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
                                {tags.map((tag) => (
                                  <Tag key={tag} text={tag} />
                                ))}
                              </p>
                              <div className="w-full px-6 text-xl font-bold text-gray-900">
                                <Link href={`/blog/${slug}`}>{title}</Link>
                              </div>
                              <p className="mb-5 px-6 text-base text-gray-800">{summary}</p>
                            </a>
                          </div>
                          <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-gray-100 p-6 shadow-lg">
                            <div className="position: relative flex items-center justify-between">
                              <Image
                                className="avatar mr-4 h-8 w-8 rounded-full"
                                data-tippy-content="Author Name"
                                src="/static/images/avatar.jpg"
                                width="32px"
                                height="32px"
                                alt="Avatar of Author"
                              />
                              <p className="text-xs text-gray-600 md:text-sm">
                                <time dateTime={date}>{formatDate(date)}</time>
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  }
                  if (
                    indexCount == 2 ||
                    indexCount == 3 ||
                    indexCount == 4 ||
                    indexCount == 5 ||
                    indexCount == 8
                  ) {
                    return (
                      <>
                        <div
                          key={slug}
                          className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3"
                        >
                          <div className="flex-1 overflow-hidden rounded-t rounded-b-none bg-gray-100 shadow-lg">
                            <a
                              href="#"
                              className="position: relative flex flex-wrap no-underline hover:no-underline"
                            >
                              <Link href={`/blog/${slug}`}>
                                <Image
                                  src={`/static/images/cover/${image}`}
                                  width="800"
                                  height="600"
                                  className="h-full w-full rounded-t pb-6"
                                />
                              </Link>
                              <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
                                {tags.map((tag) => (
                                  <Tag key={tag} text={tag} />
                                ))}
                              </p>
                              <div className="w-full px-6 text-xl font-bold text-gray-900">
                                <Link href={`/blog/${slug}`}>{title}</Link>
                              </div>
                              <p className="mb-5 px-6 text-base text-gray-800">{summary}</p>
                            </a>
                          </div>
                          <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-gray-100 p-6 shadow-lg">
                            <div className="position: relative flex items-center justify-between">
                              <Image
                                className="avatar mr-4 h-8 w-8 rounded-full"
                                data-tippy-content="Author Name"
                                width="32px"
                                height="32px"
                                src="/static/images/avatar.jpg"
                                alt="Avatar of Author"
                              />
                              <p className="text-xs text-gray-600 md:text-sm">
                                <time dateTime={date}>{formatDate(date)}</time>
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  }
                  if (indexCount == 6 || indexCount == 7) {
                    return (
                      <>
                        <div
                          key={slug}
                          className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/2"
                        >
                          <div className="flex-1 overflow-hidden rounded-t rounded-b-none bg-gray-100 shadow-lg">
                            <a
                              href="#"
                              className="position: relative flex flex-wrap no-underline hover:no-underline"
                            >
                              <Link href={`/blog/${slug}`}>
                                <Image
                                  src={`/static/images/cover/${image}`}
                                  width="800"
                                  height="600"
                                  className="h-full w-full rounded-t pb-6"
                                />
                              </Link>
                              <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
                                {tags.map((tag) => (
                                  <Tag key={tag} text={tag} />
                                ))}
                              </p>
                              <div className="w-full px-6 text-xl font-bold text-gray-900">
                                <Link href={`/blog/${slug}`}>{title}</Link>
                              </div>
                              <p className="mb-5 px-6 text-base text-gray-800">{summary}</p>
                            </a>
                          </div>
                          <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-gray-100 p-6 shadow-lg">
                            <div className="position: relative flex items-center justify-between">
                              <Image
                                className="avatar mr-4 h-8 w-8 rounded-full"
                                data-tippy-content="Author Name"
                                src="/static/images/avatar.jpg"
                                width="32px"
                                height="32px"
                                alt="Avatar of Author"
                              />
                              <p className="text-xs text-gray-600 md:text-sm">
                                <time dateTime={date}>{formatDate(date)}</time>
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  }
                })}
              </div>
            </div>
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
          <div className="-mx-6 flex flex-wrap justify-between pt-12"></div>
        </a>
      </div>
    </>
  )
}
