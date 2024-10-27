'use client'

import React, { useState, forwardRef } from 'react'
import {
	Button as ShadcnButton,
	ButtonProps as ShadcnButtonProps,
} from 'frontend-shadcn'
import { AlertModal } from '..'
import { cn } from 'frontend-shadcn'
import { Loader2 } from 'lucide-react'

type ButtonSize = 'sm' | 'default' | 'lg' | 'icon'
type ButtonVariant =
	| 'default'
	| 'destructive'
	| 'outline'
	| 'secondary'
	| 'ghost'
	| 'link'

interface AlertButtonProps extends ShadcnButtonProps {
	size?: ButtonSize
	fullWidth?: boolean
	variant?: ButtonVariant
	startIcon?: React.ReactNode
	endIcon?: React.ReactNode
	className?: string
	children?: React.ReactNode
	disabled?: boolean
	loading?: boolean
  onClick?: () => void
  displayAlertWarning?: boolean
}

const AlertButton = forwardRef<HTMLButtonElement, AlertButtonProps>(
	(
		{
      onClick,
			size = 'default',
			variant = 'default',
			fullWidth,
			className,
			children,
			startIcon,
			endIcon,
			loading = false,
			disabled,
			...props
		},
		ref
	) => {

    const [open, setOpen] = useState(false)

    const handleConfirm = () => {
      setOpen(false)
      onClick()
    }

		return (
      <>
        <ShadcnButton
          ref={ref}
          size={size}
          variant={variant}
          className={cn(fullWidth && 'w-full', className)}
          disabled={disabled || loading}
          onClick={() => setOpen(true)}
          {...props}
        >
          {loading ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            startIcon && <span className="mr-2">{startIcon}</span>
          )}
          {children}
          {!loading && endIcon && <span className="w-full flex flex-row justify-end ml-2">{endIcon}</span>}
        </ShadcnButton>
        <AlertModal 
          open={ open }
          handleClose={ () => setOpen(false) }
          handleConfirm={ handleConfirm }
        />
      </>
		)
	}
)

AlertButton.displayName = 'AlertButton'

export { AlertButton }
export type { AlertButtonProps }
