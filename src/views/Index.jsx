import React from 'react'
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from '../components/Formulario'
import Resultado from '../components/Resultado'
import Spinner from '../components/Spinner'
import ImagenCripto from '../img/imagen-criptos.png'
import { Link } from 'react-router-dom'


const Contenedor = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 375px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 2rem;
    
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
  
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;

  @media (min-width: 375px) {
    margin-top: 80px;
    width: 60%;
  }

  @media (min-width: 992px) {
    margin-top: 80px;
  }
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`
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
    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt="imagenes criptomonedas"
      />

      <div>
        <Link to={'/'}
          style={{ textDecoration: 'none' }}
        >
          <Heading>Cotiza Criptomonedas al Instante</Heading>
        </Link>
        <Formulario
          setMonedas={setMonedas}
        />

        {cargando && <Spinner />}
        {resultado.PRICE && <Resultado resultado={resultado} />}
      </div>

    </Contenedor>
  )
}

export default Index