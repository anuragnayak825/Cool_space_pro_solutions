import React, { useState } from 'react'
import { createContext } from 'react'
export const AuthContext = createContext()

export default function Authprovider({ children }) {
  const [show, setShow] = useState()
  return (
    <AuthContext.Provider value={{ show, setShow }}>
      {children}
    </AuthContext.Provider>
  );
}
