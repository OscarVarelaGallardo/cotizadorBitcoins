import { CardTestimonio, TextPremium2, TextPremiumName, IMGTestimonio } from '../styles/IndexStyles.js'
import imgUser1 from '../img/fotoUser1.jpeg'
const CardTestimonial = ({ messages }) => {
  return (
    messages.map((message) => (
      <CardTestimonio
        key={message._id}
      >
        <IMGTestimonio src={imgUser1}

        alt="user" />
        <TextPremium2>
          <TextPremiumName>{message.name}</TextPremiumName>
          <p>{message.message}</p>
        </TextPremium2>
      </CardTestimonio>
    ))

  )
}
export default CardTestimonial
