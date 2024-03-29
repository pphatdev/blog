import Link from "next/link";

export default function Hero({announcing, url}) {

    return (
        <section className="relative">          
            <div className="relative isolate px-6 my-5 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div 
                        className="relative -left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',}}
                    />
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true" >
                    <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#8080ff] to-[#89c8fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(99.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 6.1%, 99.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',}} />
                </div>

                <div className="relative mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
                    
                    <div className="hidden relative sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative dark:bg-black/10 backdrop-blur-sm rounded-full px-3 py-1 text-sm leading-6 dark:text-slate-300 text-gray-600 ring-1 dark:ring-slate-600 ring-gray-900/10 hover:ring-gray-900/20">
                            { announcing }.{' '}
                            <a href={url} className="font-semibold text-primary-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                        <div className="absolute right-1/2 -translate-y-0 -mb-px flex h-8 items-end overflow-hidden">
                            <div className="flex -mb-px h-[2px] w-24">
                                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-7xl"> Hello!! <span className="text-transparent bg-clip-text bg-gradient-to-tr from-purple-800 to-primary-500"> Welcome back my blog</span>. </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">I am Sophat. I am Senior front-end developer of TURBOTECH. </p>
                        
                    
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="/tutorial">
                                <a className="rounded-full bg-gradient-to-tr from-primary-600 to-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                                    Get started
                                </a>
                            </Link>
                            {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </a> */}
                        </div> 
                    

                    </div>

                </div>
            </div>
        </section>
    )
}
