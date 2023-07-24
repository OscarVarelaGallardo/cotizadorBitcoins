import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import CardPremium from '../components/CardPremium'
import CardTestimonial from '../components/CardTestimonial'
import Formulario from '../components/Formulario'
import Resultado from '../components/Resultado'
import Spinner from '../components/Spinner'
import ImagenCripto from '../img/imagen-criptos.png'
import imgUser1 from '../img/fotoUser1.jpeg'
import imgUser2 from '../img/fotoUser2.jpeg'
import imgUser3 from '../img/fotoUser3.jpeg'
import imgUser4 from '../img/fotoUser4.jpg'
import Notification from '../components/Notification'
import {
  ContainerCards,
  ContainerPlanes,
  ContainerTestimonios,
  Contenedor,
  Heading,
  Heading3,
  Imagen,
  Span
} from '../styles/IndexStyles.js'

const Index = () => {
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        setCargando(true)
        setResultado({})

        const { moneda, criptomoneda } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setResultado(resultado.DISPLAY[criptomoneda][moneda])

        setCargando(false)
      }

      cotizarCripto()
    }
  }, [monedas])

  return (
    <>
      <Notification title='¡Bienvenido!'/>
      <Contenedor>

        <Imagen
          src={ImagenCripto}
          alt="imagenes criptomonedas"
        />

        <div>
          <Link to={'/'}
            style={{ textDecoration: 'none' }}
          >
            <Heading>Cotiza <Span> Criptomonedas </Span>al Instante</Heading>
          </Link>
          <Formulario
            setMonedas={setMonedas}
          />

          {cargando && <Spinner />}
          {resultado.PRICE && <Resultado resultado={resultado} />}

        </div>

      </Contenedor>

      <ContainerCards >
        <Card
          title="Tus datos están seguros"
          description="Tus datos están protegidos con los más altos estándares de seguridad."
        />
        <Card
          title="Mantente siempre actualizado"
          description="Notificaciones siempre que el precio de tus criptomonedas cambie."
        />

        <Card
          title="Toma las mejores decisiones"
          description="
          Toma las mejores decisiones con la información más actualizada."
        />
        <Card
          title="El mejor sitio para cotizar "
          description="Cotiza tus criptomonedas al instante con la mejor información."
        />
      </ContainerCards>

      <ContainerPlanes>
        <CardPremium
          title='PLAN MENSUAL'
          textPremium='¡Pruébalo gratis por 7 días!'
          cost='Después $9.99/mes'
        />
        <CardPremium
          title='PLAN SEMESTRAL'
          textPremium='¡Pruébalo gratis por 7 días!'
          cost='Después $49.99/año'
        />

        <CardPremium
          title='PLAN ANUAL'
          textPremium='¡Pruébalo gratis por 7 días!'
          cost='Después $99.99/año'
        />
      </ContainerPlanes>
      <Heading3>Testimonios </Heading3>
      <ContainerTestimonios>
        <CardTestimonial
          img={imgUser1}
          testimonio='Incremente mis ganancias en un 30% en tan solo 2 meses. '
          nombre='Juan Perez'

        />
        <CardTestimonial
          img={imgUser2}
          testimonio='Excelente servicio, me encanta disfruto mucho de la aplicación.'

          nombre='Maria Lopez'
        />
        <CardTestimonial
          img={imgUser3}
          testimonio='Adoro esta aplicación, me ha ayudado a tomar las mejores decisiones.'
          nombre='Anna Smith'
        />
        <CardTestimonial
          img={imgUser4}
          testimonio='Tengo las notificaciones siempre activas, me encanta estar informado en todo momento.'
          nombre='Pedro Rodriguez'
        />

      </ContainerTestimonios>

    </>

  )
}

export default Index
