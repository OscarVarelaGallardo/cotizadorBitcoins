import { useNavigate } from 'react-router-dom'
import { Card_Premium,Heading2,TextPremium,Button2,Span2 } from '../styles/Index'
const CardPremium = (
    {
        title,
        textPremium,
        cost,
  
    }
) => {
    const navigate = useNavigate();
 const handleClick = () => {

    navigate('/register')
  }

  return (
      <Card_Premium>
          <Heading2>{title}</Heading2>
          <TextPremium>{textPremium}</TextPremium>
          <TextPremium>{cost}</TextPremium>
          <Button2
              onClick={handleClick}
          >¡OBTENER <Span2> PREMIUM</Span2> YA!</Button2>
      </Card_Premium>
  )
}

export default CardPremium