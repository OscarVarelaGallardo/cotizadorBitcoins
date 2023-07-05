import React from 'react'
import styled from '@emotion/styled'
import img from '../img/imagen-criptos.png'

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
    width: 10%;
    height: 40px;
    border-radius: 5px;
    border: none;
    margin-bottom: 20px;
    margin-top: 10px;
    fontFamily: 'Inter', sans-serif;

    @media (min-width: 375px) {
        width: 100%;
        height: 30px;

    }
  
    @media (min-width: 768px) {
        width: 100%;
        height: 40px;
    }
    @media (min-width: 1024px) {
        width: 100%;  
        height: 40px;
    }
    @media (min-width: 1440px) {
        width: 100%;
        height: 40px;
    }

   

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


const Login = () => {
  return (
    <Container>
      <H1>COTIZA <Span>CRIPTOMONEDAS </Span>AL INSTANTE </H1>
      <Line />
      <Imagen src={img} />
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Form action="">
           <Label htmlFor="">Correo electrónico</Label>
              <Input type="text" />
             <Label htmlFor="" >Contraseña</Label>
              <Input type="password" />
            <Button >Iniciar sesión</Button>
            <P>
              <A href="#">¿Olvidaste tu contraseña?</A>
            </P>
        </Form>
      </div>


    </Container>

  )
}

export default Login