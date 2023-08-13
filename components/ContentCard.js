import formatDate from '@/lib/utils/formatDate'
import Tag from '@/components/Tag'

export default function ContentCard({ posts, category, slug, className , max}) {

    return (
        <section className={`sm:p-5 relative ${className ?? ' sm:mt-16'}`}>
            <h1 className="pb-5 sm:pl-2.5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white relative"> Latest {category ?? 'Updated'} </h1>
            <div className="z-50 grid grid-cols-1 gap-x-0 gap-y-4 sm:gap-y-8 pb-5 pl-5 border-b border-l sm:grid-cols-2 lg:grid-cols-4 sm:pl-0 sm:pb-0 rounded-bl-2xl sm:border-none border-primary-500">
                {!posts.length && 'No posts found.'}
                {
                    posts.slice(0, max).map( (item ,i) => 
                        {
                            return (
                                <a key={i} href={`/${slug??''}/${item?.slug}`} className="hover:bg-white/90 backdrop-blur-sm hover:drop-shadow-xl sm:p-3 rounded-xl dark:hover:bg-slate-800">
                                    <date className="flex items-center gap-1 sm:gap-3 font-medium text-primary-500"> 
                                        <div className="flex items-center text-xs sm:textsm flex-shrink-0 gap-3"><span className="hidden sm:block">•</span> {formatDate(item.lastmod)}</div> 
                                        <div className="order-first w-full h-px -translate-x-5 sm:translate-x-0 bg-gradient-to-r sm:order-last from-primary-500 to-purple-600"></div>
                                    </date>
                                    <div>
                                        <h1 className="my-2 text-base sm:text-xl font-medium sm:font-bold line-clamp-2 sm:leading-7">{item.title}</h1>
                                        <div className='mb-2 relative flex gap-2 items-center flex-wrap'>
                                            {   item?.tags?.length
                                                    ? item.tags.map((tag, k) => {
                                                        return <Tag key={k} text={tag}/>
                                                    })
                                                    : null
                                            }
                                        </div>
                                        <p className="text-sm sm:text-base line-clamp-4">{item.summary}</p>
                                    </div>
                                </a>
                            )
                        }
                    )
                }
            </div>
            {posts.length >= max
                ? (
                    <div className="ring-white from-white dark:from-gray-900 dark:to-transparent dark:via-gray-900/50 via-white/50 absolute bottom-0 bg-gradient-to-t to-transparent flex justify-center items-end w-full h-32">
                        <div>
                            <a href={`/${slug}`} className="rounded-full bg-gradient-to-tl from-primary-500 to-purple-400 px-4 py-2 text-sm font-medium text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500">
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
