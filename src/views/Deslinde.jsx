import React, { useEffect } from 'react'
import styled from '@emotion/styled'

const Deslinde = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
 <>
    <Container>
      <Header >Deslinde de responsabilidades</Header>
      <p>
          La aplicación TokenTrade, proporciona información y alertas sobre el mercado de criptomonedas con fines informativos únicamente. Antes de utilizar esta aplicación, lea detenidamente este descargo de responsabilidad, ya que establece los términos y condiciones bajo los cuales accede y utiliza la aplicación.
      </p>
      <Body>
        <HeaderBody>
            Propiedad del software
        </HeaderBody>
        <p>
            La aplicación es propiedad exclusiva de GLOBAL SOLUTIONS y está protegido por las leyes de propiedad intelectual en México y en otros países. GLOBAL SOLUTIONS se reserva el derecho de modificar el software en cualquier momento y sin previo aviso.
        </p>
        <HeaderBody>
            Propósito informativo
        </HeaderBody>
        <p>
            La información proporcionada por la aplicación tiene únicamente fines informativos y educativos y no debe considerarse como asesoramiento financiero, legal o de inversión. No se debe tomar ninguna decisión basada únicamente en la información proporcionada por la aplicación
        </p>
        <HeaderBody>
            Volatilidad del mercado
        </HeaderBody>
        <p>
            El mercado de criptomonedas es altamente volátil y puede experimentar cambios significativos en períodos cortos. La información proporcionada por la aplicación puede no estar actualizada o precisa en tiempo real y no se garantiza su precisión en todo momento.
        </p>
        <HeaderBody>
            Riesgos financieros
        </HeaderBody>
        <p>
            Invertir en criptomonedas conlleva riesgos significativos y puede resultar en pérdidas financieras. La aplicación no se hace responsable de las decisiones de inversión tomadas por el usuario basadas en la información proporcionada.

        </p>
        <HeaderBody>
            Fuentes de información
        </HeaderBody>
        <p>
            La aplicación puede utilizar datos de diversas fuentes externas, como sitios web de intercambios de criptomonedas o agregadores de datos. No se garantiza la exactitud o integridad de estos datos de terceros, y la aplicación no se hace responsable de cualquier error, omisión o retraso en la actualización de la información.
        </p>
        <HeaderBody>
            Disponibilidad y rendimiento
        </HeaderBody>
        <p>
            La aplicación se esfuerza por proporcionar un servicio ininterrumpido y de alta calidad, pero no se garantiza que esté libre de errores o interrupciones. La aplicación no se hace responsable de cualquier pérdida o daño que pueda surgir debido a la falta de disponibilidad o rendimiento de la aplicación.

        </p>
        <HeaderBody>
            Enlaces externos
        </HeaderBody>
        <p>
            La aplicación puede contener enlaces a sitios web o recursos de terceros. Estos enlaces se proporcionan solo para conveniencia del usuario, y la aplicación no se hace responsable de la disponibilidad, contenido o precisión de estos sitios web externos.
        </p>

        <HeaderBody>
            Responsabilidad del usuario
        </HeaderBody>
        <p>
            El usuario asume la responsabilidad total de su uso de la aplicación y de las decisiones que tome basadas en la información proporcionada. El usuario debe realizar su propia investigación y análisis antes de tomar cualquier acción relacionada con criptomonedas.
        </p>
        <HeaderBody>
            Cambios en el descargo de responsabilidad
        </HeaderBody>
        <p>
            La aplicación se reserva el derecho de actualizar o modificar este descargo de responsabilidad en cualquier momento sin previo aviso. Es responsabilidad del usuario revisar periódicamente esta página para estar al tanto de los cambios.
        </p>
        <HeaderBody>
            El presente documento será regido e interpretado de acuerdo con las leyes de México y cualquier controversia que surja en relación con el presente documento será resuelta exclusivamente por los tribunales de México.  
        </HeaderBody>
        <HeaderBody>

            GLOBAL SOLUTIONS

            Universidad Tecnológica de Nezahualcóyotl, Cto. Rey Nezahualcóyotl Manzana 010, Benito Juárez, 57000 Nezahualcóyotl, Méx.

            55 5441 3182

            soporte@GlobalSolutions.net

            01/Agosto/2023

        </HeaderBody>
          <p>
            NOTAS IMPORTANTE:
          </p>
            <p>
            Este documento debe ser revisado y adaptado por un abogado especializado en propiedad intelectual y tecnología, para garantizar su validez legal y su adecuación a las necesidades específicas de GLOBAL SOLUTIONS en cuestión.

            GLOBAL SOLUTIONS debe tener en cuenta, que este documento no exime a GLOBAL SOLUTIONS de su obligación de cumplir con la normativa aplicable en materia de protección de datos personales y seguridad de la información, y que es necesario contar con un aviso de privacidad y medidas de seguridad para proteger los datos personales de los usuarios que se recolectan a través de la aplicación
        </p>

      </Body>

    </Container>
  </>
  )
}

export default Deslinde

const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 10px;
  }
`
const Header = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 90%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 10px;
  }
`
const HeaderBody = styled.h2`

  font-size: 1.2rem;
  font-weight: 700;
  text-align: left;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
