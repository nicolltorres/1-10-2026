export default function Campos({etiqueta, nombre, tipo, placeholder}) {
    return (
        <div>
            <label htmlFor={nombre}>{etiqueta}</label>
            <input type={tipo} id={nombre} name={nombre} placeholder={placeholder}/>
        </div>
    )
}
 