import React from 'react'
import styled from '@emotion/styled'

const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    margin-bottom: 20px;
    margin-top: 10px;
    fontFamily: 'Inter', sans-serif;
    `

const Button = styled.button`
    background-color: #377BAA;
    padding: 10px  30px 10px 30px;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-left: 40%;
    
    &:hover {
        background-color: #2A5F8A;
        cursor: pointer;
    }

    `

const FormularioRegistro = () => {
  return (
   


      <form
          style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
          }}>
          <div

          >
              <label
                  style={{
                      color: 'white',
                      //Bold
                      fontWeight: 'bold',
                  }}
              >Nombre</label>
              <Input
                  type="text"
                  placeholder="Ejemplo: Juan"
                  //poner el texto mas a la derecha
                  style={{
                      textAlign: 'start',
                      width: '100%',
                      minWidth: '100%',
                      paddingLeft: '10px',

                  }}

              />
              <label
                  style={{
                      color: 'white',
                      fontWeight: 'bold',
                      width: '100%',

                  }}
              >Fecha de Nacimiento</label>
              <Input
                  type="date"
                  style={{
                      paddingLeft: '10px',
                      width: '100%',
                      minWidth: '100%',


                  }}

              />

              <label
                  style={{
                      color: 'white',
                      fontWeight: 'bold',
                      width: '100%',
                      minWidth: '100%',
                  }}
              >Correo Electrónico</label>
              <Input
                  type="email"
                  placeholder="Ejemlo:correo@correo.com"
                  style={{
                      paddingLeft: '10px',
                  }}
              />
              <label
                  style={{
                      color: 'white',
                      fontWeight: 'bold',
                  }}
              >Contraseña</label>
              <Input
                  type="password"
                  placeholder="Ejemplo: 123456"
                  style={{
                      paddingLeft: '10px',

                  }}
              />
              <label
                  style={{
                      color: 'white',
                      fontWeight: 'bold',
                  }}
              >Confirmar Contraseña</label>
              <Input

                  type="password"
                  placeholder="Ejemplo: 123456"
                  style={{
                      paddingLeft: '10px',
                  }}

              />
              <div
                  style={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                  }}
              >


                  <Button>REGISTRARSE</Button>
              </div>
          </div>

      </form>
  )
}

export default FormularioRegistro