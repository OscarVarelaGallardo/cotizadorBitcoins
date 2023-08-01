import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CardPremium from '../components/CardPremium'
import CardTestimonial from '../components/CardTestimonial'
import ContainerCard from '../components/ContainerCard'
import Formulario from '../components/Formulario'
import NewMessage from '../components/NewMessage'
import Resultado from '../components/Resultado'
import Spinner from '../components/Spinner'
import VisionMision from '../components/VisionMision'
import bitcoinUser from '../img/bitcoinMain.jpeg'

import ImagenCripto from '../img/imagen-criptos.png'
import ConfigUserContext from '../context/ConfigUserProvider'

import getBitcoinData from '../data/getBitcoinData'
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
  const [bitcoinData, setBitcoinData] = useState({})
  const [setNotification] = useState(false)
  const { configUser } = useContext(ConfigUserContext)

  useEffect(() => {
    if (configUser) {
      if (Object.keys(configUser).length > 0) {
        const bitcoin = async () => {
          const data = await getBitcoinData(configUser)
          console.log(data.value)
          setBitcoinData(data.value)
          console.log(bitcoinData)
          if (data) {
            return setNotification(true)
          } else {
            return setNotification(false)
          }
        }
        bitcoin()
      }
    }
  }, [])

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
        const response = await fetch('https://bitcoinsbackend.onrender.com/messages')
        const data = await response.json()
        setMessages(data.body)
      }
      getMessages()
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    window.scrollBy(0, 0)
  }, [])

  return (
    <>

      <Contenedor>
        <Imagen
          src={ImagenCripto}
          alt="imagenes criptomonedas"
        />

        <div >
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
         <VisionMision/>

        <div>
          <img src={bitcoinUser} alt="imagen-Bitcoin" border="0" style={{
            width: '100%', height: '92%', objectFit: 'cover', borderRadius: '1rem', marginTop: '2rem', marginBottom: '2rem'
          }} />
        </div>

    </Contenedor >

     <ContainerCard/>

      <ContainerPlanes>
        <CardPremium
          title='PLAN MENSUAL'
          textPremium='¡Pruébalo gratis por 7 días!'
          cost='Después $99.99/mes mxn'
        />
        <CardPremium
          title='PLAN SEMESTRAL'
          textPremium='¡Pruébalo gratis por 7 días!'
          cost='Después $499.99/semestre'
        />

        <CardPremium
          title='PLAN ANUAL'
          textPremium='¡Pruébalo gratis por 7 días!'
          cost='Después $999.99/año'
        />
      </ContainerPlanes>
      <Heading3>Testimonios </Heading3>
      <ContainerTestimonios>
         {messages.length > 0 ? <CardTestimonial messages={messages}/> : <Spinner text={'Cargando mensajes....'} />}
      </ContainerTestimonios>
      <NewMessage
        setMessages={setMessages}
        messages={messages}
      />
    </>

  )
}

export default Index
