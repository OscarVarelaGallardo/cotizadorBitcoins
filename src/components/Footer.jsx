
import styled from '@emotion/styled'
import imgFacebook from '../img/facebookIcon.png'
import imgInstagram from '../img/instagramIcon.png'
import imgTwitter from '../img/twitterIcon.png'
import imgTrusted from '../img/trustedBy.png'

const Footer = () => {
    return (
        <Container>
            <IMG
                src={imgTrusted}
                alt="trusted"
            />

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

const Icons = styled.div`

    display: flex;  
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
 
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
    margin-top: 40px;
    `
