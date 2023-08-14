import formatDate from '@/lib/utils/formatDate'
import Tag from '@/components/Tag'
import { useRouter } from 'next/router'

export default function ContentCard({ posts, category, slug, className , max}) {
    const router = useRouter()
    return (
        <section className={`sm:p-5 relative ${className ?? ' sm:mt-16'}`}>
            <h1 className="pb-5 sm:pl-2.5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white relative"> Latest {category ?? 'Updated'} </h1>
            <div className="z-50 grid grid-cols-1 pb-5 pl-5 border-b border-l gap-x-0 gap-y-4 sm:gap-y-8 sm:grid-cols-2 lg:grid-cols-4 sm:pl-0 sm:pb-0 rounded-bl-2xl sm:border-none border-primary-500">
                {!posts.length && 'No posts found.'}
                {
                    posts.slice(0, max).map( (item ,i) => 
                        {
                            return (
                                <div key={i} onClick={() => router.push(`/${slug??''}/${item?.slug}`)} className="[&>div>h1]:cursor-pointer [&>div>p]:cursor-pointer hover:bg-white/90 backdrop-blur-sm hover:drop-shadow-xl sm:p-3 rounded-xl dark:hover:bg-slate-800">
                                    <date className="flex items-center gap-1 font-medium sm:gap-3 text-primary-700"> 
                                        <div className="flex items-center flex-shrink-0 gap-3 text-xs sm:textsm">
                                            <span className="hidden sm:block">•</span> {formatDate(item.lastmod)}
                                        </div> 
                                        <div className="order-first w-full h-px -translate-x-5 sm:translate-x-0 bg-gradient-to-r sm:order-last from-primary-700 to-purple-600"></div>
                                    </date>
                                    <div>
                                        <h1 className="my-2 text-base font-medium sm:text-xl sm:font-bold line-clamp-2 sm:leading-7">{item.title}</h1>
                                        <div className='relative flex flex-wrap items-center gap-2 mb-2'>
                                            {   item?.tags?.length
                                                    ? item.tags.map((tag, k) => {
                                                        return <Tag key={k} text={tag}/>
                                                    })
                                                    : null
                                            }
                                        </div>
                                        <p className="text-sm sm:text-base line-clamp-4">{item.summary}</p>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
            {posts.length >= max
                ? (
                    <div className="absolute bottom-0 flex items-end justify-center w-full h-32 ring-white from-white dark:from-gray-900 dark:to-transparent dark:via-gray-900/50 via-white/50 bg-gradient-to-t to-transparent">
                        <div>
                            <a href={`/${slug}`} className="px-4 py-2 text-sm font-medium text-white rounded-full shadow-sm bg-gradient-to-tl from-primary-500 to-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500">
                                See more
                            </a>
                        </div>
                    </div>
                )
                : null
            }
            
            
        </section>
    )
}
