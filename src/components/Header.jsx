import img from '../img/imagen-criptos.png'
import { H1, Line, Imagen, Span } from '../styles/LoginStyles'

const Header = () => {
  return (
        <>
            <H1>COTIZA <Span>CRIPTOMONEDAS </Span>AL INSTANTE </H1>
            <Line />
            <Imagen src={img} />
        </>
  )
}

export default Header
