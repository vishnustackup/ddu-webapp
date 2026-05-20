import { createContext, useState } from "react"

export const AuthProvider = createContext()

const AuthContext = ({children}) => {
    const [user,setuser]= useState(null)
  return (
    <AuthProvider.Provider value={{user, setuser}}>
      {children}
    </AuthProvider.Provider>
  )
}

export default AuthContext
