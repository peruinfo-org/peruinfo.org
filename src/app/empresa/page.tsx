import Search from "@/components/Search"
import { getPadron } from "@/utils/sunat"

export default async function Page() {
  
  // const empresas = await getPadron()

  return (
    <div className="max-w-3xl mx-auto py-8 flex flex-col gap-24">
      <div className="flex items-center gap-8">
        <div>
          <img src="/illustrations/search.svg" alt="Empresas" />
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold pb-2">Encuentra</h2>
          <p>
            Encuentra información de empresas registradas en la SUNAT. Puedes buscar por RUC, nombre o razón social.
          </p>
          <div>
            <Search url="/empresa" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div>
          <h2 className="text-2xl font-bold pb-2">API</h2>
          <p>
            Si quieres usar esta información en tus proyectos puedes usar la API pública que tenemos disponible.
          </p>
        </div>
        <div>
          <img src="/illustrations/api.svg" alt="Empresas" />
        </div>
      </div>
    </div>
  )
}