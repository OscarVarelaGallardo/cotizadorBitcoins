import React from 'react'
import styled from '@emotion/styled'


const Form = styled.form`
display: flex;
flex - direction: column;
align - items: flex - start;
width: 100 %;

margin: 10px;
@media(min - width: 375px) {

}
    `
const Input = styled.input`
    background-color: white;
    border: 1px solid #9497FF;
    border-radius: 6px;
    padding: .5px;
    color: black;
    margin-bottom: 10px;
    margin-top: 10px;
    min-width: 100%;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    

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
    padding: 10px  30px 10px 30px;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    width: 80%;
    min-width: 80%;

    
    
    &:hover {
        background-color: rgba(148, 151, 255, 0.8); 
        cursor: pointer;
    }
    @media (min-width: 375px) {
        padding: 10px  50px 10px 50px;
        width: 280px;
        min-width: 280px;
      
    }   


    `
const Label = styled.label`
    color: white;
    font-weight: normal;
    Font-family: 'Inter', sans-serif;
    width: 100%;
    min-width: 100%;
    `

const FormularioRegistro = () => {
  return (

      <Form >
          <div>
              <Label
                for="nombre"
              >Nombre</Label>
              <Input
                  type="text"
                  id="nombre"
                  placeholder="Ejemplo: Juan"/>
              <Label>Fecha de Nacimiento</Label>
              <Input type="date"></Input>

              <Label>Correo Electrónico</Label>
              <Input
                  type="email"
                  placeholder="Ejemlo:correo@correo.com"/>
              <Label>Contraseña</Label>
              <Input
                  type="password"
                  placeholder="Ejemplo: 123456" />
              <Label >Repite tu contraseña</Label>
              <Input  type="password"placeholder="Ejemplo: 123456" />
              <div
                  style={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                  }}
              >


                  <Button>REGISTRARSE</Button>
              </div>
          </div>

      </Form>
  )
}

export default FormularioRegistro