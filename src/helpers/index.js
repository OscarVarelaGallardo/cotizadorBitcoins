const sendData = async (URL, { password, email }) => {

    try {
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

        throw new Error('Request failed!')
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

export { formateDateForInputDate }

export default sendData