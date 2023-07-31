import Alert from "@/components/Alert";
import Collapse from "@/components/Collapse";
import ItemList from "@/components/ItemList";
import { LocationIcon, PhoneIcon, WebsiteIcon } from "@/components/icons";
import { getEmpresa } from "@/utils/sunat";

export default async function Detail({
  ruc
}: {
  ruc: string
}) {
  
  const empresa = await getEmpresa(ruc)
  
  return <main className="container max-w-5xl mx-auto py-8 flex flex-col gap-4">
    <h1 className="font-semibold text-3xl mb-6">{empresa?.razonSocial} - {empresa?.ruc}</h1>
    <div className="max-w-3xl flex flex-col gap-2 mt-8">
      <ItemList name="RUC" value={empresa?.ruc} />
      <ItemList name="Razon Social" value={empresa?.razonSocial} />
      <ItemList name="Tipo de Contribuyente" value={"S A"} />
    </div>
    <div className="max-w-3xl grid gap-6 mt-8 sm:grid-cols-2">
      <Alert
        type="error"
        title="Inactivo"
        message="Estado del Contribuyente:"
      />
      <Alert
        type="warning"
        title="No habido"
        message="Condición del Contribuyente:"
      />
    </div>
    <div className="max-w-3xl grid gap-6 mt-8 sm:grid-cols-3">
      <ItemList
        name="Teléfono"
        value={<a href="tel:123456789">123456789</a> }
        type="block"
        icon={<PhoneIcon />}
      />
      <ItemList
        name="Dirección"
        value={'av costanera 2210'}
        type="block"
        icon={<LocationIcon />}
      />
      <ItemList
        name="Dirección"
        value={'av costanera 2210'}
        type="block"
        icon={<WebsiteIcon />}
      />
    </div>
    <Collapse title="Información de ubicación">
      <div className="max-w-3xl grid gap-6 mt-8 sm:grid-cols-2">
        <ItemList name="Departamento" value={"Lima"} />
        <ItemList name="Provincia" value={"Lima"} />
        <ItemList name="Distrito" value={"San Isidro"} />
        <ItemList name="Dirección" value={"Av. Costanera 2210"} />
      </div>
    </Collapse>
  </main>
}