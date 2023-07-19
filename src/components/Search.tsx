'use client'

import { useState } from "react"

export default function Search () {

  const [query, setQuery] = useState('')

  return  <form>
    <input 
      type="text"
      className="border border-gray-600 bg-gray-500 rounded-md p-2"
      placeholder="Buscar..."
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
  </form>
}