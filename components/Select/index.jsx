import React, {useState, useEffect} from 'react';

const Select = () => {
    return (
        <div className="flex flex-row w-full max-w-xl mx-auto">
            <div className="relative inline-block text-left">
                <div>
                    <div className="mt-1 relative">
                        <button type="button"
                                className="relative w-full bg-white border border-gray-300 rounded shadow-sm px-4 py-2 text-left cursor-default hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                aria-haspopup="listbox" aria-expanded="true" aria-labelledby="select-label-1">
                            <span className="flex items-center">
                                <span className="block truncate font-medium">
                                    Tom Cook
                                </span>
                                <svg className="-mr-1 ml-2 h-5 w-5"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
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
                {/*<div
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
                </div>*/}
            </div>
        </div>
    );
};

export default Select;
