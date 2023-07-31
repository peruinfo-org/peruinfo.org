import { getPadron } from "@/utils/sunat"


export default async function SearchList({
  slug
}:{
  slug: string
}) {
  
  const padron = await getPadron({
    limit: 100,
    offset: 0,
    q: slug
  })

  return <main className="max-w-4xl mx-auto">
    {padron.items.map((empresa: any) => 
      <div className="flex flex-col gap-2" key={empresa.ruc}>
        <h3 className="text-2xl">{empresa.razonSocial} - {empresa.ruc}</h3>
      </div>
    )}
  </main>
}