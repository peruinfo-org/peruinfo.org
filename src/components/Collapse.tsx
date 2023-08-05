

export default function Collapse ({
  title,
  children,
}: {
  title: string | React.ReactNode,
  children: string | React.ReactNode,
  defaultOpen?: boolean
}) {
  return <div className=" bg-gray-100 rounded-lg dark:bg-gray-800">
  <div className="pt-4 px-8 flex items-center justify-between w-full">
    <h2 className="font-semibold text-gray-700 dark:text-white">{title}</h2>
  </div>

  <div className="p-8 text-sm text-gray-500 dark:text-gray-300 flex flex-col gap-2">
    {children}
  </div>
</div>
}