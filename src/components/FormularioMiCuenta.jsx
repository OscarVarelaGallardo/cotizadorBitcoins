import React from 'react'
import styled from '@emotion/styled'

const FormularioMiCuenta = ({isUserPremium}) => {

    const handleChangeData = (e) => {
        console.log(e.target.value)
    }

  return (
    <ContainerForm>
        <Label>
            Nombre
        </Label>
        <Input
            type='text'
            name='nombre'
            placeholder='Nombre'
            onChange={handleChangeData}
        />
        <Label>
            Apellidos   
        </Label>
        <Input
            type='text'
            name='apellidos'
            placeholder='Apellidos'
            onChange={handleChangeData}
        />
        <Label>
            Fecha de nacimiento
        </Label>
        <Input
            type='date'
            name='fecha_nacimiento'
            placeholder='Fecha de nacimiento'
            onChange={handleChangeData}
        />
        <Label>
            Email
        </Label>
        <Input
            type='email'
            name='email'
            placeholder='Email'
            onChange={handleChangeData}
            disabled
        />
        <Label>
            Contraseña
        </Label>
        <Input
            type='password'
            name='password'
            placeholder='Contraseña'
            onChange={handleChangeData}
        />
       {
              !isUserPremium? <Button>
                  Guardar
              </Button>: null
       }
    
    </ContainerForm>
  )
}

export default FormularioMiCuenta

const ContainerForm = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
  
    `

const Label = styled.label`
    font-size: 1rem;
    font-weight: 700;
    display: block;
    color: white;
    font-family: 'Inter', sans-serif;
    margin-bottom: 0.5rem;
    `
const Input = styled.input`
    width: 90%;
    background-color: white;
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    margin-bottom: 0.5rem;
   
    `
const Button = styled.button`
    width: 90%;
    background-color: #66A2FE;
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    font-weight: 700;
    margin-top: 2rem;
    
    `
