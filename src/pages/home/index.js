import style from './style.module.css'

import posts from '../../posts/posts.json'
import Post from "../../components/post";

export default function Home(){
    return(

            <ul className={style.posts}>
                {posts.map((p)=>(
                    <li key={p.id}><Post post={p}/></li>
                ))}
            </ul>

    )
}