'use client'

import { useState, useEffect } from "react"


const items = [
  {
    name: 'system',
    icon: '🌓',
    label: 'Valor del sistema',
  },
  { 
    name: 'light',
    icon: '🌞',
    label: 'Claro',
  },
  { 
    name: 'dark',
    icon: '🌚',
    label: 'Oscuro',
  },
]

  export default function SelectTheme() {

  const [mode, setMode] = useState('system')
  const [open, setOpen] = useState(false)
  

  useEffect(() => {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setMode(userPrefersDark ? 'dark' : 'light');
  }, [])

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [mode])


  return (
    <div className="relative inline-block text-left">
      <button onClick={() => setOpen(!open)} className="bg-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 focus:outline-none">
        {items.find(item => item.name === mode)?.icon}
        Tema
      </button>
      {open &&
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-opacity-5 focus:outline-none
        bg-white ring-1 ring-black dark:ring-white dark:bg-gray-800 dark:ring-opacity-5"
        role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
          <div className="py-1" role="none">
            {items.map((item) => (
              <a
                key={item.name} 
                href="#" 
                onClick={() => {
                  setMode(item.name)
                  setOpen(false)
                }}
                className="text-gray-700 block px-4 py-2 text-sm dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200"
                role="menuitem" >{item.icon}  {item.label}</a>
            ))}
          </div>
        </div>
      }
    </div>
  )
}