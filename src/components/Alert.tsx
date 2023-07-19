import { CheckIcon, ExclamationIcon, InformationCircleIcon, XIcon } from "./icons"

const icons = {
  success: <CheckIcon />,
  error: <XIcon />,
  warning: <ExclamationIcon />,
  info: <InformationCircleIcon />
}


export default function Alert({
  type,
  title,
  message,
}: {
  type: 'success' | 'error' | 'warning' | 'info',
  title?: string | React.ReactNode,
  message?: string | React.ReactNode
}) {
  
  const icon = icons[type]  
  const iconClass = type === 'success' ? 'bg-emerald-500 dark:bg-emerald-400' : type === 'error' ? 'bg-red-500 dark:bg-red-400' : type === 'warning' ? 'bg-yellow-500 dark:bg-yellow-400' : type === 'info' ? 'bg-blue-500 dark:bg-blue-400' : ''
  const titleClass = type == 'success' ? 'text-emerald-500 dark:text-emerald-400' : type === 'error' ? 'text-red-500 dark:text-red-400' : type === 'warning' ? 'text-yellow-500 dark:text-yellow-400' : type === 'info' ? 'text-blue-500 dark:text-blue-400' : ''

  return <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className={`text-white flex items-center justify-center w-12 ${iconClass}`}>
      {icon}
    </div>

    <div className="px-4 py-2 -mx-3">
        <div className="mx-3">
            <span className={`font-semibold ${titleClass}`}>{title}</span>
            <p className="text-sm text-gray-600 dark:text-gray-200">{message}</p>
        </div>
    </div>
  </div>
}