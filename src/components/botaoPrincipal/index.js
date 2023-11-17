import style from './style.module.css'

export default function BotaoPrincipal({texto, classe}){


    return(
        <button className={`${style.botao} ${style[classe]} `}>{texto}</button>

    )
}