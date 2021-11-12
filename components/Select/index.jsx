import React, {useState, useEffect} from 'react';

const Select = (props) => {
    const {className} = props;

    return (
        <div className={`flex flex-row w-full max-w-xl mx-auto ${className}`}>
            <div className="relative inline-block text-left">
                <div>
                    <div className="mt-1 relative">
                        <button style={{background: '#21262d'}} type="button"
                                className="relative w-full bg-transparent border border-gray-500 rounded shadow-sm px-4 py-2 text-left cursor-default hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                aria-haspopup="listbox" aria-expanded="true" aria-labelledby="select-label-1">
                            <span className="flex items-center">
                                <span className="block truncate font-medium">
                                   Sort: <span className="font-bold">Recently starred</span>
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
                <div className="origin-top-right absolute right-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <div className="py-1" role="none">
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                           tabIndex="-1" id="menu-item-0">
                            <span className="text-indigo-600 inset-y-0 flex items-center pr-4">
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Recently starred
                        </a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                           tabIndex="-1" id="menu-item-2">
                            Recently active
                        </a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                           tabIndex="-1" id="menu-item-1">
                            Most stars
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

Select.defaultProps = {
    className: ''
}

export default Select;
