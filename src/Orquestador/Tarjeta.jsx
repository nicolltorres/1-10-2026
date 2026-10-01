import "../Style/Tarjeta.css";
import Titulo from "../Componentes/Tarjetas/Titulo";
import Imagen from "../Componentes/Tarjetas/Imagen";
import Descripcion from "../Componentes/Tarjetas/Descripcion";

export default function Tarjeta({ title, descripcion, img, color }) {
  return (
    <div className="tarjeta">

      <div
        className="imagen-producto"
        style={{ backgroundColor: color }}
      >
        <Imagen img={img} />
      </div>

      <div className="contenido">

        <Titulo title={title} />

        <Descripcion descripcion={descripcion} />

      </div>

    </div>
  );
}