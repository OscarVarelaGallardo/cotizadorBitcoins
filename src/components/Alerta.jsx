import React from 'react'

const Alerta = (
  {
    text
  }

) => {
  return (

    // Crear una notificacion de error
    <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'

        }}

    >
            <div
                style={{
                  color: '#fff',
                  backgroundColor: '#000',
                  width: '50%',
                  height: '100%',
                  maxWidth: '800px',
                  maxHeight: '800px',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  textAlign: 'center'

                }}
            ><p>
                Tu moneda favorita cuenta actualmente con un valor de :  {text}
              </p>
            </div>

    </div>
  )
}

export default Alerta
