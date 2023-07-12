import React from 'react'
import styled from '@emotion/styled'
import img from '../img/imagen-criptos.png'
import FormularioRegistro from '../components/FormularioRegistro'
import { Link } from 'react-router-dom'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    margin:10px;
    @media (min-width: 375px) { 
        margin-left: 10%;
        

    }
    @media (min-width: 768px) {
        margin-left: 0%;
    }
    @media (min-width: 1024px) {
        margin-left: 15%;
    }

    
    
    `

const ContainerFormulario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;

    @media (min-width: 375px) {
        display: flex;
        flex-direction: column;
        
    }
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        margin-left: 15%;
    }
    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 50%;
       
    }
    `
const Span = styled.span`
    color: #9497FF;
    `
const H1 = styled.h1`
                    textAlign: center;
                    color: white;
                    Font-family: 'Inter', sans-serif;
                    font-size: 40px;  

                    @media (min-width: 375px) {
                        
                        font-size: 25px;
                        text-align: center;
                        margin-left: -5%;
                        min-width: 120px;
                        padding: 10px;
                    }
                    @media (min-width: 768px) {
                        font-size: 30px;
                        text-align: center;
                        margin-left: 15%;
                    }
                    @media (min-width: 1024px) {
                        font-size: 32px;
                        text-align: center;
                        display: flex;
                        position: absolute;
                        margin-left: 15%;
                        margin-top: -3%;
                        



                    }
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
                   
                  
                    margin-left: 20%;
                    @media (min-width: 375px) {
                        width: 80%;
                        margin-left: 0%;
                    }
                    @media (min-width: 768px) {
                        width: 70%;
                        margin-left: 15%;

                    }
                    @media (min-width: 1024px) {
                        width: 40%;
                        margin-left: 15%;
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
        width: 50%;
        height: 60%;
          margin-left: 0%;
        max-width: 800px;

    `

const Register = () => {
    return (
        <Container>
            <Link to="/"
           className='link'
            >
            <H1>COTIZA <Span>CRIPTOMONEDAS </Span>AL INSTANTE </H1>
            </Link>
            <Line />
            <TituloFormulario>REGISTRATE</TituloFormulario>
            <ContainerFormulario >
                <FormularioRegistro />
                <Imagen src={img} alt="imagen-bitcoin"  />
            </ContainerFormulario>
        </Container>
    )
}

export default Register