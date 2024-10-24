'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import {
  Dialog,
  DialogClose,
  DialogOverlay,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from 'frontend-shadcn'
import { useTheme } from '../../../hooks'
import { ScrollArea } from 'frontend-shadcn'
import { Loader } from '../../../components'
import { X } from 'lucide-react'

type ModalProps = {
  open: boolean
  loading?: boolean
  handleClose: () => void
  icon?: string
  title?: string | React.ReactNode
  description?: string
  buttons?: React.ReactNode
  children?: React.ReactNode
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  secondaryActions?: React.ReactNode
}

export default function Modal({
  open,
  loading = false,
  handleClose,
  title,
  buttons,
  children,
  description,
}: ModalProps) {

  const { mode } = useTheme()

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogOverlay className="bg-black/50" />
      <DialogContent
        className={cn(
          mode,
          'bg-background rounded-md overflow-hidden',
          'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
          'w-full max-w-lg max-h-[85vh]'
        )}
      >
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-5 w-5 text-foreground" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogHeader className="relative">
          <DialogTitle className="text-foreground">{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <ScrollArea className="flex-grow">
          <div className="space-y-4 p-4">
            {loading ? (
              <Loader loading={loading} />
            ) : (
              <div className="w-full">{children}</div>
            )}
          </div>
        </ScrollArea>
        {!loading && buttons && <DialogFooter>{buttons}</DialogFooter>}
      </DialogContent>
    </Dialog>
  )
}