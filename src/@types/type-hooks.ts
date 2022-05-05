import { ReactNode } from "react"

export interface IAuthProps {
    email: string
    login: (email: string) => void
    logout: () => void
}

export interface IAuthProviderProps {
    children: ReactNode
}

export interface IThemeContextProps {
    themeState: boolean
    toogleTheme: () => void
}

export interface IThemeProviderProps {
    children: ReactNode
}
  
  