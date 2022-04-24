import React from 'react'
import { paths } from '../../../utilities';
import Collection from '../../../components/Collection';
import Head from 'next/head'
const _id_ = ({ router }) => {
    const { query, page } = router.query;
    const optional = `&query=${query}`;
    const currentPath = router.pathname.split("/")[1]; // returns "movies" "tv" "search" (or "" for /)
    const path = paths.search[currentPath]
    return (
        <>
            <Head>
                <title>{`${query} - Search TV Series`}</title>
            </Head>
            <Collection router={router} label={`Results for "${query}"`} path={path} optional={optional} pagination={true}></Collection>
        </>
    )
}

export default _id_