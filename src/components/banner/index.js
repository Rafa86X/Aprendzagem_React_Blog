import style from './style.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import foto from '../../assets/minha_foto.png'
export default function Banner(){


    return(
        <div className={style.banner}>
            <div className={style.apresentacao}>
                <h1 className={style.titulo}>
                    Ola Mundo
                </h1>

                <p className={style.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className={style.imagens}>
                <img className={style.circuloColorido} src={circuloColorido} alt='foto do autor'/>
                <img className={style.minhaFoto} src={foto} alt='foto do autor'/>
            </div>
        </div>
    )
}