import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import Footer from './Footer'
import AuthContext from '../context/AuthProvider'


const Layout = () => {
    const navigate = useNavigate()
    const { setIsAuth, isAuth } = useContext(AuthContext)

    return (
        <div>
            <Container>
                {

                    window.location.pathname === '/login' || isAuth ? null
                        :
                        <Button
                            type="button"
                            onClick={() => {
                                navigate('/login')
                            }
                            }
                        >
                            Iniciar Sesión

                        </Button>
                }  
                     {window.location.pathname === '/register' || isAuth ? null :
                    <Button
                        type="button"
                        onClick={() => {

                            navigate('/register')
                        }
                        }
                    >
                        Registrarse
                    </Button>

                }
                {window.location.pathname === '/settings' || !isAuth ?
                    <Button
                        type="button"
                        onClick={() => {
                            navigate('/')
                        }}
                    >
                        Volver al Inicio
                    </Button>
                    :
                    <>                    
                    <Button
                        type="button"
                        onClick={() => {

                            navigate('/settings')
                        }
                        }
                    >
                        Configuración
                    </Button>
                        <Button
                            type="button"
                            onClick={() => {
                                setIsAuth(false)
                                navigate('/')
                            }}>
                            Cerrar Sesión
                        </Button>
                    </>

                }




            </Container>
            <Headers>Token <Span> Trade</Span></Headers>
            <Outlet >
            </Outlet>
            <Footer />
        </div>
    )
}

export default Layout


const Span = styled.span`
    color: #fff;
     font-family:roboto;
      font-weight: 900;
`

const Button = styled.button`
    background-color: #377BAA;
    padding: 5px  20px 5px 20px;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    &:hover {
        background-color: #2A5F8A;
        cursor: pointer;
    }
   
        

`
const Headers = styled.div`
    font-family: roboto,sans-serif,serif;
    color: #F9A826;
    text-align: center;
    font-weight: 900;
    font-size: 3.7rem;
    
    

`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0 10px 0;
    @media (min-width: 375px) {
        margin: 20px 0 20px 0;

    }
    @media (min-width: 768px) {
      justify-content: flex-end;
    }
`

