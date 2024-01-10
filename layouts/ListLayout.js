import Tag from '@/components/Tag'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import Image from 'next/image'
import Border from '@/components/Border'
import { useRouter } from 'next/router'
import formatDate from '@/lib/utils/formatDate'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination, category }) {
    const router = useRouter()
    const [searchValue, setSearchValue] = useState('')
    const filteredBlogPosts = posts.filter(
        (frontMatter) => {
            const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
            return searchContent.toLowerCase().includes(searchValue.toLowerCase())
        }
    )
    

    // If initialDisplayPosts exist, display it if no searchValue is specified
    const displayPosts = initialDisplayPosts.length > 0 && !searchValue 
        ? initialDisplayPosts 
        : filteredBlogPosts

    return (
        <div className='relative sm:pl-2.5'>
            <h1 className="relative pb-4 mt-12 text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-primary-500 to-primary-500"> {title} </h1>

            <div className="relative max-w-lg mb-10">
                <Border className={'translate-y-5'}/>
                <input 
                    aria-label="Search articles" 
                    type="text" 
                    onChange={(e) => setSearchValue(e.target.value)} 
                    placeholder="Search articles" 
                    className="relative block w-full px-4 py-2 text-base font-semibold leading-6 text-gray-900 rounded-full group whitespace-nowrap bg-white/5 ring-black/10 focus:ring-black/10 ring-1 dark:ring-white/10 dark:bg-white/5 backdrop-blur-sm dark:hover:bg-white/10 dark:text-slate-100"
                />
                <svg className="absolute w-4 h-4 text-gray-400 right-4 top-3 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>


            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>

                {!filteredBlogPosts.length && 'No posts found.'}
                {displayPosts.map((frontMatter) => {

                    const { slug, date, title, summary, tags, thumbnail, type } = frontMatter
                    return (
                        <div key={slug} className="relative overflow-hidden transition-all hover:bg-white/90 dark:bg-gray-800/50 bg-white/90 drop-shadow-md backdrop-blur-sm hover:drop-shadow-xl ring-2 dark:ring-white/5 ring-black/10 rounded-xl dark:hover:bg-slate-800">

                            <article onClick={() => router.push(`/${category}/${slug}`)}  className="flex flex-col gap-2 cursor-pointer lg:flex-row">
                                <div className='flex flex-shrink-0 w-full p-2 group lg:w-40 hover:p-1 hover:transition-all hover:duration-150 hover:ease-linear sm:h-56'>
                                    <Image
                                        className="object-cover w-40 rounded-lg h-72"
                                        src={thumbnail ?? ''}
                                        width={`512`}
                                        height={`310`}
                                        alt={title}
                                    />
                                </div>

                                <div className='p-4'>
                                    <h1 className="mb-2 text-base font-medium line-clamp-2 sm:leading-6">{title}</h1>
                                    <p className='text-[10px] dark:text-slate-400 text-slate-600'>{formatDate(date)}</p>
                                    <p className="mt-1 text-sm line-clamp-3 text-slate-600 dark:text-slate-400">{summary}</p>
                                    <div className='flex flex-wrap gap-2 py-5 pb-4'>
                                        { tags.slice(0,2).map( (tag, idx) => { return <Tag key={idx} text={tag}/> } ) }
                                    </div>
                                </div>
                            </article>
                        </div>
                    )
                })}
            </div>

            {pagination && pagination.totalPages > 1 && !searchValue && (
                <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} category={category} />
            )}
        </div>
    )
}
