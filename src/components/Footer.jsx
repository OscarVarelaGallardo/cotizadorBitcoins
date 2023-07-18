
import styled from '@emotion/styled'
import imgFacebook from '../img/facebookIcon.png'
import imgInstagram from '../img/instagramIcon.png'
import imgTwitter from '../img/twitterIcon.png'
import imgTrusted from '../img/trustedBy.png'

import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <Container>
            <IMG
                src={imgTrusted}
                alt="trusted"
            />
           
            <Container_info>
                
            <UL>
                    <TextFooter>
                        ¿Quieres saber como invertir en criptomonedas ?
                    </TextFooter>
                <LI>
                   <Linke to="/Blog">Nuestro Blog</Linke>
                    <Linke to="/Blog">¿Qué es una criptomoneda?</Linke>
                    <Linke to="/Blog">¿Cómo invertir ?</Linke>
                    <Linke to="/Blog">¿Qué es el bitcoin?</Linke>
                    <Linke to="/Blog">¿Qué es el blockchain?</Linke>
                    <Linke to="/Blog">¿Qué es el minado ?</Linke>
                </LI>
            </UL>
            </Container_info>
            <Text>
                Síguenos en nuestras redes sociales
            </Text>
            <Icons>
                <Icon src={imgInstagram} alt="instagram" />
                <Icon src={imgFacebook} alt="facebook" />
                <Icon src={imgTwitter} alt="twitter" />
            </Icons>
            <Text>
                © {new Date().getFullYear()} - Todos los derechos reservados
            </Text>


        </Container>

    )
}

export default Footer

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 2rem;
    justify-items: center;

    `
const Text = styled.p`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #FFF;
    font-weight: 900;
    font-size: 1.0rem;
    `

const TextFooter = styled.p`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #FFF;
    font-weight: 900;
    font-size: 1.5rem;
    margin-top: 7rem;
    margin-bottom: 1rem;
    text-align: center;
    margin: 8rem auto;
    `

const Container_info = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  
    
    `


const Icons = styled.div`

    display: flex;  
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
    background-color: #F9A826;
    border-radius: 0.5rem;
    `
const Icon = styled.img`
    width: 2rem;
    height: 2rem;
    margin: 0 10px;
    `
const IMG = styled.img`
    width: 100%;
    border-radius: 0.5rem;
    margin-bottom: 20px;
    margin-top: 8rem;
    `

const UL = styled.ul`
    
    display: flex;
    flex-direction: column;
    padding: 3rem;
    justify-content: space-around;
    width: 100%;
    margin: 0 auto;
    text-decoration: none;
   
`
const LI = styled.li`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #FFF;
    text-align: center;
    font-weight: 900;
    font-size: 1.0rem;
    margin-bottom: 20px;
      list-style: none;
      @media (min-width: 375px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-items: center;
        margin-bottom: 20px;
        max-width: 300px;
    }
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        margin-bottom: 20px;
        max-width: 1200px;
    }

    `
const Linke = styled(Link)`
    
    color: #FFF;
    text-align: center;
    text-decoration: none;
    
    &:hover {
        color: #9497FF;
    }
    `
