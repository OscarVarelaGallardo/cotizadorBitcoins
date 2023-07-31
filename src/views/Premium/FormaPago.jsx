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
    console.log(Object.keys(userCreditCard).length === 0)
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
            <Label>
              Tipo de tarjeta
              <Select
                onChange={hadleSubmit}
                name="tipoTarjeta">
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="americanExpress">American Express</option>
              </Select>

            </Label>

            <Label>
              Nombre del titular
              <Input type="text" name="name"
                onChange={hadleSubmit}
                placeholder="Ejem: Juan Perez"
              />
            </Label>
            <Label>
              Número de tarjeta
              <Input type="text" name="name"
                placeholder="0000 0000 0000 0000"
              />
            </Label>
            <Label>
              Fecha de expiración
              <Input type="text" name="name"
                onChange={hadleSubmit}
                placeholder="MM/AA"
              />
            </Label>
            <Label>
              Código de seguridad
              <Input type="text" name="name"
                placeholder="000"
                onChange={hadleSubmit}
              />
            </Label>
            <Label>
              Código postal
              <Input type="text" name="name"
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
