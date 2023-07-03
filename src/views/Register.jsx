import React from 'react'
import styled from '@emotion/styled'
import img from '../img/imagen-criptos.png'
import FormularioRegistro from '../components/FormularioRegistro'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20%;
    margin-right: 20%;
    
    `
const Span = styled.span`
    color: #9497FF;
    `
const TituloFormulario = styled.h2`
    color: white;
    margin-top: 50px;
 
    `

const H1 = styled.h1`
                    textAlign: center;
                    color: white;
                    margin-top: 50px;
                    margin-bottom: 50px;
                    font-size: 40px;                 
    `
const Line = styled.div`
                    width: 100%;
                    height: 3px;
                    background-color: #9497FF;
    `

    const Imagen = styled.img`
    width: 70%;
    height: 80%;
    margin-left: 40%;
    `

const Register = () => {
    return (
        <Container>
            <H1>COTIZA <Span>CRIPTOMONEDAS </Span>AL INSTANTE </H1>
            <Line />
            <TituloFormulario>REGISTRARSE</TituloFormulario>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row'
                }} >

            </div>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                <FormularioRegistro />

                <div
                    style={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                    <Imagen src={img} alt="imagen"  />

                </div>
            </div>

        </Container>
    )
}

export default Register