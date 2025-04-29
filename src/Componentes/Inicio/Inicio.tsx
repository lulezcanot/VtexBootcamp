import './index.css'
import vtexBootcampInicio from '../../assets/vtex-bootcamp-inicio.png'
import { useNavigate } from 'react-router-dom';

function Inicio() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/niveles');
  };

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={vtexBootcampInicio} alt="" />
      </div>
      <div className='card-content'>
        <h2 className='card-title'>Bienvenido al BootCamp</h2>
        <h2 className='card-title-vtex'>Vtex</h2>
        <p className='card-text'>¡La educación no tiene ningún valor si no la pones en práctica!</p>
        <button className='card-buttom' onClick={handleClick}>Empezar</button>
      </div>
    </div>
  )
}

export default Inicio
