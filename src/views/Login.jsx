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
const H1 = styled.h1`
                    textAlign: center;
                    color: white;
                    margin-top: 50px;
                    margin-bottom: 50px;
                    font-size: 40px;     
                   justify-content: center;


    `
const Span = styled.span`
    color: #9497FF;
    `
const Line = styled.div`
                    width: 100%;
                    height: 3px;
                    background-color: #9497FF;
    `
const Imagen = styled.img`
    display: flex;
    
    width: 35%;
    height: 35%;
    `
const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    margin-bottom: 20px;
    margin-top: 10px;
    fontFamily: 'Inter', sans-serif;

    `

const Button = styled.button`
    background-color: #377BAA;
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
        <form action=""
          style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '25px',
          }}
        >
        
            <label
              style={{
                color: 'white',
                //Bold
                fontWeight: 'bold',
                fontSize: '20px',
                fontFamily: 'Inter',
              
              }}

              htmlFor="">Correo electrónico
            </label>
         

          <Input type="text" />
         
            <label htmlFor=""
              style={{
                color: 'white',
                //Bold
                fontWeight: 'bold',
                fontSize: '20px',
                fontFamily: 'Inter',
              }}
            >Contraseña</label>
          
          <Input type="password" />
          <Button 
            
          >Iniciar sesión</Button>
        </form>
      </div>


    </Container>

  )
}

export default Login