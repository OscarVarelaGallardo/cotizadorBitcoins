import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'



const Button = styled.button`
    background-color: #377BAA;
    padding: 10px  30px 10px 30px;
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
const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 20px;
`



const Layout = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Container>
            <Button
                type="button"
                onClick={() =>
                    {
                        navigate('/login')
                    }
                }
            >
                Iniciar Sesión

            </Button>
            <Button
                type="button"
                onClick={() => 
                    { 

                        navigate('/register')
                     }
                }
            >
                Registrarse
            </Button>
            </Container>
            <Outlet />
        </div>
    )
}

export default Layout