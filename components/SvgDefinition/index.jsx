import React, {useState, useEffect} from 'react';

const SvgDefinition = () => {
    return (
        <svg
            width="0"
            height="0"
            className="hidden"
            xmlns="http://www.w3.org/2000/svg">
            <symbol id="home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </symbol>
            <symbol id="calendar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </symbol>
            <symbol id="trend" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </symbol>
            <symbol id="search" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </symbol>
            <symbol id="facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="feather feather-facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </symbol>
            <symbol id="reply" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </symbol>
        </svg>
    );
};

const SvgIcon = (props) => {
    const {name, size = 16, fill = 'currentColor', className = ""} = props;
    const [iconUrl, setIconUrl] = useState('')

    useEffect(() => {
        const url = window.location.href + '#' + name;
        setIconUrl(url)
    }, [])

    return (
        <svg
            version="1.1"
            width={size}
            height={size}
            fill={fill}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <use xlinkHref={iconUrl}/>
        </svg>
    );
};

export {SvgIcon, SvgDefinition};
