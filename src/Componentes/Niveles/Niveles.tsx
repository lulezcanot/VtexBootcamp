import './index.css'
import ImgFacil from '../../assets/Facil.png'
import ImgIntermedio from '../../assets/Intermedio.png'
import ImgDificil from '../../assets/Dificil.png'
import { Link } from 'react-router-dom';

interface CardProps {
  imagen: string;
  Titulo: string;
  Descripcion: string;
}

function Card(props: CardProps) {
  return (
    <div className="card-niveles">
      <img src={props.imagen} alt={props.imagen} />
      <h2>{props.Titulo}</h2>
      <p>{props.Descripcion}</p>
    </div>
  );
}

function Niveles() {
  return (
    <div className='niveles-container'>
      <h1>Nivel de Aprendizaje</h1>
      <div className="cards-container">
        <Link to="/niveles/basico">
          <Card
            imagen={ImgFacil}
            Titulo="Básico"
            Descripcion="Vtex CLI, Vtex Loggin, Vtex Workspace..."
          />
        </Link>
        <Link to="/niveles/intermedio">
          <Card
            imagen={ImgIntermedio}
            Titulo="Intermedio"
            Descripcion="Pdp, Plp, Minicartv2, My Acount..."
          />
        </Link>
        <Link to="/niveles/avanzado">
          <Card
            imagen={ImgDificil}
            Titulo="Avanzado"
            Descripcion="Checkout, Componentes Custom, Modales..."
          />
        </Link>
      </div>
    </div>
  );
}

export default Niveles;
