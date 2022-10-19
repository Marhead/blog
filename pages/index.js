import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { slug } from 'github-slugger'

const MAX_DISPLAY = 10

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
            Welcome to my Blog!
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>

        

        <div className="flex h-full bg-white dark:bg-gray-900 rounded overflow-hidden">
					<a href="post.html" className="flex flex-wrap no-underline hover:no-underline">

            {!posts.length && 'no posts found.'}

            {posts.slice(0, MAX_DISPLAY).map((frontMatter,indexCount)=>{

              const {slug, date, title, summary, tags} = frontMatter

              // 대문
              if(indexCount == 0) {
                return(
                  <>
                  <div className="w-full md:w-2/3 rounded-t">	
                    <img src="https://source.unsplash.com/collection/494263/800x600" className="h-full w-full shadow"/>
                  </div>

                  <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                      <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">
                        {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}</p>
                      <div className="w-full font-bold text-xl text-gray-900 px-6">{title}</div>
                      <p className="text-gray-800 text-base px-6 mb-5">
                        {summary}
                      </p>
                    </div>

                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                      <div className="flex items-center justify-between">
                        <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author"/>
                        <p className="text-gray-600 text-xs md:text-sm"><time dateTime={date}>{formatDate(date)}</time></p>
                      </div>
                    </div>
                  </div>
                  </>
                )
              }
              if(indexCount == 1 || indexCount == 9) {
                return(
                <>
                <div className="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">	
                      <img src="https://source.unsplash.com/collection/325867/800x600" className="h-full w-full rounded-t pb-6"/>
                      <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                        {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                      </p>
                      <div className="w-full font-bold text-xl text-gray-900 px-6">{title}</div>
                      <p className="text-gray-800 text-base px-6 mb-5">
                        {summary}
                      </p>
                    </a>
                  </div>
                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author"/>
                      <p className="text-gray-600 text-xs md:text-sm"><time dateTime={date}>{formatDate(date)}</time></p>
                    </div>
                  </div>
                </div>

                </>
                )
              }
              if(indexCount == 2 || indexCount == 3 || indexCount == 4 || indexCount == 5 || indexCount == 8) {
                return(
                <>
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                      <img src="https://source.unsplash.com/collection/1118905/800x600" className="h-full w-full rounded-t pb-6"/>
                      <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                      {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                      </p>
                      <div className="w-full font-bold text-xl text-gray-900 px-6">{title}</div>
                      <p className="text-gray-800 text-base px-6 mb-5">
                        {summary} 
                      </p>
                    </a>
                  </div>
                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author"/>
                      <p className="text-gray-600 text-xs md:text-sm"><time dateTime={date}>{formatDate(date)}</time></p>
                    </div>
                  </div>
                </div>
                </>
                )
              }
              if(indexCount == 6 || indexCount == 7) {
                return(
                <>
                <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                      <img src="https://source.unsplash.com/collection/3657445/800x600" className="h-full w-full rounded-t pb-6"/>
                      <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                      {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                      </p>
                      <div className="w-full font-bold text-xl text-gray-900 px-6">{title}</div>
                      <p className="text-gray-800 text-base px-6 mb-5">
                        {summary} 
                      </p>
                    </a>
                  </div>
                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author"/>
                      <p className="text-gray-600 text-xs md:text-sm"><time dateTime={date}>{formatDate(date)}</time></p>
                    </div>
                  </div>
                </div>
                </>
                )
              }
            })}

				    <div className="flex flex-wrap justify-between pt-12 -mx-6">
            </div>
					</a>
				</div>
        
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex pt-6 justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
