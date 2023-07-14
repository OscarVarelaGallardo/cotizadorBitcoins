import React from 'react'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
const PlanesPremium = () => {
    const navigate = useNavigate();
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
                <Container_Planes>
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
                </Container_Planes>

            </Container>


        </>
    )
}

export default PlanesPremium


const Heading = styled.h1`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #FFF;
    text-align: center;
    font-weight: 900;
    font-size: 1.7rem;
    
    `
const Span = styled.span`
    color: #9497FF;

    `
const Span2 = styled.span`
    color: #FBAE56;
    font-weight: 900;
    font-size: 1.2rem;

    `
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
   `

const Line = styled.div`
    width: 40%;
    height: 0.3rem;
    background-color: #9497FF;
    margin-bottom: 20px;
    `
const TextPremium = styled.p`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #FFF;
    text-align: center;
    font-weight: 900;
    font-size: 1.0rem;
    margin-bottom: 20px;
    `
const Button = styled.button`
    background-color: #9497FF;
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

const Textlist = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;

    @media (min-width: 375px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        column-gap: 2rem;
        justify-items: center;
        margin-bottom: 20px;
        max-width: 300px;
    }
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 2rem;
        justify-items: center;
        margin-bottom: 20px;
           max-width: 1200px;
    }
    `
const Li = styled.li`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #FFF;
    text-align: start;
    font-weight: 900;
    font-size: 1.0rem;
    margin-bottom: 20px;
    `
const Container_Planes = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
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
const Card = styled.div`
    background-color: #9497FF;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 900;
    font-family: 'Lato', sans-serif, 'system-ui';
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-bottom: 20px;
    `
const Heading2 = styled.h1`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #fff;
    text-align: center;
    font-weight: 900;
    font-size: 1.2rem;
    margin-bottom: 20px;
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


