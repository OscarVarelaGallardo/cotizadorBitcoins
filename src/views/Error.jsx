import imgError from '../img/error.jpg'
import { ContainerError, IMG, TextFooter, Button } from '../styles/ErrorStyles'

const Error = () => {
  return (
    <ContainerError>
          <TextFooter>ERROR 404</TextFooter>
          <Button to="/">Volver al inicio</Button>
            <IMG src={imgError} alt="error404" />
    </ContainerError>

  )
}

export default Error
