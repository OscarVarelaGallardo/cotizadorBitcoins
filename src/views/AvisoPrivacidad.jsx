import React, { useEffect } from 'react'

export const AvisoPrivacidad = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          margin: '0 10rem 0 10rem',
          padding: '0 10rem 0 10rem',
          backgroundColor: '#1A1A1A',
          borderRadius: '10px',
          border: '1px solid #F9A826',
          marginTop: '5rem'

        }}

      >
            <h1
                style={{
                  fontFamily: 'roboto,sans-serif,serif',
                  color: '#F9A826',
                  textAlign: 'center',
                  fontWeight: '900',
                  fontSize: '3.7rem',
                  margin: '10px 0 10px 0'
                }}
            >Aviso de privacidad</h1>
          <h2
                style={{
                  fontFamily: 'Lato, sans-serif, system-ui',
                  color: '#FFF',
                  textAlign: 'center',
                  fontWeight: '900',
                  fontSize: '1.7rem',
                  margin: '10px 0 10px 0'
                }} >Recopilación de información:</h2>

          <p
                style={{
                  fontFamily: 'Lato, sans-serif, system-ui',
                  color: '#FFF',
                  textAlign: 'center',
                  fontWeight: '900',
                  fontSize: '1.0rem',
                  margin: '10px 0 10px 0'
                }}

          >

              <h3
                style={{
                  fontFamily: 'Lato, sans-serif, system-ui',
                  color: '#FFF',
                  textAlign: 'center',
                  fontWeight: '900',
                  fontSize: '1.0rem',
                  margin: '10px 0 10px 0'

                }}

              >Información personal</h3>
                <p
                style={{

                  fontFamily: 'Lato, sans-serif, system-ui',
                  color: '#FFF',
                  textAlign: 'center',
                  wordWrap: 'break-word',
                  fontWeight: '900',
                  fontSize: '1.0rem',
                  margin: '10px 0 10px 0'
                }}>
               Al utilizar nuestra aplicación, es posible que recopilemos cierta información personal, como tu nombre, dirección de correo electrónico, número de teléfono y dirección física. Esta información se solicita para brindarte un servicio personalizado y mejorar tu experiencia con nuestra aplicación. La provisión de esta información es voluntaria, y tiene la opción de no proporcionarla.

          Información financiera Si decide utilizar la función de conversión de monedas, es posible que se solicite información financiera adicional, como detalles de su cuenta bancaria o tarjeta de crédito. Esta información se utiliza únicamente para procesar las conversiones de monedas y no se comparte con terceros sin su consentimiento expreso.
              </p>
              <h3

                style={{
                  fontFamily: 'Lato, sans-serif, system-ui',
                  color: '#FFF',
                  textAlign: 'center',
                  fontWeight: '900',
                  fontSize: '1.0rem',
                  margin: '10px 0 10px 0'
                }}

              >
                  Uso de la información</h3>

          Utilizamos la información que recopilamos para proporcionarte los servicios que solicitas, como brindar información confiable sobre criptomonedas y realizar conversiones de monedas.

          Podemos utilizar tu información para enviarte actualizaciones relevantes sobre el mercado de criptomonedas, noticias financieras y promociones especiales relacionadas con nuestros servicios. Siempre te ofreceremos la opción de optar por no recibir dichas comunicaciones.

          Almacenamiento y protección de la información:

          Tomamos medidas de seguridad adecuadas para proteger su información personal y financiera contra el acceso no autorizado, la modificación, divulgación o destrucción.

          Utilizamos conexiones seguras (SSL) para transmitir información confidencial entre nuestra aplicación y nuestros servidores.

          Solo almacenamos tu información durante el tiempo necesario para brindarte los servicios que solicitas o según lo requiere la ley.
                <h3
                style={{
                  fontFamily: 'Lato, sans-serif, system-ui',
                  color: '#FFF',
                  textAlign: 'center',
                  fontWeight: '900',
                  fontSize: '1.0rem',
                  margin: '10px 0 10px 0'
                }}

                >
                  Divulgación de información a terceros</h3>

          No compartimos, vendemos ni alquilamos tu información personal a terceros sin tu consentimiento, excepto cuando sea necesario para brindarte los servicios que solicitas o cuando la ley así lo requiere.
                <h3
                style={{
                  fontFamily: 'Lato, sans-serif, system-ui',
                  color: '#FFF',
                  textAlign: 'center',
                  fontWeight: '900',
                  fontSize: '1.0rem',
                  margin: '10px 0 10px 0'
                }}

                >
                  Cambios en el aviso de privacidad</h3>

          Podemos realizar cambios en este aviso de privacidad de vez en cuando. Te recomendamos revisar periódicamente este aviso para estar al tanto de cualquier actualización.

          Al utilizar nuestra aplicación, acepta los términos y condiciones establecidos en este aviso de privacidad. Si tiene alguna pregunta o inquietud sobre nuestra política de privacidad o la forma en que manejamos su información, no dude en ponerte en contacto con nosotros a través de los canales de soporte proporcionados en la aplicación.
                <h4

                style={{
                  fontFamily: 'Lato, sans-serif, system-ui',
                  color: '#FFF',
                  textAlign: 'center',
                  fontWeight: '900',
                  fontSize: '1.0rem',
                  margin: '10px 0 10px 0'
                }}
                >
          Gracias por confiar en TokenTrade para obtener información confiable sobre criptomonedas y realizar conversiones de monedas. Estamos comprometidos a proteger tu privacidad y brindarte una experiencia segura.
              </h4>
          </p>
            <h3 style={{
              fontFamily: 'Lato, sans-serif, system-ui',
              color: '#FFF',
              textAlign: 'center',
              fontWeight: '900',
              fontSize: '1.0rem',
              margin: '10px 0 10px 0'
            }}
            >Última actualización: 11/07/2020</h3>

 </div>
  )
}
