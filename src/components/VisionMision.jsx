import { Heading3 } from '../styles/IndexStyles.js'

const VisionMision = () => {
  return (
      <div
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(1,1fr)', padding: '2rem', borderRadius: '1rem', marginTop: '2rem', marginBottom: '2rem'
          }}

      >
          <Heading3 >Visión </Heading3>
          <p style={{ marginBottom: '9rem', textAlign: 'justify', fontSize: '1.2rem', fontWeight: '400', lineHeight: '1.5rem', color: '#fff', letterSpacing: '1px' }} >
              Nuestra misión es crear una aplicación líder en el mercado que brinde una experiencia integral y confiable, accediendo a información actualizada y relevante sobre el mundo de las criptomonedas. Nos gustaría ser una aplicación referente para inversores y entusiastas, ofreciendo interfaces intuitivas y datos precisos que les permitan tomar la mejor decisión informada y segura.
          </p>
          <Heading3>Misión </Heading3>
          <p style={{ marginBottom: '2rem', textAlign: 'justify', fontSize: '1.2rem', fontWeight: '400', lineHeight: '1.5rem', color: '#fff', letterSpacing: '1px' }}
          >

              Nuestra misión es empoderar a nuestros usuarios brindándoles acceso instantáneo y notificaciones confiables a una amplia gama de información sobre criptomonedas. Nos comprometemos a ser la plataforma más completa y accesible del mercado proporcionando datos actualizados y herramientas tecnológicas que permitan tomar decisiones informadas y estratégicas en sus inversiones.

          </p>

      </div>
  )
}

export default VisionMision
