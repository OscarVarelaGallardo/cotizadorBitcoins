export const getBitcoinData = async (
  configUser
) => {
  if (!configUser) {
    return
  }
  const { monedas, monedasFavoritas } = configUser

  try {
    const URL = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=MXN'
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.ok) {
      const data = await response.json()
      console.log({ value: data })
      const bitcoinData = {
        value: data.MXN
      }
      return bitcoinData
    }
  } catch (error) {
    console.log(error)
  }
}

export default getBitcoinData
