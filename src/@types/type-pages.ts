import { NextPage } from "next"
import { AppProps } from "next/app"
import { 
    ReactElement, 
    ReactNode 
} from "react"

export interface IPokemonPage {
    getLayout: (page: ReactElement) => JSX.Element
}

export interface IDashboardPage {
    getLayout: (page: ReactElement) => JSX.Element
}

export interface IPokeNameParams {
    pokeName: string
}

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}
  
export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export interface ILayoutProps {
    children: ReactNode
}

