import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Heading,
  Span,
  Line,
  TextPremium,
  Button,
  Span2,
  ContainerCreditCard,
  Card,
  Form,
  Label,
  Input,
  Select
} from '../../styles/FormaPagoStyles'
import { useState, useContext } from 'react'
import PremiumContext from '../../context/PremiumProvider'
import Error from '../../components/Error'

const FormaPago = () => {
  const navigate = useNavigate()
  const [userCreditCard, setUserCreditCard] = useState({})
  const { setIsUserPremium } = useContext(PremiumContext)
  const [error, setError] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()

    if (Object.keys(userCreditCard).length === 0) {
      setError(true)
      return
    }

    Swal.fire({
      icon: 'success',
      title: '¡Datos guardados correctamente!',
      showConfirmButton: true,
      timer: 1500
    })
    setIsUserPremium(true)
    sendUserPremium()
    setError(false)
    return navigate('/')
  }

  const hadleSubmit = (e) => {
    setUserCreditCard({
      ...userCreditCard,
      [e.target.name]: e.target.value
    })
  }

  const sendUserPremium = () => {
    console.log(userCreditCard)
  }

  return (
    <Container>
      <Heading>COTIZA <Span>CRIPTOMONEDAS</Span> AL INSTANTE</Heading>
      <Line />

      <TextPremium>AGREGA TU FORMA DE  <Span2>PAGO</Span2>  </TextPremium>
      <ContainerCreditCard>

        <Card>
          <Form>
            {
              error && <Error>Debes llenar todos los campos</Error>
            }
            <Label
              htmlFor='tipeCreditCard'
            >
              Tipo de tarjeta
              <Select
                onChange={hadleSubmit}
                name="tipeCreditCard">
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="americanExpress">American Express</option>
              </Select>

            </Label>

            <Label
              htmlFor='name'
            >
              Nombre del titular
              <Input type="text" name="name"
                onChange={hadleSubmit}
                placeholder="Ejem: Juan Perez"
              />
            </Label>
            <Label
              htmlFor='creditCard'
            >
              Número de tarjeta
              <Input type="text" name="creditCard"
                placeholder="0000 0000 0000 0000"
              />
            </Label>
            <Label
              htmlFor='date'
            >
              Fecha de expiración
              <Input type="text" name="date"
                onChange={hadleSubmit}
                placeholder="MM/AA"
              />
            </Label>
            <Label
              htmlFor='codeSecurity'
            >
              Código de seguridad
              <Input type="text" name="codeSecurity"
                placeholder="000"
                onChange={hadleSubmit}
              />
            </Label>
            <Label
              htmlFor='Cp'
            >
              Código postal
              <Input type="text" name="CP"
                onChange={hadleSubmit}
                placeholder="00000"
              />
            </Label>
            <Button
              onClick={handleClick

              }
              type="submit"
            >Pagar</Button>
          </Form>
        </Card>
      </ContainerCreditCard>
    </Container>
  )
}

export default FormaPago
