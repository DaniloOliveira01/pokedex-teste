import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import Head from 'next/head'
import { 
  ReactElement, 
  ReactNode,
} from 'react'

import { ApolloProvider } from '@apollo/client'
import client from '@/utils/api'
import { AuthProvider } from '@/contexts/auth'

import { GlobalStyle } from '@/styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@/styles/themes'
import { AppThemeProvider } from '@/contexts/theme'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

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
