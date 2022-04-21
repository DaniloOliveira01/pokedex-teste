import type { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import client from '@/utils/api'

import { GlobalStyle } from '@/styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import Head from 'next/head'
import { AuthProvider } from '@/contexts/auth'
import { lightTheme } from '@/styles/light-theme'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <AuthProvider>
      <Head>
        <link rel="shortcut icon" href="/image/favicon.ico" type="image/x-icon" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
      <ApolloProvider client={client}>
        {getLayout(<Component {...pageProps} />)}
      </ApolloProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
