import styled from '@emotion/styled'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    `
const Headline = styled.h1`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #FFF;
    font-weight: 900;
    font-size: 2rem;
    `
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    `
const IMG = styled.img`
    width: 100%;
    max-width: 600px;
    height: 100%;
    border-radius: 0.5rem;
    margin-bottom: 20px;
        @media (max-width: 768px) {
            width: 100%;
            max-width: 300px;
            height: 100%;
            border-radius: 0.5rem;
            margin-bottom: 20px;
        }
      @media (max-width: 1024px) {
            width: 100%;
            max-width: 300px;
            height: 100%;
            border-radius: 0.5rem;
            margin-bottom: 20px;
        }
          

        `
const Text = styled.h2`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #000;
    font-weight: 900;
    font-size: 1.5rem;

    margin-bottom: 1rem;
    text-align: center;
    `
const P = styled.p`
    font-family: 'Lato', sans-serif, 'system-ui';
        max-width: 1200px;
    color: #000;
    font-weight: 400;
    font-size: 1rem;`
const ContainerStarts = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    `
const ImgStar = styled.img`
    width: 50%;
    max-width: 20px;
    height: 50%;
    border-radius: 0.5rem;
    margin-bottom: 20px;
   
    `
const Input = styled.input`
    width: 40%;
    max-width: 1200px;
    border-radius: 0.5rem;
    margin-bottom: 20px;
    padding: 1rem ;
    border: 1px solid #9497FF;

    `
const Button = styled.button`
    height: 40px;
    width: 100%;
    border-radius: 0.5rem;
    margin-bottom: 20px;
    max-width: 400px;
    border: 1px solid #9497FF;
    background-color: #9497FF;
    color: #FFF;
    font-weight: 900;
    font-size: 1rem;
    cursor: pointer;    
    `

export {
  Container,
  Headline,
  Card,
  IMG,
  Text,
  P,
  ContainerStarts,
  ImgStar,
  Input,
  Button

}
