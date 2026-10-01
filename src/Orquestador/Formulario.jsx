import Campos from "../Componentes/Formulario/Campos";
import Boton from "../Componentes/Formulario/Boton";
import "../Style/Formulario.css";

const Entradas=[
    {nombre:"titulo", tipo:"text", placeholder:"Titulo"},
    {nombre:"imagen", tipo:"text", placeholder:" imagen"},
    {nombre:"descripcion", tipo:"text", placeholder:"Descripción"},
    {nombre:"color", tipo:"text", placeholder:"Color"}
]
export default function Formulario() {
    return (
        <div>
            <form action="">
                {Entradas.map((campos)=>(
                    <Campos
                        key={campos.nombre}
                        etiqueta={campos.nombre}
                        nombre={campos.nombre}
                        tipo={campos.tipo}
                        placeholder={campos.placeholder}
                    />
                ))}

                <Boton
                    etiqueta="Enviar"
                    nombre="enviar"
                    tipo="submit"
                />

            </form>
        </div>
    )
}