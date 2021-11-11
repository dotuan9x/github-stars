import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Github Stars</title>
                <meta name="description" content="Browse your starred repositories"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <div className="flex flex-none toolbar h-12 w-full bg-gray-500">
                    <div className="h-full w-full flex items-center px-5">
                        <div className="flex flex-none">
                            <span className="text-white cursor-pointer">
                                <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32"
                                     data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                                    <path fillRule="evenodd"
                                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                            </span>
                        </div>
                        <div className="flex flex-grow h-full p-2">
                            <div className="relative mx-auto h-full">
                            </div>
                        </div>
                        <div className="flex flex-none">
                            <span className="text-white cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>Your Starred Repositories</h1>
                    <h2>Browse your starred repositories</h2>
                </div>
                <div>
                    <div className="container mx-auto">
                        <div className="relative mx-auto h-full">
                            <div
                                className="absolute h-full inset-y-0 left-0 pl-2 flex items-center h-full pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </span>
                            </div>
                            <input type="text" name="price" id="price" placeholder="Search" className="block w-full h-full px-10 py-2 sm:text-sm border-0 rounded-sm" /></div>


                        <div className="flex flex-row w-full max-w-xl mx-auto">
                            <div className="relative inline-block text-left">
                                <div>
                                    <div className="mt-1 relative">
                                        <button type="button"
                                                className="relative w-full bg-white border border-gray-300 rounded shadow-sm px-4 py-2 text-left cursor-default hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                aria-haspopup="listbox" aria-expanded="true"
                                                aria-labelledby="select-label-1">
                    <span className="flex items-center">
                        <span className="block truncate font-medium">
                            Tom Cook
                        </span>
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                             fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd">
                            </path>
                        </svg>
                    </span>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="origin-top-right absolute right-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                    <div className="py-1" role="none">
                                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                                           tabIndex="-1" id="menu-item-0">
                                            Account settings
                                        </a>
                                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                                           tabIndex="-1" id="menu-item-1">
                                            Support
                                        </a>
                                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                                           tabIndex="-1" id="menu-item-2">
                                            License
                                        </a>
                                        <form method="POST" action="#" role="none">
                                            <button type="submit"
                                                    className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                                                    role="menuitem" tabIndex="-1" id="menu-item-3">
                                                Sign out
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}
