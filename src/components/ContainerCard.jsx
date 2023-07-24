import Card from './Card'
import { ContainerCards } from '../styles/IndexStyles.js'

const ContainerCard = () => {
  return (
      <ContainerCards >
          <Card
              title="Tus datos están seguros"
              description="Tus datos están protegidos con los más altos estándares de seguridad."
          />
          <Card
              title="Mantente siempre actualizado"
              description="Notificaciones siempre que el precio de tus criptomonedas cambie."
          />

          <Card
              title="Toma las mejores decisiones"
              description="
          Toma las mejores decisiones con la información más actualizada."
          />
          <Card
              title="El mejor sitio para cotizar "
              description="Cotiza tus criptomonedas al instante con la mejor información."
          />
      </ContainerCards>
  )
}

export default ContainerCard
