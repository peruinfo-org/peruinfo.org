import { getEmpresa } from '@/utils/sunat'
import Detail from './Detail'
import SearchList from './SearchList'


export async function generateMetadata({
  params
}:{
  params: {
    slug: string
  }
}) {

  const ruc = params.slug.split('-').pop()

  // validate if ruc is number and length is 11
  if (isNaN(Number(ruc)) || ruc?.length !== 11) {
    const text = params.slug.split('-').join(' ')
    return {
      title: text,
      description: `Busca empresas con ruc ${text}`,
    }
  }

  const empresa = await getEmpresa(ruc as string)
  return {
    title: `${empresa?.razonSocial} con ruc ${empresa?.ruc}`,
    description: `Información de la empresa ${empresa?.razonSocial} con ruc ${empresa?.ruc}`,
  }
}


export default function Page({ params }: { params: { slug: string } }) {
  const ruc = params.slug.split('-').pop()

  // validate if ruc is number and length is 11
  if (isNaN(Number(ruc)) || ruc?.length !== 11) {
    return <SearchList slug={params.slug} />
  }

  return <Detail ruc={ruc} />

}

