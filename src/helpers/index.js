const sendData = async ({ password, email }) => {
  try {
    const URL = 'https://cotiza-bitcoin.onrender.com/login'
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    })

    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (error) {
    console.log(error)
  }
}

const postUserData = async ({ email }) => {
  try {
    const URL = 'https://cotiza-bitcoin.onrender.com/bituser/getUserEmail'
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })

    if (response.ok) {
      const data = await response.json()

      return data
    }
  } catch (error) {
    console.log(error)
  }
}

const updateUserData = async (userEdit, id) => {
  if (userEdit.password) {
    try {
      const { oldPassword, password } = userEdit
      const URL = `https://cotiza-bitcoin.onrender.com/login/updatePass/${id}`
      console.log('enviando password')
      const response = await fetch(URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contrasenaAntigua: oldPassword,
          contrasenaNueva: password
        })

      })
      if (response.ok) {
        const data = await response.json()
        return data
      }
    } catch (error) {
      console.log(error)
    }
  }

  try {
    const { nombre, apellidos } = userEdit
    const URL = `https://cotiza-bitcoin.onrender.com/bituser/updateUserData/${id}`
    const response = await fetch(URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre,
        apellidos
      })

    })
    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (error) {
    console.log(error)
  }
}

const formateDateForInputDate = (date) => {
  const dateObj = new Date(date)
  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() + 1
  const day = dateObj.getDate()

  return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
}

// eslint-disable-next-line camelcase
const sendRegister = async ({ nombre, apellidos, fecha_nacimiento, email, password }) => {
  try {
    const URL = 'https://cotiza-bitcoin.onrender.com/login/register'
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre,
        apellidos,
        // eslint-disable-next-line camelcase
        fecha_nacimiento,
        email,
        password

      })

    })
      .then(response => response.json())
      .then(data => console.log(data))
  } catch (error) {
    console.log(error)
  }
}

const getPreferences = async (id) => {
  try {
    const URL = `https://cotiza-bitcoin.onrender.com/bitpro/getUserProData/${id}`
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }

    })
    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (error) {
    console.log(error)
  }
}

export { formateDateForInputDate, postUserData, updateUserData, sendRegister, getPreferences }

export default sendData
