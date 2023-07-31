import styled from '@emotion/styled'
import axios from 'axios'
import React, { useState } from 'react'
import Swall from 'sweetalert2'
const ContainerFormularioBlog = () => {
  const [post, setPost] = useState({})

  const handleInput = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }

  const postForm = async (post) => {
    try {
      setPost({
        ...post,
        email: 'correo@correo.com'
      })
      const response = await axios.post('http://localhost:8000/blog', post)
      if (response.data.body.message === 'Saved publication') {
        Swall.fire({
          icon: 'success',
          title: 'Publicacion guardada',
          text: 'Tu publicacion se ha guardado correctamente'
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  const postImg = async (img) => {
    try {
      const formData = new FormData()
      formData.append('img', img)
      formData.append('email', 'correo@correo.com')
      const response = await axios.post('http://localhost:8000/uploadImg', formData)
      if (response.data.body.message === 'Saved image') {
        Swall.fire({
          icon: 'success',
          title: 'Imagen guardada',
          text: 'Tu imagen se ha guardado correctamente'
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const sendForm = (e) => {
    e.preventDefault()
    if ((post.title && post.description && post.name) || post.img) {
      const response = async () => {
        await postForm(post)
        // await postImg(post.img)
      }
      response()
    } else {
      alert('Todos los campos son obligatorios')
    }
  }
  return (
        <Container>
            <Headline>Escribe tu primera entrada de blog</Headline>

            <TextLabel
                htmlFor="title" >
                Ingresa el titulo de tu entrada
            </TextLabel>
            <Input
                placeholder="Ejemplo: Como comprar bitcoin"
                onChange={handleInput}
                name="title"
            />
          <TextLabel htmlFor="description" >
                Ingresa la descripcion de tu entrada
            </TextLabel>
            <Textarea
                placeholder="Ejemplo: Lorem ipsum dolor sit amet consectetur adipisicing elit."
                onChange={handleInput}
                name="description"
            />
            <TextLabel htmlFor="name" >
                Ingresa tu nombre
            </TextLabel>
            <Input placeholder="Ejemplo: Juan Perez"
                onChange={handleInput}
                name="name"
            />
            <Label htmlFor="img">
                <i className="fas fa-cloud-upload-alt"
                    style={{
                      fontSize: '20px',
                      marginRight: '10px'
                    }}

                >
                </i>
                Subir imagen
            </Label>
            <input type="file" id="img" name='img' style={{ display: 'none' }}
              onChange={handleInput}
            />

            <Button
                onClick={sendForm}>
                Enviar
            </Button>

        </Container>
  )
}

export default ContainerFormularioBlog

const TextLabel = styled.label`
    color: #fff;
    font-weight: bold;
    margin-bottom: 20px;
    cursor: pointer;
    text-transform: uppercase;
`

const Label = styled.label`
    width: 20rem;
    height:6rem;
    border-radius: 5px;
    border: none;
    background-color: #FBAE56;
    color: #fff;
    font-weight: bold;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    &:hover{
        background-color: #FFA201;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    max-width: 970px;

`
const Headline = styled.h1`
    font-size: 30px;
    color: #fff;
    margin-bottom: 20px;
`
const Input = styled.input`
    width: 70%;
    height: 30px;
    border-radius: 5px;
    border: none;
    margin-bottom: 20px;
    padding-left: 10px;
`
const Button = styled.button`
    width: 200px;
    height: 30px;
    border-radius: 5px;
    border: none;
    background-color: #FB6D3A;
    color: #fff;
    font-weight: bold;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        background-color: #FFA201;
    }
`
const Textarea = styled.textarea`
    width: 70%;
    height: 200px;
    border-radius: 5px;
    border: none;
    margin-bottom: 20px;
    padding-left: 10px;
`
