import { useNavigate } from 'react-router-dom'
import ABC from '../asset/images.jfif'
import Efecto from  '../Componentes/Home/Efecto'

export default function Inicio() {
const llevame=useNavigate()
return(
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <h1>Bienvenidos</h1>
                <Efecto
                src={ABC}
                onFin={()=>llevame('/Tar')}
                />
        </div>
     )
} 