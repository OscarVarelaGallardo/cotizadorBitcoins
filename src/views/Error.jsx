import styled from '@emotion/styled'
import imgError from '../img/error.jpg'

const Error = () => {
  return (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          
           
        }}
    >
          <TextFooter>ERROR 404</TextFooter>
          <Button to="/">Volver al inicio</Button>
            <IMG src={imgError} alt="error404" />
        
        

      
    </div>

  )
}

export default Error

const IMG = styled.img`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    border-radius: 0.5rem;
    margin-bottom: 20px;

    `

const TextFooter = styled.p`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #FFF;
    font-weight: 900;
    font-size: 1.5rem;

    margin-bottom: 1rem;
    text-align: center;
    `
const Button = styled.button`
    background-color: #9497FF;
    color: #FFF;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 900;
    margin-top: 2rem;
    margin-bottom: 2rem;
    cursor: pointer;
    &:hover {
        background-color: #2A5F8A;
        cursor: pointer;
    }
    `
