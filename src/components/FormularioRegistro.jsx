import React from 'react'
import styled from '@emotion/styled'
import { useState } from 'react'
import Error from './Error'
import Swal from 'sweetalert2'

const FormularioRegistro = () => {
    const [error, setError] = useState(false)
    const [newUser, setNewUser] = useState({
        nombre: '',
        apellidos: '',
        fecha_nacimiento: '',
        email: '',
        password: '',
    })

    const sendRegister = ({nombre, apellidos, fecha_nacimiento, email, password}) => {
        const URL = 'https://cotiza-bitcoin.onrender.com/login/register';
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre,
                apellidos,
                fecha_nacimiento,
                email,
                password,

            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
        console.log(newUser)
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
            return
        }
        setError(false)

        console.log(newUser);


        sendRegister(newUser)
    }

    const handleChangeData = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>

            <Form
                onSubmit={handleSubmit} >
                {error ? <Error>Todos los campos son obligatorios</Error> : null}
                <div>
                    <Label
                        htmlFor="nombre"
                    >Nombre(s)</Label>
                    <Input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Ejemplo: Juan"
                        onChange={e => handleChangeData(e)}
                    />
                    <Label
                        htmlFor="apellido"
                    >Apellidos</Label>
                    <Input
                        type="text"
                        id="apellidos"
                        name="apellidos"
                        placeholder="Ejemplo: Perez"
                        onChange={e => handleChangeData(e)}
                    />

                    <Label
                        htmlFor='fecha_nacimiento'
                    >Fecha de Nacimiento</Label>
                    <Input
                        name='fecha_nacimiento'
                        id='fecha_nacimiento'
                        type="date"
                        onChange={e => handleChangeData(e)}
                    ></Input>

                    <Label
                        htmlFor='email'
                    >Correo Electrónico</Label>
                    <Input
                        name='email'
                        id='email'
                        type="email"
                        placeholder="Ejemplo:correo@correo.com"
                        onChange={e => handleChangeData(e)}
                    />
                    <Label
                        htmlFor='password'

                    >Contraseña</Label>
                    <Input
                        name='password'
                        id='password'
                        type="password"
                        placeholder="Ejemplo: !12%&/()=?¡"
                        onChange={e => handleChangeData(e)}
                    />
                    <Label
                        htmlFor='repetPassword'
                    >Repite tu contraseña</Label>
                    <Input
                        name='repetPassword'
                        id='repetPassword'
                        type="password"
                        onChange={e => handleChangeData(e)}
                        placeholder="Ejemplo: !12%&/()=?¡" />
                    <div>
                        <Button
                            type='submit'

                        >REGISTRARSE</Button>
                    </div>
                </div>

            </Form>
        </>
    )
}

export default FormularioRegistro



const Form = styled.form`
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 80%;
    margin-top: 20px;
    
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
