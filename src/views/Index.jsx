import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardPremium from '../components/CardPremium'
import CardTestimonial from '../components/CardTestimonial'
import Formulario from '../components/Formulario'
import Resultado from '../components/Resultado'
import Spinner from '../components/Spinner'
import ImagenCripto from '../img/imagen-criptos.png'
import imgUser1 from '../img/fotoUser1.jpeg'
import Notification from '../components/Notification'
import ContainerCard from '../components/ContainerCard'
import Message from '../components/Message'

import {
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
  const [messages, setMessages] = useState([])

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

  useEffect(() => {
    try {
      const getMessages = async () => {
        const response = await fetch('http://localhost:8000/messages')
        const data = await response.json()

        setMessages(data.body)
      }
      getMessages()
    } catch (error) {
      console.log(error)
    }
  }, [])

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

     <ContainerCard/>

      <ContainerPlanes>
        <CardPremium
          title='PLAN MENSUAL'
          textPremium='¡Pruébalo gratis por 7 días!'
          cost='Después $9.99/mes'
        />
        <CardPremium
          title='PLAN SEMESTRAL'
          textPremium='¡Pruébalo gratis por 7 días!'
          cost='Después $49.99/semestre'
        />

        <CardPremium
          title='PLAN ANUAL'
          textPremium='¡Pruébalo gratis por 7 días!'
          cost='Después $99.99/año'
        />
      </ContainerPlanes>
      <Heading3>Testimonios </Heading3>
      <ContainerTestimonios>
    {
      messages.map((message) => {
        return (
          <CardTestimonial
            key={message._id}
            img={imgUser1}
            testimonio={message.message}
            nombre={message.name}
            fecha={message.date}
          />
        )
      }
      )
    }

      </ContainerTestimonios>
    <Message/>
    </>

  )
}

export default Index
