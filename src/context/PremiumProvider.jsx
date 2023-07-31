import { createContext, useState } from 'react'

const PremiumContext = createContext()

const PremiumProvider = ({ children }) => {
  const [isUserPremium, setIsUserPremium] = useState(false)

  return (
            <PremiumContext.Provider value={{
              isUserPremium,
              setIsUserPremium
            }} >
                {children}
            </PremiumContext.Provider>
  )
}

export {
  PremiumProvider
}

export default PremiumContext
