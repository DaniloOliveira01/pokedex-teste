import Head from 'next/head'

import client from '@/services/api'
import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from '@/contexts/auth'

import { GlobalStyle } from '@/styles/GlobalStyles'
import { AppThemeProvider } from '@/contexts/theme'

import { AppPropsWithLayout } from '@/@types/type-pages'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <AuthProvider>
      <Head>
        <link 
          rel="shortcut icon" 
          href="/image/favicon.ico" 
          type="image/x-icon" 
        />
      </Head>
      
      <NextNProgress color="#2F80ED" startPosition={0.5} />
      <GlobalStyle />
      <AppThemeProvider>
        <ApolloProvider client={client}>
          {getLayout(<Component {...pageProps} />)}
        </ApolloProvider>
      </AppThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
