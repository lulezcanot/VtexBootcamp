import vtexBootcampInicio from '../../assets/vtex-bootcamp-inicio.png'

const Banner = () => {
    
  return (
    <div className='flex flex-col lg:flex-row justify-around items-center max-h-[645px] w-full bg-gradient-to-br from-purple-300 to-purple-700 p-6 lg:p-12 mt-14'>
      <div className='flex flex-col justify-start items-start max-w-xl mb-10 lg:mb-0'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2'>
          Domina VTEX IO
        </h1>
        <h2 className='text-xl md:text-2xl font-medium text-purple-100 mb-6'>
          Aprende a crear experiencias de ecommerce
        </h2>
        <p className='text-white text-lg mb-8 leading-relaxed'>¡La educación no tiene ningún valor si no la pones en práctica!</p>
        <button className='w-[200px] px-8 py-3 bg-white text-purple-600 text-xl font-medium rounded-full 
      transition-all duration-300 hover:bg-purple-100 hover:shadow-lg 
      focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50'>Empezar</button>
      </div>
      <div className='relative rounded-lg overflow-hidden w-full max-w-sm bg-[#ffffff67]'>
        <img src={vtexBootcampInicio} alt="" className='w-full h-auto object-cover'/>
      </div>
    </div>
  )
}

export default Banner