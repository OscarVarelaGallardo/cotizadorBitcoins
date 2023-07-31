import { createContext, useState } from 'react'

const ConfigUserContext = createContext()

const ConfigUserProvider = ({ children }) => {
  const [configUser, setConfigUser] = useState({})

  return (
    <ConfigUserContext.Provider value={{
      configUser,
      setConfigUser
    }} >
      {children}
    </ConfigUserContext.Provider>
  )
}

export { ConfigUserProvider }
export default ConfigUserContext
