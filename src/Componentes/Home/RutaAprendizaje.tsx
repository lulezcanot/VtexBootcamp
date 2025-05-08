import ImgFacil from '../../assets/Facil.png'
import ImgIntermedio from '../../assets/Intermedio.png'
import ImgDificil from '../../assets/Dificil.png'

interface CardProps {
  imagen: string;
  Titulo: string;
  Descripcion: string;
}

function Card(props: CardProps) {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-purple-300 to-purple-400 rounded-lg shadow-lg p-4 m-2 w-[462px] h-72">
      <img src={props.imagen} alt={props.imagen} className='rounded-lg h-52' />
      <h2 className='text-xl font-bold'>{props.Titulo}</h2>
      <p>{props.Descripcion}</p>
    </div>
  );
}

function Niveles() {
  return (
    <div className='flex flex-col justify-center items-center pt-10 pb-10'>
      <h1 className='text-xl md:text-4xl font-extrabold text-black mb-10 mt-6'>Ruta de Aprendizaje</h1>
      <div className="flex flex-row gap-32">
          <Card
            imagen={ImgFacil}
            Titulo="Básico"
            Descripcion="Vtex CLI, Vtex Loggin, Vtex Workspace..."
          />
          <Card
            imagen={ImgIntermedio}
            Titulo="Intermedio"
            Descripcion="Pdp, Plp, Minicartv2, My Acount..."
          />
          <Card
            imagen={ImgDificil}
            Titulo="Avanzado"
            Descripcion="Checkout, Componentes Custom, Modales..."
          />
      </div>
    </div>
  );
}

export default Niveles;
