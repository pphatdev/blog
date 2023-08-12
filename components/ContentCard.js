export default function ContentCard({ posts, category, slug, className , max}) {

    return (
        <section className={`p-5 relative ${className ?? ' mt-16'}`}>
            <h1 className="pb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Latest {category ?? 'Updated'} </h1>
            <div className="z-50 grid grid-cols-1 gap-x-4 gap-y-8 pb-5 pl-5 border-b border-l sm:grid-cols-2 lg:grid-cols-4 sm:pl-0 sm:pb-0 rounded-bl-2xl sm:border-none border-primary-500">
                {!posts.length && 'No posts found.'}
                {
                    posts.slice(0, max).map( (item ,i) => 
                        {
                            return (
                                <a key={i} href={`/${slug??''}/${item?.slug}`} className="group">
                                    <date className="flex items-center gap-3 font-medium text-primary-500"> 
                                        <div className="flex items-center flex-shrink-0 gap-3"><span className="hidden sm:block">•</span> {item.lastmod}</div> 
                                        <div className="order-first w-full h-px -translate-x-5 sm:translate-x-0 bg-gradient-to-r sm:order-last from-primary-500 to-purple-600"></div>
                                    </date>
                                    <div className="group-hover:bg-slate-50 dark:group-hover:bg-gray-800 dark:group-hover:ring-gray-800 group-hover:ring-[0.5rem] transition-all rounded-xl pb-3 group-hover:ring-slate-50">
                                        <h1 className="py-2 text-xl font-medium line-clamp-2">{item.title}</h1>
                                        <p className="line-clamp-4">{item.summary}</p>
                                    </div>
                                </a>
                            )
                        }
                    )
                }
            </div>
            {
                posts.length >= max
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
