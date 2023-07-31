

export default function Collapse ({
  title,
  children,
}: {
  title: string | React.ReactNode,
  children: string | React.ReactNode,
  defaultOpen?: boolean
}) {
  return <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
  <button className="flex items-center justify-between w-full">
    <h2 className="font-semibold text-gray-700 dark:text-white">{title}</h2>
  </button>

  <p className="mt-6 text-sm text-gray-500 dark:text-gray-300 flex flex-col gap-2">
    {children}
  </p>
</div>
}