import React from 'react'
import styled from '@emotion/styled'


const FormularioRegistro = ({ handleChangeData, handleSubmit }) => {
   



    return (
        <>

            <Form
                onSubmit={handleSubmit} >
               
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
                        htmlFor="apellidos"
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
                        security='off'
                        size={10}
                        placeholder="Ejemplo: 01/01/2000"
                        yearRange="1950:2005"
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
                        autoComplete='true'
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
                        minLength='8'
                        max={20}
                        onChange={e => handleChangeData(e)}
                    />
                    <Label
                        htmlFor='repetPassword'
                    >Repite tu contraseña</Label>
                    <Input
                        name='repetPassword'
                        id='repetPassword'
                        type="password"
                        minLength='8'
                        max={20}
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
