import styled from '@emotion/styled'

const Container_Testimonios = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 2rem;
  max-width: 320px;
  padding: 0 2rem;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    max-width: 1200px;
    padding: 0 2rem;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`

const Button3 = styled.button`
  background-color: #FBAE56;
  border: none;
  border-radius: 10px;
  color: #fff;
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 auto;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  width: 30%;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    
  }
`


const Card_Testimonio = styled.div`
  background-color: #FBAE56;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    background-color: #FBAE56;
    border-radius: 10px;
    padding: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`





const Span = styled.span`
  color: #66A2FE;
`
const Heading3 = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 0;
  font-size: 2rem;
`
const Span3 = styled.span`
  color: #66A2FE;
`

const Contenedor = styled.div`

  margin: 0 auto;
  width: 100%;
  
  @media (min-width: 375px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 2rem;
    max-width: 320px;
      padding: 0 2rem;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
      max-width: 100rem;
  }
  
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;

  display: block;

  @media (min-width: 375px) {
    margin-top: 80px;
    width: 60%;
  }

  @media (min-width: 992px) {
    margin-top: 80px;
      margin-bottom:10rem;

  }
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  text-transform: uppercase;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }



`
const Container_Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 2rem;
  max-width: 320px;
  padding: 0 2rem;
  margin: 0 auto;
  margin-bottom: 10rem;
  margin-top: 5rem;
  @media (min-width: 375px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    max-width: 320px;
    padding: 0 2rem;
    margin: 0 auto;
    margin-top: 5rem;
   
     
     
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 4rem;
      max-width: 100rem;
  }
`
const Container_Planes = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding-top: 8rem;
    @media (min-width: 375px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-items: center;
      
    }
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 2rem;
        justify-items: center;
        margin-bottom: 20px;
        max-width: 1200px;
    }
    `

const Card_Premium = styled.div`
    background-color: #9497FF;
    border-radius: 0.5rem;
    padding: 10rem 2rem;
    font-size: 1rem;
    font-weight: 900;
    font-family: 'Lato', sans-serif, 'system-ui';
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-bottom: 20px;

  
    &:hover {
        background-color: #FBAE56;
        color: #FFF;
        
    }
    
    `
const Heading2 = styled.h1`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #fff;
    text-align: center;
    font-weight: 900;
    font-size: 2.0rem;
    margin-bottom: 5rem;
    `
const TextPremium2 = styled.p`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #fff;
    text-align: center;
    font-weight: 900;
    font-size: 1.0rem;
    margin-bottom: 20px;
    `

const Button2 = styled.button`
    background-color: #377BAA;
    color: #FFF;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 900;
    font-family: 'Lato', sans-serif, 'system-ui';
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-bottom: 20px;
    &:hover {
        background-color: #FFF;
        color: #9497FF;
    }
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

export{
    Container_Testimonios,
    Button3,
    Card_Testimonio,
    Span,
    Heading3,
    Span3,
    Contenedor,
    Imagen,
    Heading,
    Container_Cards,
    Container_Planes,
    Card_Premium,
    Heading2,
    TextPremium2,
    Button2,
    TextPremium,
    Span2

}