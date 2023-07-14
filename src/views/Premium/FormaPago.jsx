import styled from '@emotion/styled'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
const FormaPago = () => {
    const navigate = useNavigate()

    const handleClick = (e ) => {
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
            <Container_CreditCard>
                <Card>
                    <Form>
                        <Label>
                            Tipo de tarjeta
                            <Select 
                                name="tipoTarjeta"
                            >
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
            </Container_CreditCard>
    </Container>
  )
}

export default FormaPago

const Select = styled.select`
    width: 100%;
    height: 30px;
    max-width: 600px;
    border-radius: 5px;
    border: 1px solid #9497FF;
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #9497FF;
    font-weight: 900;
    font-size: 1.0rem;
    padding-left: 10px;
    ::placeholder {
        text-align: center;
    }
    `

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    `
const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-bottom: 20px;
    margin-top: 5px;
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #9497FF;
    font-weight: 900;
    font-size: 1.0rem;
    `
const Input = styled.input`
    width: 100%;
    height: 30px;
    max-width: 600px;
    border-radius: 5px;
    border: 1px solid #9497FF;
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #9497FF;
    font-weight: 900;
    font-size: 1.0rem;
    padding-left: 10px;
    ::placeholder {
        text-align: center;
    }
    
    `
const Button = styled.button`

    background-color: #9497FF;
    color: #FFF;
    border: none;
    width: 50%;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #FFF;
    font-weight: 900;
    font-size: 1.0rem;
    margin-top: 20px;
    :hover {
        transition: all 0.3s ease-out;
        cursor: pointer;
        background-color: #FBAE56;
        color: #FFF;

    }
    `



const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `
const Heading = styled.h1`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #FFF;
    text-align: center;
    font-weight: 900;
    font-size: 1.7rem;
    margin-bottom: 20px;
    `
const Span = styled.span`
    color: #9497FF;
    `
const Line = styled.div`
    width: 40%;
    height: 0.3rem;
    background-color: #9497FF;
    justify-content: center;
    `
const TextPremium = styled.p`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #FFF;
    text-align: center;
    font-weight: 900;
    font-size: 1.0rem;
    margin-bottom: 20px;
    `
const Span2 = styled.span`
    color: #FBAE56;
    font-weight: 900;
    font-size: 1.2rem;
    `
const Container_CreditCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    `
const Card = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #FFF;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.2);
    margin-bottom: 20px;
        @media (min-width: 375px) {
            width: 80%;
            height: 38rem;
        }
        @media (min-width: 768px) {
            width: 90%;
            height: 35rem;
        }
    `
