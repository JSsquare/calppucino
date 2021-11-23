/* eslint-disable @next/next/no-page-custom-font */
import { HomePage } from '../components/Homepage'
import { dehydrate, QueryClient } from 'react-query';

/* 
  Followed ReactQuery Hydration(https://react-query.tanstack.com/guides/ssr#using-hydration)
    - prefetching query on the server
    - then dehydrating those queries to the queryClient
*/
export async function getServerSideProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('getMenu', async () => {
    const res = await fetch(`${process.env.HOST}/api/menu`)
    const { data } = await res.json()
    return data
  })
  
  return { props: { dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))) } }
}

export default HomePage
