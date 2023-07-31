import imgBitcoin from '../img/bitcoin.jpeg'
import { Button, Card, ContainerStarts, IMG, ImgStar, P, Text } from '../styles/BlogStyles.js'
const Blog = ({ name, title, description, date }) => {
  return (
    <>
      <Card>
          <Text>{title}</Text>
          <IMG src={imgBitcoin} alt="blog" />
        <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              fontSize: '18px',
              color: '#FFA201',
              fontWeight: 'bold'

            }}
        >
            <p>Autor:{name}</p>
            <p>Fecha:{ new Date(date).toLocaleDateString()}</p>
              </div>
          <P> {description}</P>
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
      </>
  )
}

export default Blog
