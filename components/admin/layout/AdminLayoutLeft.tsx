import React, { useContext } from 'react'
import { useAdmin } from '../../../hooks'
import { ExpandLeftButton, AdminHeader } from '../../../components'
import { Drawer } from '../../../tailwind'
import { cn } from "../../../shadcn/lib/utils"

type AdminLayoutLeftProps = {
  title?: string
  children: React.ReactNode
  disableBorder?: boolean
}

export default function AdminLayoutLeft({ title, children }: AdminLayoutLeftProps) {
  const { openLayoutLeft } = useAdmin()

  return (
    <>
        {openLayoutLeft && (
          <div className={cn(
            "bg-background p-0 overflow-y-scroll overflow-x-hidden scrollbar-hide",
            "h-screen sm:min-w-[320px] ml-auto",
            "border-r border-border"
          )}>
            <AdminHeader title={title} buttons={<ExpandLeftButton />} />
            <div className="h-[calc(100vh-50px)] w-full">
              {children}
            </div>
          </div>
        )}      
    </>
  )
}