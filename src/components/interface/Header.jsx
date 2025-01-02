import netflixLogo from '../../assets/netflixLogo.png'

export default function Header () {

  const iconStyle = "flex justify-center items-center text-white m-1 w-10 h-10 duration-100 hover:bg-gray-500"

  return (
    <header className='flex justify-between bg-black'>
      <div className="flex justify-center items-center">
        <i className={`fa-solid fa-bars fa-xl ${iconStyle}`}/>
        <img className="w-28" src={netflixLogo}/>
      </div>
      
      <div className="flex justify-center items-center">
        <i className={`fa-solid fa-magnifying-glass fa-xl ${iconStyle}`}/> 
        <i className={`fa-solid fa-ellipsis fa-xl ${iconStyle}`}/>
      </div>
  </header>
  )
}