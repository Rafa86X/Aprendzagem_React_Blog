import { Link, useLocation } from 'react-router-dom'
import style from './menu.module.css'
import MenuLink from '../MenuLink'

export default function Menu(){


    return(
        <header>
            <nav className={style.navegacao}>
                <MenuLink text={'Inicio'} to={'/'} />
                <MenuLink text={'Sobre Mim'} to={'/aboutme'}/>
            </nav>
        </header>
    )
}