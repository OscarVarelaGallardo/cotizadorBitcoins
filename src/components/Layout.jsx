import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'



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



const Layout = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Container>
                {
                    //validar que este en la pagina de login 
                    window.location.pathname === '/login' ? null :
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
}       {   window.location.pathname === '/register' ? null :
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
}
            </Container>
            <Outlet />
        </div>
    )
}

export default Layout