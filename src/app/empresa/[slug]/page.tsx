import ItemList from "@/components/ItemList";
import Alert from "@/components/Alert";
import { LocationIcon, PhoneIcon, WebsiteIcon } from "@/components/icons";
import Details from "@/components/Details";

export default function Page({ params }: { params: { slug: string } }) {
  const ruc = params.slug.split("-").slice(-1);
  return (
    <main className="container max-w-5xl mx-auto py-4">
      <h1 className="font-semibold text-3xl mb-6">Razon Social - 152421</h1>
      <div className="max-w-3xl grid gap-6 mt-8 sm:grid-cols-2">
        <ItemList name="RUC" value={"1245514"} />
        <ItemList name="Razon Social" value={"Razon Social"} />
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
      <div className="max-w-3xl grid gap-6 mt-8">
        <Details title="Informacion de Fiscal">
          <ItemList name="Departamento" value={"Departamento"} />
          <ItemList name="Provincia" value={"Provincia"} />
          <ItemList name="Distrito" value={"Distrito"} />
        </Details>
      </div>
    </main>
  );
}
