
import "./Style/Tarjeta.css";

const productos = [
  {
    nombre: "LA MONA LISA",
    descripcion:
      "Leonardo da Vinci. Creada entre 1503 y 1519. Famosa por la enigmática sonrisa de su modelo y su robo en 1911. Se encuentra en el Museo del Louvre de París.",

  },
  {
    nombre: "EL GRITO",

    descripcion:
      "Edvard Munch. Creado en 1893.Icono universal de la angustia y la ansiedad humana.Se encuentra en el Museo Nacional de Noruega en Oslo.",

  },
  {
    nombre: "NASA",
    descripcion: "Un astronauta de Artemis II tomó esta foto de la Tierra desde la ventana de la nave Orión tras completar la combustión translunar de inyección. Hay dos auroras (arriba derecha e inferior izquierda) y luz zodiacal (abajo derecha) es visible cuando la Tierra eclipsa al Sol.",
    
  },
  {
    nombre: "IMPRESIÓN, SOL NACIENTE",
    descripcion: "Claude Monet Quizá no sea el cuadro más famoso del movimiento impresionista pero sí marcó un punto de inflexión en el mundo del arte puesto que a este cuadro se debe el nombre de Impresionismo. los críticos utilizaron el término tomado de la obra, como una burla.",
  },
  {
    nombre: "LA CAPILLA SIXTINA",
    descripcion: "La Capilla Sixtina, Miguel Ángel. Pintada entre 1508 y 1512, es una de las obras más reconocidas del Renacimiento italiano. Representa escenas bíblicas del Antiguo y Nuevo Testamento y se encuentra en la Ciudad del Vaticano.",
    
  },
  {
    nombre: "LA ULTIMA CENA",
    descripcion: "La Última Cena, Leonardo da Vinci. Pintada entre 1495 y 1498, es una de las obras más reconocidas del Renacimiento italiano. Representa la escena bíblica de la última cena de Jesús con sus discípulos y se encuentra en el convento de Santa Maria delle Grazie en Milán.",
  
  },
  {
    nombre: "LA JOVEN DE LA PERLA",
    descripcion:"La joven de la perla, Johannes Vermeer Uno de los retratos más bellos de la historia del arte, realizado por el pintor holandés sobre 1665. También se le conoce como Muchacha con turbante y puede verse en el museo Mauritshuis, en La Haya (Países Bajos).",
    
  
  },
  {
    nombre: "NACIMIENTO DE VENUS",
    descripcion: "Esta obra representa una escena de la mitología grecoromana exquisitamente realizado en 1485 y es uno de los primeros desnudos paganos de la historia de la pintura, que se encuentra expuesta en la galería de los Uffizi en Florencia.",
  },
];

function Tarjeta() {
  return (
    <div className="pagina">

      <header className="hero">
        <h1>GalHelyColl</h1>
        <p>Tienda de arte</p>
      </header>

      <main className="productos">

        {productos.map((producto, foto) => (
          <div className="tarjeta" key={foto}>

            <div className="imagen-producto">

               {foto === 0 ? (
        <img
          src="/monalisa.jpg"
          alt="La Mona Lisa"
        />
      ) : foto === 1 ? (
        <img
          src="/El grito.jpg"
          alt="El Grito"
        />
      ) : foto === 2 ? (
        <img
          src="/NASA.jpg"
          alt="NASA"
        />
      ) : foto === 3 ? (
        <img
          src="/impresion sol.jpg"
          alt="IMPRESIÓN, SOL NACIENTE"
        />
      ) : foto === 4 ? (
        <img
          src="/Capilla sixtina.jpg"
          alt="LA CAPILLA SIXTINA"
        />
      ) : foto === 5 ? (
        <img
          src="/ultima cena.jpg"
          alt="La Última Cena"
        />
      ) : foto === 6 ? (
        <img
          src="/la joven de la perla.jpg"
          alt="LA JOVEN DE LA PERLA"
        />
      ) : foto === 7 ? (
        <img
          src="/nacimiento venus.jpg"
          alt="El Nacimiento de Venus"
        />
      ) : (
        <div className="imagen-vacia">
          450 × 300
        </div>
      )}

    </div>

            <div className="contenido">

              <h2>{producto.nombre}</h2>


              <div className="Descripcion">

                  {producto.descripcion}
               

              </div>

            </div>

          </div>
        ))}

      </main>

    </div>
  );
}

export default Tarjeta
