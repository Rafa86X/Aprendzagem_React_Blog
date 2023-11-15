import Banner from 'components/banner'
import style from './style.module.css'
import { Outlet } from 'react-router-dom'

export default function PaginaPadrao(){


    return(
        <main>
            <Banner/>
            <Outlet/>
        </main>
    )
}