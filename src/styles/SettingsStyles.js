import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Span2 = styled.span`
    color: #F9A826;
`
const ContainerBTNVolver = styled.div`
                    display: flex;
                    justify-content: start;
                    width: 100%;
                    margin-left: 7rem;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: 375px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        column-gap: 2rem;
        justify-items: center;
     
    }

    `
const Heading = styled.h1`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #FFF;
    text-align: center;
    font-weight: 900;
    font-size: 1.7rem;


`
const Heading2 = styled.h2`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #FFF;
    text-align: left;
    font-weight: 900;
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;

    
`
const Button = styled.button`
    


    background-color: #377BAA;
    justify-content: center;
    align-items: center;

    height: 2rem;
    background-color: #F9A826;
    padding: 5px  20px 5px 20px;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    margin-top: 2rem;
    &:hover {
        background-color: #2A5F8A;
        cursor: pointer;
    }

`
const Imagen = styled.img`
    max-width: 400px;
    width: 80%;
   
    display: block;
    @media (min-width: 375px) {
        width: 60%;

    }
    @media (min-width: 992px) {
        margin-top: 80px;
    }
    `

const Line = styled.div`
    width: 80%;
    height: 0.2rem;
    background-color: #66A2FE;
  
    `
const Span = styled.span`
    color: #66A2FE;
    `

const CardPremium = styled.div`
    width: 95%;
    height: 10rem;
    background-color: #ffff;
    border-radius: 0.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `

const ButtonPremium = styled.button`
    width: 60%;
    height: 3rem;
    background-color: #66A2FE;
    border-radius: 0.5rem;
    border: none;
    color: #ffff;
    font-weight: 900;
    font-size: 1rem;
    cursor: pointer;

    `
const TextPremium = styled.div`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #000;
    text-align: center;
    font-weight: 900;
    font-size: 1rem;
    margin:1rem;
   
    `
const P = styled.p`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #000;
    text-align: center;
    font-weight: 900;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    `
const Linka = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1rem;
    font-weight: 900;
    font-family: 'Lato', sans-serif, 'system-ui';
    display: block;
    text-align: center;
    width: 80%;
    height: 2rem;
    line-height: 2rem;
    background-color: #66A2FE;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: #326AC0;
    }
    `

export {
  Container,
  Heading,
  Heading2,
  Button,
  Imagen,
  Line,
  Span,
  CardPremium,
  ButtonPremium,
  TextPremium,
  P,
  Linka,
  Span2,
  ContainerBTNVolver
}
