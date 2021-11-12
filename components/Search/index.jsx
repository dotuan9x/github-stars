import React from 'react';
import {SvgIcon} from "Components/SvgDefinition";

const Search = (props) => {
    const {onChange} = props;

    return (
        <div className="relative h-full border border-gray-600 rounded">
            <div className="absolute h-full inset-y-0 left-0 pl-2 flex items-center h-full pointer-events-none">
                <span className="text-gray-600 sm:text-sm">
                      <SvgIcon name="search" size={24}/>
                </span>
            </div>
            <input type="text" onChange={onChange} name="price" placeholder="Search"
                   className="bg-transparent block w-full h-full px-10 py-2 sm:text-sm border-0 rounded-sm text-white"/>
        </div>
    );
};

Search.defaultProps = {
    onChange: () => {}
}

export default Search;
