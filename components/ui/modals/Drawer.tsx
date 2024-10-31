'use client'

import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerPortal,
  DrawerOverlay,
  ScrollArea,
} from 'frontend-shadcn'
import { useTheme } from '../../../hooks'
import { Button } from '../../../components'
import { X } from 'lucide-react'
import { cn } from 'frontend-shadcn'

type CustomDrawerProps = {
  open: boolean
  handleClose: (open: boolean) => void
  loading?: boolean
  title?: string
  description?: string
  buttons?: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
  disablePadding?: boolean
}

export default function CustomDrawer({
  open,
  handleClose,
  loading,
  title,
  description,
  children,
  buttons,
}: CustomDrawerProps) {
  const { mode } = useTheme()

  return (
    <Drawer 
      shouldScaleBackground
      open={open} 
      onOpenChange={handleClose}      
    >
      <DrawerPortal>
        <DrawerContent 
          shouldScaleBackground
          className={cn(
          mode, 
        )}>
          <DrawerHeader>
            <div className="flex w-full justify-end">
              <DrawerClose>
                <Button variant="ghost" size="icon" className='focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </DrawerClose>
            </div>

            {title && (
              <DrawerTitle>
                <span className="flex font-semibold justify-center w-full text-3xl text-foreground">
                  {title}
                </span>
              </DrawerTitle>
            )}
            {description && (
              <DrawerDescription>
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-row max-w-screen-md w-full">
                    <div className="text-lg text-primary">{description}</div>
                  </div>
                </div>
              </DrawerDescription>
            )}
          </DrawerHeader>          
          <ScrollArea>
            <div className="flex justify-center w-full py-6">
              <div className="max-w-screen-md w-full max-h-[78vh]">{children}</div>
            </div>
          </ScrollArea>          
          {!loading && buttons && (
            <DrawerFooter className='w-full flex items-center justify-center'>
              <div className='w-full max-w-screen-md'>
                {buttons}
              </div>
            </DrawerFooter>
          )}
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  )
}