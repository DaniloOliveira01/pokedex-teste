import { 
  createContext,
  ReactNode, 
  useContext, 
  useEffect, 
  useState
} from 'react'

type AuthProps = {
  email: string
  login: (email: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthProps | null>(null)

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
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