import styled from '@emotion/styled'
import imgBitcoin from '../img/bitcoin.jpeg'
import imgBilletera from '../img/billeteraVirtual.jpg'
export const Blog = () => {
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
            <Container_Starts>
                <P>Calificacion</P>
               <IMG
                src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                alt="star"
               />
                  <IMG
                      src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                      alt="star"
                  />
                  <Img_star
                      src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                      alt="star"
                  />
                  <Img_star
                      src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                      alt="star"
                  />
                  <Img_star
                      src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                      alt="star"
                  />
                 
                  

            </Container_Starts>
        </Card>
          <Card>
              <Text>¿Como invertir?</Text>
              <IMG src={imgBilletera} alt="blog" />

              <P>
                    Para invertir en criptomonedas es necesario tener una billetera virtual, la cual se puede descargar en la pagina oficial de bitcoin, una vez descargada la billetera se debe crear una cuenta y listo ya se puede invertir en bitcoin.
                   </P>
              <Container_Starts>
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
                 
                  <Img_star
                      src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                      alt="star"
                  />
                
                

              </Container_Starts>
              <Button>Leer mas..</Button>
            
               

                  <Text style={{ color: 'black' }}> Newsletter</Text>
              <P style={{ color: '#FBAE56' }}>Suscribete para recibir noticias sobre bitcoin</P>
                  <Input placeholder="Email" />
                  <Button>Enviar</Button>
           
          </Card>
         

       
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    `
const Headline = styled.h1`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #FFF;
    font-weight: 900;
    font-size: 2rem;
    `
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    `
const IMG = styled.img`
    width: 100%;
    max-width: 600px;
    height: 100%;
    border-radius: 0.5rem;
    margin-bottom: 20px;
        @media (max-width: 768px) {
            width: 100%;
            max-width: 300px;
            height: 100%;
            border-radius: 0.5rem;
            margin-bottom: 20px;
        }
      @media (max-width: 1024px) {
            width: 100%;
            max-width: 300px;
            height: 100%;
            border-radius: 0.5rem;
            margin-bottom: 20px;
        }
          

        `
const Text = styled.h2`
    font-family: 'Lato', sans-serif, 'system-ui';
    color: #000;
    font-weight: 900;
    font-size: 1.5rem;

    margin-bottom: 1rem;
    text-align: center;
    `
const P = styled.p`
    font-family: 'Lato', sans-serif, 'system-ui';
        max-width: 1200px;
    color: #000;
    font-weight: 400;
    font-size: 1rem;`
const Container_Starts = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    `
const Img_star = styled.img`
    width: 50%;
    max-width: 20px;
    height: 50%;
    border-radius: 0.5rem;
    margin-bottom: 20px;
   
    `
const Input = styled.input`
    width: 70%;
    max-width: 1200px;
    border-radius: 0.5rem;
    margin-bottom: 20px;
    padding: 1rem ;
    border: 1px solid #9497FF;

    `
const Button = styled.button`
    height: 40px;
    width: 100%;
    border-radius: 0.5rem;
    margin-bottom: 20px;
    max-width: 400px;
    border: 1px solid #9497FF;
    background-color: #9497FF;
    color: #FFF;
    font-weight: 900;
    font-size: 1rem;
    cursor: pointer;

    
    `

