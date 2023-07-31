import { useNavigate } from 'react-router-dom'
import FormPremium from '../components/FormPremium'
import FormularioMiCuenta from '../components/FormularioMiCuenta'
import { useContext, useEffect } from 'react'
import PremiumContext from '../context/PremiumProvider'
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
  TextPremium,
  ContainerBTNVolver
} from '../styles/SettingsStyles'

const Settings = () => {
  const navigate = useNavigate()
  const { isUserPremium } = useContext(PremiumContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
        <>
            <Container>
                <Heading>COTIZA
                  <Span>CRIPTOMONEDAS </Span>
                   AL INSTANTE </Heading>
                <Line />
                <ContainerBTNVolver >
                    <Button onClick={() => navigate('/')}>Volver al inicio</Button>
                </ContainerBTNVolver>
                {
                    isUserPremium
                      ? (
                        <Heading2>MI CUENTA <Span2>PREMIUM</Span2></Heading2>
                        )
                      : (
                        <Heading2>MI CUENTA</Heading2>
                        )

                }
                <FormularioMiCuenta />
                {
                    !isUserPremium
                      ? (
                        <CardPremium

                        >
                            <TextPremium>¿QUIERES OBTENER <Span > NOTIFICACIONES</Span>  DE LOS CAMBIOS DE TUS MONEDAS?</TextPremium>
                            <P>Conviértete en Premium y obtén acceso a todas las funcionalidades de la aplicación</P>
                            <Linka to="/planes-premium">
                                OBTENER PREMIUM
                            </Linka>
                        </CardPremium>
                        )
                      : (
                        <FormPremium

                        />
                        )
                }
            </Container>
        </>
  )
}

export default Settings
