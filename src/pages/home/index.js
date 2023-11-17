import style from './style.module.css'

import posts from '../../posts/posts.json'
import PostCard from "../../components/postCard";

export default function Home(){
    return(

            <ul className={style.posts}>
                {posts.map((p)=>(
                    <li key={p.id}><PostCard post={p}/></li>
                ))}
            </ul>

    )
}