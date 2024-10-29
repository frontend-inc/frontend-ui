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
      shouldScaleBackground={true}
      open={open} 
      onOpenChange={handleClose}      
    >
      <DrawerPortal>
        <DrawerContent className={cn(
          mode, 
        )}>
          <DrawerHeader className="sticky top-0 z-10 bg-background">
            <div className="flex w-full justify-end">
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </DrawerClose>
            </div>

            {title && (
              <DrawerTitle>
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-row max-w-screen-md w-full">
                    <div className="text-3xl text-foreground">{title}</div>
                  </div>
                </div>
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
          <div className="flex-grow overflow-y-auto px-4 flex flex-col items-center">
            <div className="max-w-screen-md w-full">{children}</div>
          </div>
          {!loading && buttons && (
            <DrawerFooter className="px-10 pb-6 flex flex-row justify-center sticky bottom-0 bg-background">
              <div className="w-full max-w-screen-md">{buttons}</div>
            </DrawerFooter>
          )}
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  )
}