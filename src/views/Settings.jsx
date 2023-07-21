
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormPremium from '../components/FormPremium'
import FormularioMiCuenta from "../components/FormularioMiCuenta"
import AuthContext from '../context/AuthProvider'
import {
    Button,
    CardPremium,
    Container,
    Heading,
    Heading2,
    Line,
    Linka,
    P,
    Span,
    Span2,
    TextPremium
} from '../styles/Settings'



const Settings = () => {

    const { user, setUser } = useContext(AuthContext)


    const [isUserPremium, setIsUserPremium] = useState(true )
    const navigate = useNavigate()
    
       

    return (
        <>
            <Container>


                <Heading>COTIZA
                     <Span>CRIPTOMONEDAS
                     </Span>
                    AL INSTANTE
                </Heading>
                <Line />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'start',
                        width: '100%',
                        marginLeft: '7rem',
                    }}
                >
                    <Button onClick={() => navigate('/')}>Volver al inicio</Button>
                </div>
                {
                    isUserPremium ? (
                        <Heading2>MI CUENTA <Span2>PREMIUM</Span2></Heading2>
                    ) : (
                        <Heading2>MI CUENTA</Heading2>
                    )

                }
                <FormularioMiCuenta />

                {
                    !isUserPremium ? (
                        <CardPremium>
                            <TextPremium>¿QUIERES OBTENER <Span>NOTIFICACIONES</Span>  DE LOS CAMBIOS DE TUS MONEDAS?</TextPremium>
                            <P>Conviértete en Premium y obtén acceso a todas las funcionalidades de la aplicación</P>
                            <Linka to="/planes-premium">
                                OBTENER PREMIUM
                            </Linka>
                        </CardPremium>
                    ) : (

                        <FormPremium />


                    )

                }
            </Container>
        </>
    )
}



export default Settings
