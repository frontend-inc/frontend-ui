import React from 'react'
import { cn } from '../../../shadcn/lib/utils'

type DataLayoutProps = {
  loading?: boolean
  grid?: boolean
  children: React.ReactNode
}

const DataLayout: React.FC<DataLayoutProps> = (props) => {
  const { loading, grid = false, children } = props

  return (
    <div
      className={cn(
        "w-full",
        grid 
          ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-1" 
          : "flex flex-col gap-4",
        loading && "opacity-50"
      )}
    >
      {children}
    </div>
  )
}

export default DataLayout