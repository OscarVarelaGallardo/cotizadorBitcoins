import styled from '@emotion/styled'
import { useState, useContext } from 'react'
import AuthContext from '../context/AuthProvider'
import Swal from 'sweetalert2'
import Error from './Error'
const Message = () => {
  const [message, setMessage] = useState({})
  const [error, setError] = useState(false)
  const { user } = useContext(AuthContext)
  const { email } = user

  const sendMessage = async (message) => {
    try {
      const response = await fetch('https://bitcoinsbackend.onrender.com/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)

      })
      const json = await response.json()

      if (json.statusCode === 201) {
        Swal.fire({
          icon: 'success',
          title: '¡Mensaje enviado correctamente!',
          showConfirmButton: true,
          timer: 1500
        })
        setMessage({
          name: '',
          message: ''
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salió mal!'
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleChangeData = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!user?.email) {
      console.log('no hay email')
      return setError(true)
    }
    const newMessage = Object.assign(message, { email })
    sendMessage(newMessage)
    setError(false)
  }

  return (
    <ContainerMessage>
        {error
          ? <Error> Debes  tener una cuenta para poder enviar un mensaje </Error>
          : null}
        <Text> Dejanos tu comentario</Text>
          <label htmlFor="name"></label>
        <Input
        id="name"
            onChange={e => handleChangeData(e)}
            value={message.name}
        type="text" placeholder="Nombre" name='name' />

      <label htmlFor="message"></label>
        <TextArea
            id="message"
            onChange={e => handleChangeData(e)}
            value={message.message}
        placeholder="Mensaje" name='message' />
        <Button
            type='submit'
            onClick={handleSubmit}
        >Enviar</Button>
    </ContainerMessage>
  )
}

export default Message
const ContainerMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

`
const Button = styled.button`
    width: 10%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #000;
    outline: none;
    font-size: 1.2rem;
    font-family: 'PT Sans', sans-serif;
    max-width: 500px;
    cursor: pointer;
    background-color: #000;
    color: #fff;
    transition: all .3s ease;
    &:hover{
        background-color: #fff;
        color: #000;
    }
`

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #fff;
    outline: none;
    font-size: 1.2rem;
    font-family: 'PT Sans', sans-serif;
    max-width: 800px;
    

`
const TextArea = styled.textarea`

    max-width: 800px;
    height: 200px;

    width: 100%;
    padding: 10px;
    margin-bottom: 0.5rem;
    border-radius: 5px;
    border: 1px solid #000;
    outline: none;
    font-size: 1.2rem;
    font-family: 'PT Sans', sans-serif;
    resize: none;
   

`
const Text = styled.h2`
    font-size: 1.5rem;
    font-family: 'PT Sans', sans-serif;
    margin-bottom: 10px;
    color: #fff;
    text-align: center;
    max-width: 800px;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
  `
