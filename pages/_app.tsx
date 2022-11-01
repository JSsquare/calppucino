import { useEffect, useState } from 'react'
import TagManager from 'react-gtm-module'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { store } from '../app/store'
import { Provider } from 'react-redux'

const GoogleTagManagerArgs = {
  trackingId: 'GTM-KKXNTBM'
}

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  useEffect(() => {
    TagManager.initialize({ gtmId: GoogleTagManagerArgs.trackingId });
}, []);

  return (
    <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Hydrate>
    </QueryClientProvider>
  ) 
}
export default MyApp
