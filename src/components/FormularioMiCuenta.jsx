import React from 'react'
import styled from '@emotion/styled'
import { useState,useContext } from 'react'
import { formateDateForInputDate } from '../helpers/index'
import  AuthContext  from '../context/AuthProvider'
const FormularioMiCuenta = ({ isUserPremium }) => {
  
    const { user, setUser } = useContext(AuthContext)
    

    const handleChangeData = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    const { nombre, apellidos, fecha_nacimiento, email } = user
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
            value={nombre}
        />
        <Label>
            Apellidos   
        </Label>
        <Input
            type='text'
            name='apellidos'
            placeholder='Apellidos'
            onChange={handleChangeData}
            
            value={apellidos}
        />
        <Label>
            Fecha de nacimiento
        </Label>
        <Input
            type='date'
            name='fecha_nacimiento'
            placeholder='Fecha de nacimiento'
            onChange={handleChangeData}
            value={formateDateForInputDate(fecha_nacimiento)}
           
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
            value={email}
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
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
   
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    margin-bottom: 0.5rem;
   
    `
const Button = styled.button`
    width: 30%;
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
