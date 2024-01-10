import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import siteMetadata from "@/data/siteMetadata";
import Logo from './logo.svg'
import headerNavLinks from "@/data/headerNavLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from 'react'
import { Dialog } from "@headlessui/react";
import Border from "./Border";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="absolute inset-x-0 top-0 z-50 border-b dark:border-white/10">
            <div className="w-full mx-auto max-w-7xl">
                <nav className="flex items-center justify-between px-6 lg:px-8 sm:py-3" aria-label="Global">
                    <div className="flex flex-shrink-0 lg:flex-1 sm:w-1/3">
                        <Link href="/">
                            <a className="-m-1.5 p-1.5 dark:[&>svg>g]:fill-white" aria-label={siteMetadata.headerTitle}>
                                <Logo />
                            </a>
                        </Link>
                    </div>

                    <div className="justify-center hidden transition-all lg:flex sm:w-1/3 gap-x-2">
                        {headerNavLinks.map((item, i) => (
                            <a 
                                key={i} 
                                href={item.href} 
                                className="relative px-4 py-1 text-sm font-semibold leading-6 text-gray-900 transition-all rounded-md group whitespace-nowrap hover:ring-black/10 hover:ring-1 hover:dark:ring-white/20 backdrop-blur-sm dark:hover:bg-white/10 dark:text-slate-100 hover:bg-white/50"
                            >
                                {item.title}
                                <Border className={'hidden group-hover:flex translate-y-[14px]'}/>
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center justify-end w-full gap-2 sm:w-1/3">
                        <ThemeSwitch />
                        <div className="flex lg:hidden">
                            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
                            <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="w-6 h-6 dark:stroke-white" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </nav>

                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-2 overflow-y-auto bg-white dark:bg-black/90 backdrop-blur-sm sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="/"  aria-label={siteMetadata.headerTitle}>
                                <a className="-m-1.5 p-1.5 dark:[&>svg>g]:fill-white">
                                    <Logo />
                                </a>
                            </Link>
                            
                            <button type="button" className="p-1 text-gray-700 rounded-md dark:ring-1 dark:ring-white/20 backdrop-blur-sm hover:dark:ring-white/10 dark:hover:bg-white/50 dark:text-white" onClick={() => setMobileMenuOpen(false)} >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="flow-root mt-6">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="py-6 space-y-2">
                                    {headerNavLinks.map((item,i) => (
                                        <a key={i} href={item.href} className="relative block px-5 py-1.5 -mx-3 text-base font-medium leading-7 text-gray-900 rounded-lg dark:text-white/50 hover:dark:text-white group dark:ring-white/20 hover:dark:ring-1 hover:dark:bg-white/5 whitespace-nowrap hover:bg-gray-50">
                                            {item.title}
                                            <Border className={`hidden group-hover:block translate-y-10`}/>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>

                </Dialog>
            </div>
        </header>
    )
}