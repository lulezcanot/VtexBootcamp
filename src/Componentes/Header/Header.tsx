import Logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom';

function Header() {
  return (
<header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <img className="h-8 w-8 text-purple-600" src={Logo}/>
            <span className="text-xl font-semibold text-purple-600">VTEX Academy</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors">
              Inicio
            </Link>
            <Link to="/cursos" className="text-gray-600 hover:text-purple-600 transition-colors">
              Cursos
            </Link>
            <Link to="/documentacion" className="text-gray-600 hover:text-purple-600 transition-colors">
              Documentación
            </Link>
            <Link to="/recursos" className="text-gray-600 hover:text-purple-600 transition-colors">
              Recursos
            </Link>
            <Link to="/comunidad" className="text-gray-600 hover:text-purple-600 transition-colors">
              Comunidad
            </Link>
          </div>

          {/* Sign In Button */}
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-medium 
            hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 
            focus:ring-purple-500 focus:ring-offset-2">
            Iniciar Sesión
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header