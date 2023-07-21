
import { Card_Testimonio, TextPremium2 } from '../styles/Index.js'

const CardTestimonial = ({ img,testimonio,nombre }
) => {
  return (
      <Card_Testimonio>
          <img
              style={{
                  width: '200px', height: '200px', borderRadius: '50%',
                  display: 'block', margin: 'auto'
              }}

              src={img} alt="imagen-testimonio1" border="0" />

          <TextPremium2>{testimonio}</TextPremium2>

          <TextPremium2> - {nombre}</TextPremium2>
      </Card_Testimonio>
  )
}

export default CardTestimonial