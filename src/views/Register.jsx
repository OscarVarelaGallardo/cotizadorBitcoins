import React, { useState, useEffect } from 'react'
import img from '../img/imagen-criptos.png'
import FormularioRegistro from '../components/FormularioRegistro'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Error from '../components/Error'
import Spinner from '../components/Spinner'
import { sendRegister } from '../helpers/index'
import {
  Container,
  H1,
  Span,
  Line,
  TituloFormulario,
  ContainerFormulario,
  Imagen,
  Linka
} from '../styles/RegisterStyles'

const Register = () => {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [newUser, setNewUser] = useState({
    nombre: '',
    apellidos: '',
    fecha_nacimiento: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChangeData = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })

    // eslint-disable-next-line camelcase
    const { nombre, apellidos, fecha_nacimiento, email, password, repetPassword } = newUser
    // eslint-disable-next-line camelcase
    if (nombre.trim() === '' || fecha_nacimiento.trim() === '' || email.trim() === '' || password.trim() === '' || apellidos.trim() === '') {
      setError(true)

      return
    }

    if (password !== repetPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas no coinciden'
      })
      setIsLoading(false)
      return
    }
    setError(false)

    sendRegister(newUser)
      .then(res => {
        setIsLoading(false)
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'Bienvenido a CriptoMonedas al instante'
        })
        navigate('/login')
      }
      )
      .catch(() => {
        setIsLoading(false)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El email ya está registrado'
        })
      }
      )
  }

  return (
        <Container>
            <Linka to="/">
                <H1 >COTIZA <Span>CRIPTOMONEDAS </Span>AL INSTANTE </H1>
            </Linka>
            <Line />{
                isLoading
                  ? <Spinner
                    text="Enviando registro espere unos momentos..."

                />
                  : <>
                        <TituloFormulario>REGISTRATE</TituloFormulario>

                        {error ? <Error>Todos los campos son obligatorios</Error> : null}
                        <ContainerFormulario >
                            <FormularioRegistro

                                handleSubmit={handleSubmit}
                                handleChangeData={handleChangeData}
                                setError={setError}
                            />
                            <Imagen src={img} alt="imagen-bitcoin" />
                        </ContainerFormulario>
                    </>
            }
        </Container>
  )
}

export default Register
