import { cache } from "react"


export const getPadron = cache(async function getPadron() {
    const url = `https://peruinfo-1-p2279931.deta.app/sunat/padron?limit=1&offset=0`
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error(res.statusText)
    }
    return res.json()
})