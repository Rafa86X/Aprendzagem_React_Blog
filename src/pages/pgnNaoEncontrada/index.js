import style from './style.module.css'
import erro404 from '../../assets/erro_404.png'
import BotaoPrincipal from 'components/botaoPrincipal'
import { useNavigate } from 'react-router-dom'

export default function PgnNaoEncontrada(){

      const  navegar = useNavigate()

    return(
        <>
            <div className={style.conteudoContainer}>
                <span className={style.texto404}>404</span>
                <h1 className={style.titulo}>Ops Pagina não encontrada</h1>
                <p className={style.paragrafo}> Tem certeza que é isso que esta pourando?</p> 
                <p className={style.paragrafo}> Espere um pouco e recarregue a página</p> 
                <div className={style.botaoContainer} 
                    onClick={()=> navegar(-1)}
                >
                    <BotaoPrincipal texto={'Voltar'} classe={'lg'} />
                </div>

                <img src={erro404} className={style.imagemCachorro} alt='Doguinho de oculos'/>
                
            </div>
            <div className={style.espacoEmBranco}></div>
        </>
            
    )
}