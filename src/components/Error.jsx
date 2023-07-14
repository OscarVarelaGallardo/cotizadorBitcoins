import styled from '@emotion/styled'



const Error = ({children}) => {
    return (
        <Texto>
            {children}
        </Texto>
    )
}

export default Error

const Texto = styled.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 10px;
    font-size: 20px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
    border-radius: 6px;
    margin-bottom: 20px;
    width: 70%;
   
`