import React from 'react'
import styled from '@emotion/styled'
import img from '../img/imagen-criptos.png'
import FormularioRegistro from '../components/FormularioRegistro'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import Error from '../components/Error'
import Spinner from '../components/Spinner'
import { sendRegister } from '../helpers/index'



const Register = () => {
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [newUser, setNewUser] = useState({
        nombre: '',
        apellidos: '',
        fecha_nacimiento: '',
        email: '',
        password: '',
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

        const { nombre, apellidos, fecha_nacimiento, email, password, repetPassword } = newUser
        if (nombre.trim() === '' || fecha_nacimiento.trim() === '' || email.trim() === '' || password.trim() === '' || apellidos.trim() === '') {
            setError(true)

            return
        }


        if (password !== repetPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Las contraseñas no coinciden',
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
                    text: 'Bienvenido a CriptoMonedas al instante',
                })
                navigate('/login')
            }
            )
            .catch(err => {
                setIsLoading(false)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El email ya está registrado',
                })
            }
            )

            


            
            
          
    }




    return (
        <Container>
            <Linka to="/">
                <H1  >COTIZA <Span>CRIPTOMONEDAS </Span>AL INSTANTE </H1>
            </Linka>
            <Line />{
                isLoading ? <Spinner
                    text="Enviando registro espere unos momentos..."
                      
                    /> :
                    <>
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


const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;

    @media (min-width: 375px) {
            max-width: 320px;

    }
    @media (min-width: 750px) {
        max-width: 1200px;
       
    `
const Linka = styled(Link)`
    text-decoration: none;
    `

const ContainerFormulario = styled.div`

    @media (min-width: 375px) {
          
    }
        
        @media (min-width: 750px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 2rem;
            
    `

const Span = styled.span`
    color: #9497FF;
    `
const H1 = styled.h1`
    color: white;
    font-size: 2rem;
    Font-family:'Roboto', 'Inter', sans-serif;
    margin-bottom: 2rem;
    textdecoration: none;     
    
    

    `
const TituloFormulario = styled.h2`
    color: white;
    font-size: 20px;
    Font-family: 'Inter', sans-serif;
    margin-bottom: 10px;
    
    
 
    `


const Line = styled.div`
                    width: 60%;    
                    background-color: #9497FF;
                    height: 5px;
                   
                   
    `

const Imagen = styled.img`

        @media (min-width: 375px) {
            display: none;
        }
                  
        @media (min-width: 750px) {
            display: block;
            max-width: 400px;
            width: 80%;
            margin: 100px auto 0 auto;
            
        }
    `


export default Register