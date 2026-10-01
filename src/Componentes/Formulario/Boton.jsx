export default function Boton({ etiqueta, nombre, tipo }) {
    return (
        <button
            name={nombre}
            type={tipo}
        >
            {etiqueta}
        </button>
    );
}