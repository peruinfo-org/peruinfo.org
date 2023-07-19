import { CheckIcon } from "@/components/icons"

export default function ItemList ({ 
  name, 
  value, 
  type='inline', 
  icon 
}: { 
  name: string | React.ReactNode, 
  value: string | React.ReactNode, 
  type?: 'inline' | 'block',
  icon?: string | React.ReactNode
}) {

  if (type === 'block'){
    return <div className="flex flex-col items-center justify-center text-center">
        <span className="p-3 text-red-500 rounded-full bg-red-100/80 dark:bg-gray-800">
          {icon ? icon : <CheckIcon />}
        </span>
        <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-white">{name}</h2>
        <p className="mt-2 text-red-600 dark:text-red-400 ">{value}</p>
    </div>
  }
  return <div className="flex items-center gap-2  text-gray-800 -px-3 dark:text-gray-200">
    {icon ? icon : <CheckIcon />}
    <h2 className="text-base font-bold text-gray-800 dark:text-white">{name}:</h2>
    <span className="mx-3">{value}</span>
  </div>
}