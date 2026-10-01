import { Link } from "react-router-dom"
import B from "../../asset/boton.webp"

export default function Boton() {
    return (
        <Link to="/Formulario"><img src={B} alt="Boton" /></Link>
    )
}