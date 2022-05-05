import { 
  createContext,
  useContext, 
  useEffect, 
  useState
} from 'react'

import { 
  IAuthProps, 
  IAuthProviderProps 
} from '@/@types/type-hooks'

const AuthContext = createContext<IAuthProps | null>(null)

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [email, setEmail] = useState('')

  const login = (email: string) => {
    setEmail(email)

    localStorage.setItem('@poke:email', email)
  }

  useEffect(() => {
    const getEmailFromStorage = () => {
      const emailStorage = localStorage.getItem('@poke:email')

      if(emailStorage) {
        setEmail(emailStorage)
      }
    }
      getEmailFromStorage()
  }, [])

  const value = {
    email,
    login,
    logout: () => {},
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw Error('useAuth must be used within a AuthProvider')
  }

  return context
}