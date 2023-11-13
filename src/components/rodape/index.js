import style from './style.module.css'
import { ReactComponent as MarcaRegistrada } from '../../assets/marca_registrada.svg'

export default function Rodape(){


    return(
        <footer className={style.rodape}>
            <MarcaRegistrada/>
            Desenvlvido por aaracaoifchjshaofiehqdiasddah
        </footer>
    )
}