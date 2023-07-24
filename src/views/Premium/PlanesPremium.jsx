import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Heading,
  Span,
  Line,
  TextPremium,
  Button,
  Textlist,
  Li,
  ContainerPlanes,
  Card,
  Heading2,
  TextPremium2,
  Button2,
  Span2
} from '../../styles/PlanesStyles'

const PlanesPremium = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/forma-pago')
  }

  return (
        <>
            <Container>
                <Heading>COTIZA <Span>CRIPTOMONEDAS</Span> AL INSTANTE</Heading>
                <Line />
                <TextPremium>¿QUIERES OBTENER <Span2>NOTIFICACIONES</Span2>  DE LOS CAMBIOS DE TUS MONEDAS?</TextPremium>
                <Button
                    onClick={handleClick}
                >¡OBTENER PREMIUM YA!</Button>
                <Textlist>
                    <Li>Alertas de cambio de precio y más </Li>
                    <Li>
                        Seguridad en los datos de tu cuenta
                    </Li>
                    <Li>
                        Acceso a todas las funcionalidades
                    </Li>
                    <Li>
                        Comunidad de usuarios Premium
                    </Li>

                </Textlist>
                <ContainerPlanes>
                    <Card>
                        <Heading2>PLAN MENSUAL</Heading2>
                        <TextPremium2>¡Pruébalo gratis por 7 días!</TextPremium2>
                        <TextPremium2>Después $9.99/mes</TextPremium2>
                        <Button2
                            onClick={handleClick}
                        >¡OBTENER <Span2> PREMIUM</Span2> YA!</Button2>
                    </Card>
                    <Card>
                        <Heading2>PLAN ANUAL</Heading2>
                        <TextPremium2>¡Pruébalo gratis por 7 días!</TextPremium2>
                        <TextPremium2>Después $59.99/6 meses</TextPremium2>
                        <Button2
                            onClick={handleClick}
                        >¡OBTENER <Span2> PREMIUM</Span2> YA!</Button2>
                    </Card>
                    <Card>
                        <Heading2>PLAN ANUAL</Heading2>
                        <TextPremium2>¡Pruébalo gratis por 7 días!</TextPremium2>
                        <TextPremium2>Después $99.99/año</TextPremium2>
                        <Button2
                            onClick={handleClick}
                        >¡OBTENER <Span2> PREMIUM</Span2> YA!</Button2>
                    </Card>
                </ContainerPlanes>

            </Container>

        </>
  )
}

export default PlanesPremium
