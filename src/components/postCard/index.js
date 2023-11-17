import { Link } from 'react-router-dom'
import style from './style.module.css'
import BotaoPrincipal from 'components/botaoPrincipal'

export default function Post({post}){


    return(
        <Link to={`/post/${post.id}`}>
            <div className={style.post}>
                <img className={style.capa} src={`/assets/posts/${post.id}/capa.png`} alt='imagem da capa'/>
                <h2 className={style.titulo}>{post.titulo}</h2>
                <BotaoPrincipal texto={'Ler'}/>
            </div>
        </Link>
    )
}