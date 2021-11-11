import { useState } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { store } from '../app/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

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
