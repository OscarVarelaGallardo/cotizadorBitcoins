import { CardTestimonio, TextPremium2, TextPremiumName } from '../styles/IndexStyles.js'
import imgUser1 from '../img/fotoUser1.jpeg'
const CardTestimonial = ({ messages }) => {
  return (
    messages.map((message) => (
      <CardTestimonio
        key={message._id}
      >
        <img src={imgUser1}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          marginRight: '20px',
          marginTop: '20px'
        }}
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
