import styled from '@emotion/styled'
import { useState, useContext, useEffect } from 'react'
import AuthContext from '../context/AuthProvider'

const FormPremium = () => {
  const [dataPremiumuser, setDataPremiumUser] = useState({})

  const { user } = useContext(AuthContext)
  const { email } = user

  useEffect(() => {

  }, [])

  const sendConfig = async (dataUser) => {
    try {
      const URL = 'https://cotiza-bitcoin.onrender.com/bitpro/updateUserProMail'
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUser)
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    const dataUser = Object.assign(dataPremiumuser, { email })
    console.log(dataUser)
    sendConfig(dataUser)
  }

  const handleClick = (e) => {
    e.preventDefault()
    console.log('click')
    setDataPremiumUser({
      ...dataPremiumuser,
      [e.target.name]: e.target.value
    })
  }

  return (
        <>
            <Container>
                <Heading>CONFIGURA TUS AJUSTES <Span> PREMIUM</Span> </Heading>

                <Form>
                    <Label>
                        RECIBIR NOTIFICACIONES
                        <Select
                            name="frecuencia"
                            onChange={handleClick}
                        >
                            <option selected disabled hidden value="">Selecciona una opción</option>
                            <option value="nunca">Nunca</option>
                            <option value="diario">Diario</option>
                            <option value="semanal">Semanal</option>
                            <option value="mensual">Mensual</option>

                        </Select>

                    </Label>
                    <Label>
                        MONEDAS
                        <Select
                            name="monedas"
                            onChange={handleClick}
                        >
                            <option selected disabled hidden value="">Selecciona una opción</option>
                            <option value="bitcoin">Bitcoin</option>
                            <option value="ethereum">Ethereum</option>
                            <option value="litecoin">Litecoin</option>
                            <option value="dogecoin">Dogecoin</option>
                            <option value="tether">Tether</option>
                            <option value="binancecoin">Binancecoin</option>
                            <option value="cardano">Cardano</option>
                            <option value="ripple">Ripple</option>

                        </Select>
                    </Label>
                    <Label>
                        MIS MONEDAS FAVORITAS
                        <Select
                            name="monedasFavoritas"
                            onChange={handleClick}
                        >
                            <option selected disabled hidden value="">Selecciona una opción</option>
                            <option value="MXN">MXN</option>
                            <option value="USD">USD</option>
                            <option value="CAN">CAN</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="JPY">JPY</option>
                            <option value="CHF">CHF</option>
                            <option value="AUD">AUD</option>
                            <option value="NZD">NZD</option>
                            <option value="CNY">CNY</option>
                            <option value="HKD">HKD</option>
                            <option value="SEK">SEK</option>
                        </Select>
                    </Label>
                    <Label>
                        ALERTAS
                        <Select
                            name="alertas"
                            onChange={handleClick}
                        >
                            <option selected disabled hidden value="">Selecciona una opción</option>
                            <option value="precio">Precio</option>
                            <option value="porcentaje">Porcentaje</option>
                        </Select>
                    </Label>
                    <Label>
                        TIPO DE ALERTA
                        <Select
                            name="tipoAlerta"
                            onChange={handleClick}
                        >
                            <option selected disabled hidden value="">Selecciona una opción</option>
                            <option value="mayor">Mayor</option>
                            <option value="igual">Medio</option>
                            <option value="menor">Menor</option>
                        </Select>
                    </Label>
                    <Label>
                        CANTIDAD DIFERENTE A
                        <Input type="text" name="name"
                            onChange={handleClick}
                            placeholder="Ejem: 1000"
                        />
                    </Label>
                </Form>
                <Button
                    type="submit"
                    onClick={handleSubmit}
                >
                    GUARDAR MIS PREFERENCIAS
                </Button>

            </Container>
        </>
  )
}

export default FormPremium

const Heading = styled.h1`
    font-family: 'Lato', sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
    color: #9497FF;
    text-align: center;
    margin-bottom: 1rem;
    `
const Span = styled.span`
    color: #FFC947;
    `

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 2rem;
    


    `
const Select = styled.select`
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #e1e1e1;
    margin-bottom: 1rem;
    font-family: 'Lato', sans-serif;
    color: #9497FF;
    font-weight: 900;
    font-size: 1.0rem;
    text-Transform: uppercase;
    ::placeholder {
        text-align: center;
    }
    `
const Form = styled.form`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 1rem;
    width: 100%;
   
   @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);  
        width: 86%;
    }


    `
const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 0.7rem;
    font-family: 'Lato', sans-serif;
    color: #FBAE56;
    padding-bottom: 0.2rem;
    font-weight: 900;
    font-size: 1.0rem;
    `
const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #e1e1e1;
    margin-bottom: 1rem;
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 1.0rem;
    ::placeholder {
        text-align: center;
    }
    `
const Button = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    padding:1rem;
    border-radius: 0.5rem;
    border: 1px solid #e1e1e1;
    font-family: 'Lato', sans-serif;
    color: #fff;
    font-weight: 900;
    font-size: 1.0rem;
    background-color: #9497FF;
    cursor: pointer;
    margin-top: 1rem;
    
transition: all 0.3s ease;
    &:hover {
        background-color: #FBAE56;
    }




    `
