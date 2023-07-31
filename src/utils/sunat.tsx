import { cache } from "react"
import 'server-only'



export const revalidate = 3600 

const API = process.env.NEXT_PUBLIC_API

export const getPadron = cache(async ({
  limit=100,
  offset=0,
  q,
}:{
  limit?: number,
  offset?: number,
  q?: string
}) => {
    let url = `${API}/sunat/padron?limit=${limit}&offset=${offset}`
    if (q) {
      url += `&q=${q}`
    }
    console.log(url)
    const res = await fetch(url, { cache: 'force-cache' })
    if (!res.ok) {
      console.log(res.statusText)
      throw new Error(res.statusText)
    }
    return res.json()
})


export const getEmpresa = cache(async (ruc: string) =>{
  const url = `${API}/sunat/padron/${ruc}`
  console.log(url)
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return res.json()
})