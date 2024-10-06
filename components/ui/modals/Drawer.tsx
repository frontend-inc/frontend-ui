import React from 'react'
import { cn } from "../../../shadcn/lib/utils"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../../../shadcn/ui/sheet"
import { Button } from "../../../shadcn/ui/button"
import { Icon } from '../../../components'

type DrawerProps = {
  open: boolean
  loading?: boolean
  title?: string
  anchor?: 'left' | 'right' | 'top' | 'bottom'
  handleClose: () => void
  buttons?: React.ReactNode
  children: React.ReactNode
  disablePadding?: boolean
  mode?: 'dark' | 'light'
  className?: string
  fullWidth?: boolean
}

const Drawer: React.FC<DrawerProps> = ({
  open,
  title,
  anchor = 'right',
  handleClose,
  children,
  buttons,
  disablePadding = false,
  fullWidth = false,
  mode = 'dark',
  className,
}) => {
  const side = anchor === 'left' || anchor === 'right' ? anchor : 'right'

  return (
    <Sheet open={open} onOpenChange={handleClose}>
      <SheetContent 
        side={side} 
        className={cn(
          mode,
          disablePadding && 'p-0',
          "flex flex-col",
          fullWidth ? "w-screen max-w-full" : "w-full max-w-sm sm:max-w-md",
          className
        )}
      >
        <SheetHeader className="h-[50px]">
          <SheetTitle className="text-sm font-normal text-muted-foreground">
            {title}
          </SheetTitle>
        </SheetHeader>
        <div className={cn(
          "flex-grow overflow-y-auto",
          buttons ? "pb-[60px]" : "pb-4"
        )}>
          {children}
        </div>
        {buttons && (
          <div className="absolute bottom-0 left-0 w-full h-[60px] border-t bg-background flex items-center p-2">
            {buttons}
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default Drawer