import { useEffect, useState } from 'react'
import {
  Button,
  Container,
  Headline,
  Input,
  P,
  Text,
  HeadLine2
} from '../styles/BlogStyles.js'
import Blog from '../components/Blog'
import { getBlogs } from '../helpers/index.js'
import ContainerFormulario from '../components/ContainerFormularioBlog.jsx'

export const Blogs = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getBlogs()
      setBlogs(data.body)
    }
    getData()
  }, [])

  return (
    <Container>
      <Headline>Entrada Blog</Headline>

    {blogs.length === 0
      ? < HeadLine2>¡No hay entradas aun!</ HeadLine2>
      : blogs.map(blog => {
        return (<Blog
          key={blog._id}
          name={blog.name}
          title={blog.title}
          description={blog.description}
          date={blog.date}
        />
        )
      })
    }
      <ContainerFormulario/>
        <Text style={{ color: '#fff' }}> Newsletter</Text>
      <P style={{ color: '#FBAE56' }}>Suscribete para recibir noticias sobre bitcoin</P>
      <Input placeholder="correo@correo.com" />
      <Button>Enviar</Button>

    </Container>
  )
}
