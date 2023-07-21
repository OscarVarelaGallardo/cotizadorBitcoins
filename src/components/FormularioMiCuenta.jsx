
import styled from '@emotion/styled'
import { useState,useContext } from 'react'
import { formateDateForInputDate, updateUserData } from '../helpers/index'
import  AuthContext  from '../context/AuthProvider'
import Error from './Error'

const FormularioMiCuenta = ({ isUserPremium }) => {
  
    const { user, setUser } = useContext(AuthContext)
    const [userEdit, setUsetEdit ] = useState({})
    const [error , setError] = useState(false)

    const handleChangeData = (e) => {
        setUsetEdit({
            ...userEdit,
            [e.target.name]: e.target.value
        })
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (userEdit.password === userEdit.repetir_password) {
            updateUserData(userEdit, id)
            setError(false)
        } else {

            setError(true)
        }
    }

    const { nombre, apellidos, fecha_nacimiento, email,id } = user
      

    return (
        <>

        {
            error ? <Error >Las contraseñas no coinciden</Error> : null
        }
    <ContainerForm>
        <Label
            htmlFor='nombre'
        >
            Nombre
        </Label>
        <Input
            type='text'
            name='nombre'
            placeholder='Nombre'
            onChange={handleChangeData}
            value={nombre}
        />
        <Label
            htmlFor='apellidos'
        >
            Apellidos   
        </Label>
        <Input
            type='text'
            name='apellidos'
            placeholder='Apellidos'
            onChange={handleChangeData}
            value={apellidos}
        />
        <Label
            htmlFor='fecha_nacimiento'
        >
            Fecha de nacimiento
        </Label>
        <Input
            type='date'
            name='fecha_nacimiento'
            placeholder='Fecha de nacimiento'
            onChange={handleChangeData}
            value={formateDateForInputDate(fecha_nacimiento)}
            disabled
            style={{color:'white'}}
           
        />
        <Label
            htmlFor='email'
        >
            Email
        </Label>
        <Input
            type='email'
            name='email'
            placeholder='Email'
            onChange={handleChangeData}
            disabled
            value={email}
            style={{color:'white'}}
        />
        <Label
            htmlFor='password'
        >
            Modificar contraseña
        </Label>
        <Input
            type='password'
            name='password'
            placeholder='Contraseña'
            onChange={handleChangeData}
        />
        <Label
            htmlFor='repetir_password'
        >
            Confirmar contraseña
        </Label>
        <Input
            type='password'
            name='repetir_password'
            placeholder='Contraseña'
            onChange={handleChangeData}
            

        />


        
        
       {
              !isUserPremium? <Button
                    type='submit'
                    onClick={
                        handleSubmit
                    }

              >
                  Guardar
              </Button>: null
       }
    
    </ContainerForm>
        </>
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
