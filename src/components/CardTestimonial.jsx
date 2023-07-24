import { CardTestimonio, TextPremium2 } from '../styles/IndexStyles.js'

const CardTestimonial = ({ img, testimonio, nombre }
) => {
  return (
      <CardTestimonio>
          <img
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                display: 'block',
                margin: 'auto'
              }}

              src={img} alt="imagen-testimonio1" border="0" />

          <TextPremium2>{testimonio}</TextPremium2>

          <TextPremium2> - {nombre}</TextPremium2>
      </CardTestimonio>
  )
}

export default CardTestimonial
