import React from 'react'

const Card = ({ title, description }) => {
  return (
        <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#FFF',
          width: '100%',
          borderRadius: '10px ',
          padding: '20px',
          border: '1px solid #66A2FE'

        }} >
            <h2
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '24px',
                  textTransform: 'uppercase',
                  margin: '10px 0',
                  color: '#F9A826'
                  // hover

                }}

            >
                {title}

            </h2>
            <p
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#FFF'
                }}

            >
                {
                    description
                }
            </p>
        </div>
  )
}

export default Card
