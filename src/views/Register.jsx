import React from 'react'
import styled from '@emotion/styled'
import img from '../img/imagen-criptos.png'
import FormularioRegistro from '../components/FormularioRegistro'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newUser)



    }
    return (
        <Container>
            <Linka
                to="/">
                <H1
                >COTIZA <Span>CRIPTOMONEDAS </Span>AL INSTANTE </H1>
            </Linka>
            <Line />
            <TituloFormulario>REGISTRATE</TituloFormulario>
            <ContainerFormulario >
                <FormularioRegistro
                    handleSubmit={handleSubmit}
                />
                <Imagen src={img} alt="imagen-bitcoin" /> 
            </ContainerFormulario>
        </Container>
    )
}


const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;

    @media (min-width: 375px) {
            max-width: 320px;

    }
    @media (min-width: 750px) {
        max-width: 1200px;
       
    `
const Linka = styled(Link)`
    text-decoration: none;
    `

const ContainerFormulario = styled.div`

    @media (min-width: 375px) {
          
    }
        
        @media (min-width: 750px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 2rem;
            
    `

const Span = styled.span`
    color: #9497FF;
    `
const H1 = styled.h1`
    color: white;
    font-size: 2rem;
    Font-family:'Roboto', 'Inter', sans-serif;
    margin-bottom: 2rem;
    textdecoration: none;     
    
    

    `
const TituloFormulario = styled.h2`
    color: white;
    font-size: 20px;
    Font-family: 'Inter', sans-serif;
    margin-bottom: 10px;
    
    
 
    `


const Line = styled.div`
                    width: 60%;    
                    background-color: #9497FF;
                    height: 5px;
                   
                   
    `

const Imagen = styled.img`

        @media (min-width: 375px) {
            display: none;
        }
                  
        @media (min-width: 750px) {
            display: block;
            max-width: 400px;
            width: 80%;
            margin: 100px auto 0 auto;
            
        }
    `


export default Register