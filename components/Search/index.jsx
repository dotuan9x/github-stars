import React from 'react';
import {SvgIcon} from "Components/SvgDefinition";

const Search = (props) => {
    const {onChange} = props;

    return (
        <div className="relative h-full w-full border border-gray-600 rounded">
            <div className="absolute h-full inset-y-0 left-0 pl-2 flex items-center h-full pointer-events-none">
                <span className="text-gray-600 sm:text-sm">
                      <SvgIcon name="search" size={24}/>
                </span>
            </div>
            <input type="text" onChange={onChange} name="price" placeholder="Search" className="bg-transparent block w-full h-full px-10 py-2 sm:text-sm border-0 rounded-sm text-white"/>

            <span className="absolute top-0 right-0 h-full items-center flex cursor-pointer">
                <label className="cursor-pointer">All</label>
                <svg className="mr-1 ml-1 h-5 w-5"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd">
                    </path>
                </svg>
            </span>
            <div className={`hidden origin-top-right absolute right-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1" role="none">
                    <a className="text-gray-700 block px-4 py-2 text-sm flex flex-row cursor-pointer" role="menuitem">
                        <span className="text-indigo-600 inset-y-0 flex items-center pr-4" />
                        All
                    </a>
                    <a className="text-gray-700 block px-4 py-2 text-sm flex flex-row cursor-pointer" role="menuitem">
                        <span className="text-indigo-600 inset-y-0 flex items-center pr-4"/>
                        Name
                    </a>
                    <a className="text-gray-700 block px-4 py-2 text-sm flex flex-row cursor-pointer" role="menuitem">
                        <span className="text-indigo-600 inset-y-0 flex items-center pr-4"/>
                        Description
                    </a>
                    <a className="text-gray-700 block px-4 py-2 text-sm flex flex-row cursor-pointer" role="menuitem">
                        <span className="text-indigo-600 inset-y-0 flex items-center pr-4"/>
                        Language
                    </a>
                    <a className="text-gray-700 block px-4 py-2 text-sm flex flex-row cursor-pointer" role="menuitem">
                        <span className="text-indigo-600 inset-y-0 flex items-center pr-4"/>
                        Topic
                    </a>
                </div>
            </div>
        </div>
    );
};

Search.defaultProps = {
    onChange: () => {
    }
}

export default Search;
