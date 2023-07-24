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

const FormaPago = () => {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    Swal.fire({
      title: '¡Gracias por tu compra!',
      text: 'Tu pago se ha realizado con éxito',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })

    navigate('/settings')
  }

  return (
    <Container>
      <Heading>COTIZA <Span>CRIPTOMONEDAS</Span> AL INSTANTE</Heading>
        <Line />
          <TextPremium>AGREGA TU FORMA DE  <Span2>PAGO</Span2>  </TextPremium>
            <ContainerCreditCard>
                <Card>
                    <Form>
                        <Label>
                            Tipo de tarjeta
                            <Select
                                name="tipoTarjeta">
                                <option value="visa">Visa</option>
                                <option value="mastercard">Mastercard</option>
                              <option value="americanExpress">American Express</option>
                            </Select>

                        </Label>

                        <Label>
                            Nombre del titular
                            <Input type="text" name="name"
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
                            placeholder="MM/AA"
                            />
                        </Label>
                        <Label>
                            Código de seguridad
                            <Input type="text" name="name"
                            placeholder="000"
                            />
                        </Label>
                        <Label>
                            Código postal
                            <Input type="text" name="name"
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
