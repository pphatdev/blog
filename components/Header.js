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
            <div className="w-full max-w-7xl mx-auto">
                <nav className="flex items-center justify-between px-6 lg:px-8 sm:py-3" aria-label="Global">
                    <div className="flex flex-shrink-0 lg:flex-1 sm:w-1/3">
                        <Link href="/">
                            <a className="-m-1.5 p-1.5 dark:[&>svg>g]:fill-white" aria-label={siteMetadata.headerTitle}>
                                <Logo />
                            </a>
                        </Link>
                    </div>

                    <div className="hidden lg:flex transition-all justify-center sm:w-1/3 gap-x-2">
                        {headerNavLinks.map((item, i) => (
                            <a 
                                key={i} 
                                href={item.href} 
                                className="text-sm group relative whitespace-nowrap bg-white/5 ring-black/10 font-semibold py-1 ring-1 dark:ring-white/10 px-4 dark:bg-white/5 backdrop-blur-sm rounded-md dark:hover:bg-white/10 dark:text-slate-100 hover:bg-white/50 leading-6 text-gray-900"
                            >
                                {item.title}
                                <Border className={'hidden group-hover:flex translate-y-[14px]'}/>
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 justify-end w-full sm:w-1/3">
                        <ThemeSwitch />
                        <div className="flex lg:hidden">
                            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
                            <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6 dark:stroke-white" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </nav>

                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="/"  aria-label={siteMetadata.headerTitle}>
                                <a className="-m-1.5 p-1.5 dark:[&>svg>g]:fill-white">
                                    <Logo />
                                </a>
                            </Link>
                            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)} >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {headerNavLinks.map((item,i) => (
                                        <a key={i} href={item.href} className=" whitespace-nowrap -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            {item.title}
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
  