
import Link from "next/link"
import Search from "./Search"
import SelectTheme from "./SelectTheme"

export default function Header () {
  
  return (
    <header className="sticky top-0 bg-red-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto flex items-center py-4 gap-4">
        <div>
          <Link href="/">
            <span className="text-5xl uppercase font-bold text-red-600">P</span>
            <span className="text-5xl uppercase font-bold text-white">er</span>
            <span className="text-5xl uppercase font-bold text-red-600">ú</span>
            <span className="text-2xl uppercase font-medium text-slate-300">Info.org</span>
          </Link>
        </div>
        <div className="flex-grow"></div>
        <div className="flex gap-4 items-center">
          <Search 
            url="/empresa" 
          />
          {//<SelectTheme />
          }
        </div>
      </div>
    </header>  
  )
}