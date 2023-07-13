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
                <Imagen src={img} alt="imagen-bitcoin"  />
            </ContainerFormulario>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0 10%;
    margin:10px;
    @media (min-width: 375px) { 
       

    }
    @media (min-width: 768px) {
       
    }
    @media (min-width: 1024px) {
   
    }

    
    
    `
const Linka = styled(Link)`
    text-decoration: none;
    `

const ContainerFormulario = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    min-width: 60%;
    margin-top: 20px;
    
    @media (min-width: 375px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80%;
        min-width: 80%;
        margin-top: 20px;
    }
    @media (min-width: 1082 px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        min-width: 60%;
        margin-top: 20px;
    }
   

    `

const Span = styled.span`
    color: #9497FF;
    `
const H1 = styled.h1`
    color: white;
    font-size: 3rem;
    Font-family:'Roboto', 'Inter', sans-serif;
    margin-bottom: 2rem;
    textdecoration: none;     

    @media (min-width: 375px) {
      
        


    `
const TituloFormulario = styled.h2`
    color: white;
    font-size: 20px;
    Font-family: 'Inter', sans-serif;
    margin-bottom: 10px;
    

    @media (min-width: 375px) {
        margin-left: 0%;
        
    }
    @media (min-width: 768px) {
        margin-left: 15%;
    }
    @media (min-width: 1024px) {
        margin-left: 15%;
    }
    @media (min-width: 1440px) {
        margin-left: 15%;
    }
    
 
    `


const Line = styled.div`
                    width: 20%;    
                    background-color: #9497FF;
                    height: 5px;
                   
                    @media (min-width: 375px) {
                        width: 80%;
                      
                    }
                    @media (min-width: 768px) {
                        width: 70%;
                       

                    }
                    @media (min-width: 1024px) {
                        width: 40%;
                     
                    }
    `

const Imagen = styled.img`
    
    
    @media (min-width: 375px) {
       
        width: 50%;
        height: 50%;
        margin-left: 0%;
        max-width: 800px;


    }
    @media (min-width: 768px) {
        width: 50%;
        height: 60%;
          margin-left: 0%;
        max-width: 800px;
    }
    @media (min-width: 1024px) {
        width: 60%;
        height: 70%;
        margin-left: 0%;
        max-width: 800px;
      



    }

    `


export default Register