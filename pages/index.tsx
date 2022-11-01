/* eslint-disable @next/next/no-page-custom-font */
import { HomePage } from '../components/Homepage'
import { dehydrate, QueryClient } from 'react-query';
import { APP_CONSTANTS } from '../app/constants';

/* 
  Followed ReactQuery Hydration(https://react-query.tanstack.com/guides/ssr#using-hydration)
    - prefetching query on the server
    - then dehydrating those queries to the queryClient
*/
export async function getServerSideProps() {
  const { OFFER_INFO, WIP } = APP_CONSTANTS
  const workInProgressAndOfferActive = WIP && OFFER_INFO.OFFER_ACTIVE
  const queryClient = new QueryClient()
  if(workInProgressAndOfferActive) {
    await queryClient.prefetchQuery('getOfferItems', async () => {
      const res = await fetch(`${process.env.HOST}/api/offer-items`)
      const { data } = await res.json()
      return data
    })
  } else {
    if(process.env.HOST) {
      await queryClient.prefetchQuery('getMenu', async () => {
        const res = await fetch(`${process.env.HOST}/api/menu`)
        const { data } = await res.json()
        return data
      })
    }
  }
  const dehydrateState = (queryClient: any) => JSON.parse(JSON.stringify(dehydrate(queryClient)))
  
  return { props: { dehydratedState: dehydrateState(queryClient) } }
}

export default HomePage
