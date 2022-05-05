import { 
  createContext, 
  ReactNode, 
  useContext,
  useState 
} from 'react'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'

import { lightTheme, darkTheme } from '@/styles/themes'

import { IThemeProviderProps, IThemeContextProps } from '@/@types/type-hooks'

const AppThemeContext = createContext<IThemeContextProps | null>(null)

const themes = {
  lightTheme,
  darkTheme
}

export const AppThemeProvider = ({ children }: IThemeProviderProps) => {
  const [themeState, setThemeState] = useState(false)

  const toogleTheme = () => {
    setThemeState(state => !state)
  }

  const value = {
    themeState,
    toogleTheme
  }

  return (
    <AppThemeContext.Provider value={value}>
      <ThemeProviderStyled
         theme={themeState ? themes.darkTheme : themes.lightTheme }
      >
        {children}
      </ThemeProviderStyled>
    </AppThemeContext.Provider>
  )
}

export const useAppTheme = () => {
  const context = useContext(AppThemeContext)

  if (!context) {
      throw Error('useAppTheme must be used within a AppThemeProvider')
  }
  return context
}