import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags, thumbnail, type } = frontMatter
            return (
              <li key={slug} className="py-4">
                <article className="flex flex-col gap-5">
                  <div className="flex w-full flex-col gap-5 sm:flex-row">
                    <div className="w-full flex-shrink-0 sm:max-w-[15rem]">
                      {thumbnail ? (
                        <div className="h-48 w-full overflow-hidden rounded-md border sm:h-full sm:max-h-32 [&>span]:max-h-48 sm:[&>span]:max-h-32 [&>span>img]:w-full [&>span>img]:object-cover">
                          <Image
                            className=""
                            src={thumbnail ?? ''}
                            width={`512`}
                            height={`512`}
                            alt={title}
                          />
                        </div>
                      ) : (
                        <div className="borde h-full max-h-32 w-full overflow-hidden rounded-md [&>span]:max-h-32 [&>span>img]:w-full [&>span>img]:object-cover">
                          <div className="flex h-32 w-[15rem] items-center justify-center text-4xl font-bold text-slate-500">
                            {type == 'music' ? (
                              <svg
                                className="h-10 w-10 [&>*]:stroke-slate-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
                                  stroke="#292D32"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M9.62 17.3C10.7908 17.3 11.74 16.3509 11.74 15.1801C11.74 14.0092 10.7908 13.0601 9.62 13.0601C8.44915 13.0601 7.5 14.0092 7.5 15.1801C7.5 16.3509 8.44915 17.3 9.62 17.3Z"
                                  stroke="#292D32"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.74 15.18V7.77002"
                                  stroke="#292D32"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M13.13 6.7701L15.47 7.55006C16.04 7.74006 16.5 8.38006 16.5 8.98006V9.60005C16.5 10.4101 15.87 10.8601 15.11 10.6001L12.77 9.82008C12.2 9.63008 11.74 8.99009 11.74 8.39009V7.7701C11.74 6.9701 12.36 6.5101 13.13 6.7701Z"
                                  stroke="#292D32"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            ) : type == 'blog' ? (
                              title[0]
                            ) : (
                              <svg
                                className="h-10 w-10 [&>*]:stroke-slate-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
                                  stroke="#292D32"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7 9.5H17"
                                  stroke="#292D32"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7 14.5H14"
                                  stroke="#292D32"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="w-full">
                      <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                        <h1 className="text-2xl font-bold leading-8 tracking-tight">{title}</h1>
                      </Link>
                      <div>
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                      <div className="prose max-w-none text-gray-500 line-clamp-2 dark:text-gray-400">
                        {summary}
                      </div>
                      <time className="text-xs font-medium text-slate-600" dateTime={date}>
                        {formatDate(date)}
                      </time>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
