

export default function Footer() {
  return (
    <div className="
    flex flex-col gap-8 w-full item justify-between px-24 pt-24 pb-2 
    bg-gradient-to-b dark:from-black dark:to-red-950 
    from-red-950 to-gray-900
    text-white dark:text-white
    ">
      <div className="flex gap-8 justify-between">
        <div className="flex flex-col gap-4">
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Contacto</h2>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Redes sociales</h2>
        </div> 
      </div>
      <div className="flex flex-col items-center gap-4">
        <div>
          <h2 className="text-lg font-bold pb-2">Sobre el proyecto</h2>
          <p className="text-xs">
            Este proyecto es una iniciativa personal que tiene como objetivo facilitar el acceso a información pública.
          </p>
        </div>
      </div>
    </div>
  )
}