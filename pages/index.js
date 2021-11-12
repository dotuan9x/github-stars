import React, {useEffect} from "react";
import Head from 'next/head'
import axios from 'axios';

import Search from "Components/Search";
import Select from "Components/Select"
import {SvgIcon} from "Components/SvgDefinition";

export default function Home({username, repos = []}) {
    const githubUrl = 'https://github.com'
    const repo = `github:repo:${username}`
    let arrLanguages = {}

    if (repos && repos.length) {
        repos.map((repo) => {
            const {language} = repo;

            if (language) {
                arrLanguages[language] = (arrLanguages[language] || 0) + 1;
            }
        })
    }

    console.log('arrLanguages', arrLanguages)

    useEffect(() => {


    }, [repos])

    console.log('repos', repos)

    return (
        <div className="text-white">
            <Head>
                <title>Github Stars</title>
                <meta name="description" content="Browse your starred repositories"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <div className="flex flex-none toolbar h-12 w-full bg-gray-500" style={{background: '#161b22'}}>
                    <div className="h-full w-full flex items-center px-5">
                        <div className="flex flex-none">
                            <span className="text-white cursor-pointer">
                                <a href={githubUrl}>
                                    <SvgIcon name="github" size={32}/>
                                </a>
                            </span>
                            <ul className="flex flex-row space-x-4 items-center ml-10 text-white text-sm font-medium">
                                <li>
                                    <a target="_blank" href={`${githubUrl}/pulls`} rel="noreferrer">Pull requests</a>
                                </li>
                                <li>
                                    <a target="_blank">Issues</a>
                                </li>
                                <li>
                                    <a target="_blank">Marketplace</a>
                                </li>
                                <li>
                                    <a target="_blank">Explore</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-grow h-full p-2">
                            <div className="relative mx-auto h-full">
                            </div>
                        </div>
                        <div className="flex flex-none">
                            <span className="text-white cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div style={{background: '#161b22'}} className="flex text-white h-40 items-center">
                    <div className="mx-auto text-center ">
                        <h1 className="text-3xl">Your Starred Repositories</h1>
                        <h2>Browse your starred repositories</h2>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-row md:container mx-auto my-10" style={{maxWidth: 1024}}>
                        <div className="w-3/4 overflow-x-hidden">
                            <div className="flex flex-row justify-around">
                                <div className="flex w-1/2">
                                    <Search />
                                </div>
                                <div className="flex w-1/2">
                                    <Select />
                                </div>
                            </div>
                            <div className="mt-10 pr-10">
                                <ul>
                                    {
                                        repos && repos.length ? repos.map((repo, key) => {
                                            const {name = "", description = "", html_url = "", forks_count, stargazers_count, topics, language} = repo;

                                            return (
                                                <li key={key} className="space-y-3 border-t border-gray-600 py-5">
                                                    <h3 className="text-xl"><a href={html_url} target="_blank" style={{color: '#58a6ff'}} rel="noreferrer">{name}</a></h3>
                                                    <p className="text-sm" style={{color: '#8b949e'}}>{description}</p>
                                                    <div>
                                                        <ul className="flex flex-row space-x-4 text-sm items-center" style={{color: '#8b949e'}}>
                                                            {
                                                                language ? (
                                                                    <li>
                                                                        {language}
                                                                    </li>
                                                                ) : null
                                                            }
                                                            <li>
                                                                <a href={`${html_url}/stargazers`} target="_blank" className="flex flex-row items-center cursor-pointer" rel="noreferrer">
                                                                    <SvgIcon name="star" className="" size={16}/>
                                                                    <label className="pl-1 cursor-pointer">{Intl.NumberFormat('en-IN').format(stargazers_count)}</label>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href={`${html_url}/network/members`} target="_blank" className="flex flex-row items-center cursor-pointer" rel="noreferrer">
                                                                    <SvgIcon name="github" size={16}/>
                                                                    <label className="pl-1 cursor-pointer">{Intl.NumberFormat('en-IN').format(forks_count)}</label>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex flex-wrap">
                                                        {
                                                            topics && topics.length ? topics.map((topic, key) => {
                                                               return (<label className="mr-2 mb-1 bg-blue-100 text-sm py-1 px-3 rounded-full" style={{color: '#58a6ff', background: '#388bfd26'}} key={key}>{topic}</label>)
                                                            }) : null
                                                        }
                                                    </div>
                                                </li>
                                            )
                                        }) : null
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <div>
                                <ul className="space-y-2 text-sm space-y-4 cursor-pointer" style={{color: '#8b949e'}}>
                                    <li className="">
                                        All stars
                                        <span className="float-right">{repos.length}</span>
                                    </li>
                                    <li>All repositories <span className="float-right">0</span></li>
                                    <li>Your repositories <span className="float-right">0</span></li>
                                    <li>Others’ repositories <span className="float-right">0</span></li>
                                    <li>Topic <span className="float-right">0</span></li>
                                </ul>
                            </div>
                            <div className="border-t border-gray-500 mt-5 pt-2">
                                <h3 className="font-medium">Filter by languages</h3>
                                <ul className="space-y-4 mt-5 text-sm" style={{color: '#8b949e'}}>
                                    {
                                        Object.keys(arrLanguages).length ? Object.keys(arrLanguages).map((language, key) => {
                                            return (<li key={key}>{language} <span className="float-right">{arrLanguages[language]}</span></li>)
                                        }) : null
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

async function getStartedRepo(username, page, rowsPerPage) {
    // ?per_page=100 to get rows per page
    const response = await axios.get(`https://api.github.com/users/${username}/starred`, {
        params: {
            per_page: rowsPerPage,
            page: page
        }
    });

    if (response && response.status === 200) {
        const {headers, data} = response;
        const {link} = headers;
        let total = 1;

        // If is first page, then get total page
        if (page === 1 && link) {
            const linkRefLast = link.split(',').find((value) => value.indexOf('rel="last"') >= 0);

            if (linkRefLast) {
                const arrMatch = linkRefLast.match(/(.*?)&page=(.*?)>.*/);

                if (arrMatch && arrMatch.length >= 3) {
                    total = +arrMatch[2]
                }
            }
        }

       return {
           data,
           total
       }
    }

    return false;
}

export async function getStaticProps(context) {
    const username = 'dotuan9x';
    const rowsPerPage = 100;
    let arrRepos = [];

    const response = await getStartedRepo(username, 1, rowsPerPage);

    if (response && response.total > 1) {
        arrRepos = arrRepos.concat(response.data);

        for(let i = 2; i <= response.total; i++) {
            const res = await getStartedRepo(username, i, rowsPerPage);

            if (res && res.data) {
                arrRepos = arrRepos.concat(res.data);
            }
        }
    }

    return {
        props: {
            username,
            repos: arrRepos
        }
    }
}
