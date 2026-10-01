import Tarjeta from "../Orquestador/Tarjeta";
import Obras from "../data.json";
import Boton from "../Componentes/Tarjetas/Boton";

export default function Tar() {
  return (
    <div>
      <div className="productos">
        {Obras.map((obra) => (
            <Tarjeta
               key={obra.id}
               title={obra.title}
               descripcion={obra.descripcion}
               color={obra.color}
               img={obra.img}
            />
       ))}
       </div>
       <Boton />
    </div>
 )   
}

