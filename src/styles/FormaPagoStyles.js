import styled from '@emotion/styled'

const Select = styled.select`
    width: 100%;
    height: 30px;
    max-width: 600px;
    border-radius: 5px;
    border: 1px solid #9497FF;
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #9497FF;
    font-weight: 900;
    font-size: 1.0rem;
    padding-left: 10px;
    ::placeholder {
        text-align: center;
    }
    `

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    `
const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-bottom: 20px;
    margin-top: 5px;
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #9497FF;
    font-weight: 900;
    font-size: 1.0rem;
    `
const Input = styled.input`
    width: 100%;
    height: 30px;
    max-width: 600px;
    border-radius: 5px;
    border: 1px solid #9497FF;
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #9497FF;
    font-weight: 900;
    font-size: 1.0rem;
    padding-left: 10px;
    ::placeholder {
        text-align: center;
    }
    
    `
const Button = styled.button`

    background-color: #9497FF;
    color: #FFF;
    border: none;
    width: 50%;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #FFF;
    font-weight: 900;
    font-size: 1.0rem;
    margin-top: 20px;
    :hover {
        transition: all 0.3s ease-out;
        cursor: pointer;
        background-color: #FBAE56;
        color: #FFF;

    }
    `

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `
const Heading = styled.h1`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #FFF;
    text-align: center;
    font-weight: 900;
    font-size: 1.7rem;
    margin-bottom: 20px;
    `
const Span = styled.span`
    color: #9497FF;
    `
const Line = styled.div`
    width: 40%;
    height: 0.3rem;
    background-color: #9497FF;
    justify-content: center;
    `
const TextPremium = styled.p`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #FFF;
    text-align: center;
    font-weight: 900;
    font-size: 1.0rem;
    margin-bottom: 20px;
    `
const Span2 = styled.span`
    color: #FBAE56;
    font-weight: 900;
    font-size: 1.2rem;
    `
const ContainerCreditCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    `
const Card = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #FFF;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.2);
    margin-bottom: 20px;
        @media (min-width: 375px) {
            width: 80%;
            height: 38rem;
        }
        @media (min-width: 768px) {
            width: 90%;
            height: 35rem;
        }
    `

export {
  Select,
  Form,
  Label,
  Input,
  Button,
  Container,
  Heading,
  Span,
  Line,
  TextPremium,
  Span2,
  ContainerCreditCard,
  Card

}
