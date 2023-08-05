import { LocationIcon } from "@/components/icons"
import { getPadron } from "@/utils/sunat"
import Link from 'next/link'


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
    <div className="flex flex-col gap-4">
      {padron.items.map((empresa: any) => 
        <div className="flex flex-col" key={empresa.ruc}>
          <Link href={`/empresa/${empresa.ruc}`}>
            <h3 className="text-lg font-semibold">{empresa.razonSocial} - {empresa.ruc}</h3>
          </Link>
          <p className="text-sm"><LocationIcon className="inline-block" /> {empresa.domicilioFiscal}</p>
          <div className="flex gap-1 pl-4">
            <span className="text-xs text-slate-400 font-semibol">{empresa.departamento}</span>
            <span className="text-xs text-slate-400 font-semibol">-</span>
            <span className="text-xs text-slate-400 font-semibol">{empresa.provincia}</span>
            <span className="text-xs text-slate-400 font-semibol">-</span>
            <span className="text-xs text-slate-400 font-semibol">{empresa.distrito}</span>
          </div>
        </div>
      )}
    </div>
  </main>
}