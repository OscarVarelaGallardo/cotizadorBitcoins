import { useNavigate } from 'react-router-dom'
import { ContainerCardPremium, Heading2, TextPremium, Button2, Span2 } from '../styles/IndexStyles'

const CardPremium = (
  {
    title,
    textPremium,
    cost
  }
) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/register')
  }

  return (
      <ContainerCardPremium>
          <Heading2>{title}</Heading2>
          <TextPremium>{textPremium}</TextPremium>
          <TextPremium>{cost}</TextPremium>
          <Button2
              onClick={handleClick}
          >¡OBTENER <Span2> PREMIUM</Span2> YA!</Button2>
      </ContainerCardPremium>
  )
}

export default CardPremium
