import { createContext, useState } from 'react'

const ConfigUserContext = createContext()


const ConfigUserProvider = () => {
    const [config, setConfig] = useState({
       
    })

  return (
   <ConfigUserContext.Provider value={{config}}>
        {children}
    </ConfigUserContext.Provider>

        

  )
}

export {
    ConfigUserProvider
}

export default ConfigUserProvider