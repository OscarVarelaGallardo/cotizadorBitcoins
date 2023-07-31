import { CardTestimonio, TextPremium2, TextPremiumName } from '../styles/IndexStyles.js'

const CardTestimonial = ({ img, testimonio, nombre, fecha, _id }
) => {
  return (
      <CardTestimonio >
         <img
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                margin: '0 auto',
                display: 'block',
                marginTop: '20px'
              }}

              src={img} alt="imagen-testimonio1" border="0" />

          <TextPremium2>{testimonio}
        <TextPremiumName> - {nombre}</TextPremiumName>
          </TextPremium2>

      </CardTestimonio>
  )
}

export default CardTestimonial
