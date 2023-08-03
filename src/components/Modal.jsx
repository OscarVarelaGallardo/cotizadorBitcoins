import React from 'react'
import styled from '@emotion/styled'
const Modal = ({

  handleNotification

}) => {
  return (
        <>
        <ContainerModal>
            <Header>
                Aviso de privacidad
            </Header>
            <Body>
                 <p>
                      En TokenTrade, valoramos la privacidad y la confidencialidad de nuestros usuarios. Este aviso tiene como objetivo informarte sobre cómo recopilamos, utilizamos, almacenamos y protegemos la información que nos proporciona al utilizar nuestra aplicación para obtener información confiable sobre criptomonedas y realizar conversiones de monedas. Te pedimos que dediques un momento para revisar esta información.
                </p>
                  <HeaderBody> Recopilación de información:</HeaderBody>

                <p>
                      Información personal: Al utilizar nuestra aplicación, es posible que recopilemos cierta información personal, como tu nombre, dirección de correo electrónico, número de teléfono y dirección física. Esta información se solicita para brindarte un servicio personalizado y mejorar tu experiencia con nuestra aplicación. La provisión de esta información es voluntaria, y tiene la opción de no proporcionarla.

                      Información financiera: Si decide utilizar la función de conversión de monedas, es posible que se solicite información financiera adicional, como detalles de su cuenta bancaria o tarjeta de crédito. Esta información se utiliza únicamente para procesar las conversiones de monedas y no se comparte con terceros sin su consentimiento expreso.
                </p>
                <HeaderBody>Uso de la información:</HeaderBody>
                <p>
                      Utilizamos la información que recopilamos para proporcionarte los servicios que solicitas, como brindar información confiable sobre criptomonedas y realizar conversiones de monedas.

                      Podemos utilizar tu información para enviarte actualizaciones relevantes sobre el mercado de criptomonedas, noticias financieras y promociones especiales relacionadas con nuestros servicios. Siempre te ofreceremos la opción de optar por no recibir dichas comunicaciones.
                </p>
                <HeaderBody>Almacenamiento de información:</HeaderBody>
                <p>
                      Tomamos medidas de seguridad adecuadas para proteger su información personal y financiera contra el acceso no autorizado, la modificación, divulgación o destrucción.

                      Utilizamos conexiones seguras (SSL) para transmitir información confidencial entre nuestra aplicación y nuestros servidores.

                      Solo almacenamos tu información durante el tiempo necesario para brindarte los servicios que solicitas o según lo requiere la ley.
                </p>
                <HeaderBody>Divulgación de información:</HeaderBody>
                <p>
                      No compartimos, vendemos ni alquilamos tu información personal a terceros sin tu consentimiento, excepto cuando sea necesario para brindarte los servicios que solicitas o cuando la ley así lo requiere.
                </p>
                <HeaderBody>Información de terceros:</HeaderBody>
                <p>
                      Podemos realizar cambios en este aviso de privacidad de vez en cuando. Te recomendamos revisar periódicamente este aviso para estar al tanto de cualquier actualización.

                      Al utilizar nuestra aplicación, acepta los términos y condiciones establecidos en este aviso de privacidad. Si tiene alguna pregunta o inquietud sobre nuestra política de privacidad o la forma en que manejamos su información, no dude en ponerte en contacto con nosotros a través de los canales de soporte proporcionados en la aplicación.

                </p>
                <p>
                      Gracias por confiar en TokenTrade para obtener información confiable sobre criptomonedas y realizar conversiones de monedas. Estamos comprometidos a proteger tu privacidad y brindarte una experiencia segura.
                </p>
                  <Fecha>Última actualización:  11/07/2023</Fecha>
                <Button
                      onClick={() => { handleNotification() }}
                >Aceptar</Button>
            </Body>

        </ContainerModal>
        </>
  )
}

export default Modal

const HeaderBody = styled.h3`
    font-family: 'roboto', sans-serif, serif;
    color: #F9A826;
    font-weight: 900;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
    `
const Fecha = styled.p`
    font-family: 'roboto', sans-serif, serif;
    color: #F9A826;
    font-weight: 900;
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    `

const ContainerModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `
const Header = styled.div`
    font-family: 'roboto', sans-serif, serif;
    color: #F9A826;
    font-weight: 900;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
    `
const Body = styled.div`
    background-color: #fff;
    width: 80%;
    height: 80%;
    border-radius: 1rem;
    padding: 1rem;
    overflow-y: scroll;
    `
const Button = styled.button`
    background-color: #377BAA;
    padding: 5px  20px 5px 20px;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    margin-top: 20px;
    display: block;
    margin: 0 auto;
    width: 20%;
    font-size: 1rem;
    &:hover {
        background-color: #2A5F8A;
        cursor: pointer;
    }
    `
