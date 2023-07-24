import React, { useState, useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import sendData, { postUserData } from '../helpers/index.js'
import AuthContext from '../context/AuthProvider'
import Spinner from '../components/Spinner'
import Header from '../components/Header'

import {
  Container,
  FormularioContainer,
  Form,
  Label,
  Input,
  Button,
  P,
  A
} from '../styles/LoginStyles.js'

const Login = () => {
  const [dataUser, setDataUser] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const { setIsAuth, setUser } = useContext(AuthContext)

  const handleSubmit = (e) => {
    setIsLoading(true)
    e.preventDefault()
    const { email, password } = dataUser

    if (email.trim() === '' || password.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios'
      })
      return
    }
    sendData(dataUser)

      .then((data) => {
        if (data) {
          setIsAuth(true)
          postUserData(dataUser)
            .then((data) => {
              setUser(data)
            })
          Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            timer: 1500
          })
          setIsLoading(false)
          navigate('/')
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrectos'
          })
          setIsLoading(false)
        }
      }
      )
  }

  const handleChangeData = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value
    })
  }

  return (
        <Container>
            <Header />
            {
                isLoading
                  ? <Spinner text='Iniciando sesión ...' />
                  : <FormularioContainer>
                        <Form
                            onSubmit={handleSubmit}>
                            <Label htmlFor="email">Correo electrónico</Label>
                            <Input type="text"
                                id='email'
                                onChange={e => handleChangeData(e)}
                                name='email'
                                placeholder='correo@correo.com'/>
                            <Label htmlFor="password" >Contraseña</Label>
                            <Input
                                type="password"
                                onChange={e => handleChangeData(e)}
                                name='password'
                                id='password'
                                placeholder='*********'
                                minLength='8'
                                max={20}
                            />
                            <Button
                                type='submit'
                            >Iniciar sesión</Button>
                            <P>
                                <A href="#">¿Olvidaste tu contraseña?</A>
                            </P>
                        </Form>
            </FormularioContainer>
}

        </Container>

  )
}

export default Login
