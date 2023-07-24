import imgBitcoin from '../img/bitcoin.jpeg'
import imgBilletera from '../img/billeteraVirtual.jpg'
import { useEffect } from 'react'
import {
  Container,
  Headline,
  Card,
  Text,
  IMG,
  P,
  ContainerStarts,
  ImgStar,
  Button,
  Input
} from '../styles/BlogStyles.js'

export const Blog = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
        <Container>
            <Headline>Blog</Headline>
            <Card>
                <Text>¿Que es un bitcoin?</Text>
                <IMG src={imgBitcoin} alt="blog" />
                <P>
                    Un bitcon es una moneda virtual o un medio de intercambio electrónico que sirve para adquirir productos y servicios como cualquier otra moneda. Pero esta moneda es descentralizada, es decir que no existe una autoridad o ente de control que sea responsable de su emisión y registro de sus movimientos.
                    Bitcoin usa tecnología peer-to-peer o entre pares para operar sin una autoridad central o bancos; la gestión de las transacciones y la emisión de bitcoins es llevada a cabo de forma colectiva por la red. Bitcoin es de código abierto; su diseño es público, nadie es dueño o controla Bitcoin y todo el mundo puede participar. Por medio de sus muchas propiedades únicas, Bitcoin permite usos interesantes no contemplados por ningún sistema de pagos anterior.
                </P>
                <ContainerStarts>
                    <P>Calificacion</P>
                    <IMG
                        src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                        alt="star"
                    />
                    <IMG
                        src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                        alt="star"
                    />
                    <ImgStar
                        src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                        alt="star"
                    />
                    <ImgStar
                        src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                        alt="star"
                    />
                    <ImgStar
                        src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                        alt="star"
                    />

                </ContainerStarts>
              <Button>Leer mas..</Button>
            </Card>
            <Card>
                <Text>¿Como invertir?</Text>
                <IMG src={imgBilletera} alt="blog" />

                <P>
                    Para invertir en criptomonedas es necesario tener una billetera virtual, la cual se puede descargar en la pagina oficial de bitcoin, una vez descargada la billetera se debe crear una cuenta y listo ya se puede invertir en bitcoin.
                </P>
                <ContainerStarts>

                    <P>Calificacion</P>
                    <IMG
                        src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                        alt="star"
                    />
                    <IMG
                        src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                        alt="star"
                    />
                    <IMG
                        src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                        alt="star"
                    />
                    <IMG
                        src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                        alt="star"
                    />

                  <ImgStar
                        src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                        alt="star"
                    />
                </ContainerStarts>
                <Button>Leer mas..</Button>

            </Card>
          <Text style={{ color: '#fff' }}> Newsletter</Text>
          <P style={{ color: '#FBAE56' }}>Suscribete para recibir noticias sobre bitcoin</P>
          <Input placeholder="correo@correo.com" />
          <Button>Enviar</Button>

        </Container>
  )
}
