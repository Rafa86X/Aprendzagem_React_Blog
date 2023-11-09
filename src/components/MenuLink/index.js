import style from './style.module.css'
import { Link, useLocation } from 'react-router-dom'

export default function MenuLink({ to, text }){
    const local = useLocation()

    return(
        <Link className={`${local.pathname===to ? style.linkDestacado : ''} ${style.link }`} to={to}>{text}</Link>
    )
}