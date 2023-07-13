import React, { useState } from 'react'
import styled from '@emotion/styled'
import img from '../img/imagen-criptos.png'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const URL = 'https://cotiza-bitcoin.onrender.com/login';
const Login = () => {
    const [response, setResponse] = useState([])
    const [dataUser, setDataUser] = useState({
        'email': '',
        'password': ''
    })
    const navigate = useNavigate();


    const sendData = (URL, { password, email }) => {

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,

            })
        })
            .then(response => response.json())
            .then(data => {setResponse(data) })
    }
         
    const handleSubmit = (e) => {
    
        e.preventDefault()
        const { email, password } = dataUser
      
        if (email.trim() === '' || password.trim() === '') {
           Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios',
            })
            return
        }
            
        sendData(URL, dataUser)

        
       if(response.message !== 'Inicio de sesión exitoso'){
        
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrectos',
        })
           
        }
       if(response.message === 'Inicio de sesión exitoso'){
        Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            text: 'Inicio de sesión exitoso',
        })
        
      
        return navigate('/')
     

       }
       else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrectos',
        })
       }
         
    }

    const handleChangeData = (e) => {
        setDataUser({
            ...dataUser,
            [e.target.name]: e.target.value
        })
    }

       


    return (
        <Container>
            <Linka to="/">
                <H1>COTIZA <Span>CRIPTOMONEDAS </Span>AL INSTANTE </H1>
            </Linka>
            <Line />
            <Imagen src={img} />
            <FormularioContainer>
                <Form
                    onSubmit={handleSubmit}
                >
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input type="text"
                        id='email'
                        onChange={e => handleChangeData(e)}
                        name='email'
                            
                        />
                    <Label  htmlFor="password" >Contraseña</Label>
                    <Input 
                        type="password"
                        onChange={e => handleChangeData(e)}
                        name='password'
                        id='password'
                        />
                    <Button
                        type='submit'
                    >Iniciar sesión</Button>
                    <P>
                        <A href="#">¿Olvidaste tu contraseña?</A>
                    </P>
                </Form>
            </FormularioContainer>


        </Container>

    )
}

export default Login

const FormularioContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    `

const Linka = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 20px;
    `

const Container = styled.div`

  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  `

const Form = styled.form`
 width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  `
const H1 = styled.h1`
  textAlign: center;
 color: white;
   font-size: 20px;     
   justify-content: center;
 


  @media (min-width: 375px) {
  font-size: 30px;
  text-align: center;
  text-decoration: none;

  }
  @media (min-width: 768px) {
  font-size: 40px;
  text-align: center;
  }
  @media (min-width: 1024px) {
  font-size: 40px;
  text-align: center;
  }
  @media (min-width: 1440px) {
  font-size: 40px;
  text-align: center;
  }



    `
const Span = styled.span`
    color: #9497FF;

    `
const Line = styled.div`
                    width: 100%;
                    height: 3px;
                    background-color: #9497FF;
                    @media (min-width: 375px) {
                        width: 50%;
                    }
                    @media (min-width: 768px) {
                        width: 50%;
                    }
                    
    `
const Imagen = styled.img`
    display: flex;
    width: 35%;
    height: 35%;
    @media (min-width: 375px) {
        width: 45%;
    }
    @media (min-width: 768px) {
        width: 35%;
        height: 35%;
    }
    @media (min-width: 1024px) {
        width: 25%;
        height: 35%;
       
    }
    @media (min-width: 1440px) {
        width: 40%;
       max-width: 320px;
    `
const Input = styled.input`
   
    width: 100%;
    height: 40px;
    max-width: 620px;
    padding: 1px;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #9497FF;
    `

const Button = styled.button`
    background-color: #9497FF;
    padding: 10px  100px 10px 100px;
    text-transform: uppercase;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
   
    
    &:hover {
        background-color: #2A5F8A;
        cursor: pointer;
    }
    @media (min-width: 375px) {
        padding: 10px  50px 10px 50px;
        width: 280px;
        
    }

    `
const P = styled.p`
    color: white; 
    font-size: 15px;
    margin-top: 10px;
    @media (min-width: 375px) {
        font-size: 10px;
    }
    @media (min-width: 768px) {
        font-size: 15px;
    }
    @media (min-width: 1024px) {
        font-size: 15px;
    }
    @media (min-width: 1440px) {
        font-size: 15px;
    }
    `
const A = styled.a`
    color: white;
    text-decoration: none;
    font-size: 15px;
    @media (min-width: 375px) {
        font-size: 10px;
    }
    @media (min-width: 768px) {
        font-size: 15px;
    }
    @media (min-width: 1024px) {
        font-size: 15px;
    }
    @media (min-width: 1440px) {
        font-size: 15px;
    }
    `
const Label = styled.label`
    color: white;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 10px;
    font-family: Roboto, sans-serif;
    @media (min-width: 375px) {
        font-size: 16px;
    }
    @media (min-width: 768px) {
        font-size: 18px;
    }
    @media (min-width: 1024px) {
        font-size: 20px;
    }
   
    `
