import React, { useContext } from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'
import styled from '@emotion/styled'
import Footer from './Footer'
import AuthContext from '../context/AuthProvider'
import PremiumContext from '../context/PremiumProvider'

const Layout = () => {
  const navigate = useNavigate()
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const { setIsUserPremium } = useContext(PremiumContext)

  return (
        <div>
            <Container>

                {
                    window.location.pathname === '/login' || isAuth
                      ? null
                      : <Button
                            type="button"
                            onClick={() => {
                              navigate('/login')
                            }
                            }
                        >
                            Iniciar Sesión

                        </Button>
                }
                     {window.location.pathname === '/register' || isAuth
                       ? null
                       : <Button
                        type="button"
                        onClick={() => {
                          navigate('/register')
                        }
                        }
                    >
                        Registrarse
                    </Button>

                }
                {window.location.pathname === '/settings' || !isAuth
                  ? null
                  : <>
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
                              setIsUserPremium(false)
                              setIsAuth(false)

                              navigate('/')
                            }}>
                            Cerrar Sesión
                        </Button>
                    </>

                }

            </Container>
            <Linka to='/' >
            <Headers>Token <Span> Trade</Span></Headers>
            </Linka>
            <Outlet >
            </Outlet>
            <Footer />
        </div>
  )
}

export default Layout

const Linka = styled(Link)`
    text-decoration: none;
    `

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
    justify-content: flex-end;
    margin: 10px 0 10px 0;
    @media (min-width: 375px) {
        margin: 20px 0 20px 0;

    }
    @media (min-width: 768px) {
      justify-content: flex-end;
    }
`
