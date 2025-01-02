export default function HeroBtns() {
  const buttonStyle = "w-1/2 h-10 m-1 text-xl lg:text-2xl flex items-center rounded justify-center duration-200 hover:opacity-70"

  return (
    <div className="flex mt-3">
      <button className={`${buttonStyle} bg-white`} onClick={() => {console.log(window.innerWidth)}}>
        <i className="fa-solid fa-play m-2"></i>
        Reproducir
      </button>

      <button className={`${buttonStyle} text-white bg-zinc-700`}>
        <i className="fa-solid fa-circle-info m-2"></i>
        Mi lista
      </button>
    </div>
  )
}