import React from 'react'
import styled from '@emotion/styled'
import img from '../img/imagen-criptos.png'
import FormularioRegistro from '../components/FormularioRegistro'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    margin:10px;
    @media (min-width: 375px) { 
        
    }
    
    `

const ContainerFormulario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;

    @media (min-width: 375px) {
        margin-left: 10%;

    }
    `
const Span = styled.span`
    color: #9497FF;
    `
const TituloFormulario = styled.h2`
    color: white;
    font-size: 20px;
    Font-family: 'Inter', sans-serif;
    @media (min-width: 375px) {
        margin-left: 10%;
        
    }
    
 
    `

const H1 = styled.h1`
                    textAlign: center;
                    color: white;
                    Font-family: 'Inter', sans-serif;
                    font-size: 40px;      
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
    `
const Line = styled.div`
                    width: 20%;    
                    background-color: #9497FF;
                    height: 5px;
                  
                    margin-left: 20%;
                    @media (min-width: 375px) {
                        width: 40%;
                        margin-left: 30%;
                    }
    `

    const Imagen = styled.img`
    width: 70%;
    height: 80%;
    margin-left: 40%;
    
    @media (min-width: 375px) {
      display: none;

    }


    `

const Register = () => {
    return (
        <Container>
            <H1>COTIZA <Span>CRIPTOMONEDAS </Span>AL INSTANTE </H1>
            <Line />
            <TituloFormulario>REGISTRATE</TituloFormulario>
            <ContainerFormulario >
                <FormularioRegistro />
                <Imagen src={img} alt="imagen"  />
            </ContainerFormulario>
        </Container>
    )
}

export default Register