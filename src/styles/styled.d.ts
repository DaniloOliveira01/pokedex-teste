import { lightTheme } from '@/styles/light-theme'

type Theme = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}