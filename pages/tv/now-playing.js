import React from 'react'
import { paths } from '../../utilities'
import Collection from '../../components/Collection'
import Head from 'next/head'
const nowPlaying = ({ router }) => {
  return (
    <>
      <Head>
        <title>Airing Today</title>
      </Head>
      <Collection label="Airing Today" path={paths.nowPlaying.tv} router={router} optional={`&page=${router.query.page}`} pagination={true}></Collection>
    </>
  )
}

export default nowPlaying