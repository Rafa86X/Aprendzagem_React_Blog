import { useParams } from 'react-router-dom'
import style from './style.module.css'
import posts from '../../posts/posts.json'
import PostModelo from 'components/postModelo'
import ReactMarkdown from 'react-markdown'

export default function Post(){
    const paramas = useParams()


    const post = posts.find((p)=>{
        return p.id === Number(paramas.id)
    })

    if(!post){
        return <h1>Post não encotrado</h1>
    }

    return(
        <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <ReactMarkdown>{post.texto}</ReactMarkdown> 
        </PostModelo>
    )
}