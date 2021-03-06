import React, {useEffect, useState, useMemo} from "react";
import Head from 'next/head'
import axios from 'axios';
import Fuse from 'fuse.js'
import moment from 'moment';
import {debounce} from "lodash";

import Search from "Components/Search";
import Select from "Components/Select"
import {SvgIcon} from "Components/SvgDefinition";

export default function Home({username, repos = []}) {
    const githubUrl = 'https://github.com'
    const [data, setData] = useState([]);

    let arrLanguages = {}
    const fuse = new Fuse(repos, {
        includeScore: true,
        minMatchCharLength: 2,
        threshold: 0.3,
        keys: [
            {
                name: 'full_name',
                weight: 3
            },
            {
                name: 'description',
                weight: 2
            },
            {
                name: 'topics'
            },
            {
                name: 'language'
            }
        ]

    })

    if (repos && repos.length) {
        repos.map((repo) => {
            const {language} = repo;

            if (language) {
                arrLanguages[language] = (arrLanguages[language] || 0) + 1;
            }
        })
    }

    useEffect(() => {
        setData(repos)
    }, [repos])

    const onSearch = (e) => {
        if (e.target.value) {
            const result = fuse.search(e.target.value)

            if (result && result.length) {
                const dataSearch = result.map((repo) => {
                    return repo.item;
                })

                setData(dataSearch)
            } else {
                setData([])
            }
        } else {
            setData(repos)
        }
    }

    const debouncedOnSearch = useMemo(() => debounce(onSearch, 500),[]);

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
                                <a target="_blank" href={githubUrl} rel="noreferrer">
                                    <SvgIcon name="github" size={32}/>
                                </a>
                            </span>
                            <ul className="flex flex-row space-x-4 items-center ml-10 text-white text-sm font-medium">
                                <li>
                                    <a target="_blank" href={`${githubUrl}/pulls`} rel="noreferrer">Pull requests</a>
                                </li>
                                <li>
                                    <a target="_blank" href={`${githubUrl}/issues`} rel="noreferrer">Issues</a>
                                </li>
                                <li>
                                    <a target="_blank" href={`${githubUrl}/marketplace`} rel="noreferrer">Marketplace</a>
                                </li>
                                <li>
                                    <a target="_blank" href={`${githubUrl}/explore`} rel="noreferrer">Explore</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-grow h-full p-2">
                            <div className="relative mx-auto h-full">
                            </div>
                        </div>
                        <div className="flex flex-none">
                            <span className="text-white cursor-pointer">
                                 <SvgIcon name="account" size={24}/>
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
                        <div className="w-3/4 overflow-x-hidden pr-10">
                            <div className="flex flex-col">
                                <div className="flex flex-row justify-around">
                                    <div className="flex w-1/2">
                                        <Search onChange={debouncedOnSearch} />
                                    </div>
                                    <div className="flex w-1/2">
                                        <Select className="justify-end" />
                                    </div>
                                </div>
                                <span style={{color: '#8b949e'}} className="text-sm mt-5">Total {data.length || 0} repositories</span>
                            </div>

                            <div className="mt-5">
                                <ul>
                                    {
                                        data && data.length ? data.map((repo, key) => {
                                            const {full_name = "", description = "", html_url = "", forks_count, stargazers_count, topics, language, updated_at} = repo;

                                            return (
                                                <li key={key} className="space-y-3 border-t border-gray-600 py-5">
                                                    <h3 className="text-xl">
                                                        <a className="hover:underline" href={html_url} target="_blank" style={{color: '#58a6ff'}} rel="noreferrer">{full_name.replace('/', ' / ')}</a>
                                                    </h3>
                                                    <p className="text-sm" style={{color: '#8b949e'}}>{description}</p>
                                                    <div className="flex flex-row w-full justify-between">
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
                                                        <span style={{color: '#8b949e'}} className="text-xs justify-end">Updated {moment(updated_at).fromNow()}</span>
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
                                    <li>Others??? repositories <span className="float-right">0</span></li>
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
