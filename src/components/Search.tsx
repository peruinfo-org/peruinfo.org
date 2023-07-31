'use client'

import slugify from "slugify"
import { useRouter } from 'next/navigation'

import { useState } from "react"

export default function Search ({
  url='/search'
}: {
  url?: string  
}) {

  const [query, setQuery] = useState('')
  const router = useRouter()

  return  <form className="relative w-full overflow-hidden">
    <input 
      type="text"
      className="w-full rounded-lg border border-[#d8dfff] bg-[#f5f8ff] py-[14px] pl-6 pr-[50px] text-base text-dark outline-none duration-300 placeholder:text-body-color focus:border-primary focus-visible:shadow-none dark:border-white/10 dark:bg-white/20 dark:text-[#A1A4BE] dark:focus:border-white/50"
      placeholder="Buscar..."
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
    <button 
      className="absolute right-0 top-0 flex h-full w-[75px] items-center justify-center text-dark dark:text-white"
      onClick={(e) => {
        e.preventDefault()
        router.push(`${url}/${slugify(query)}`)
      }}
    >
      Buscar
    </button>
  </form>
}