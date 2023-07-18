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

export default sendData