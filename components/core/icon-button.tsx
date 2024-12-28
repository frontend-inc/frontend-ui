'use client'

import React, { forwardRef } from 'react'
import { cn } from 'frontend-shadcn'
import { Button, ButtonProps } from '@nextui-org/react'

const IconButton = forwardRef<HTMLButtonElement, ButtonProps>(({ 
  className, 
  variant='light',
  children, 
  ...props 
}, ref) => {

		return (
			<Button
				ref={ref}
				isIconOnly			
        variant={variant}	
				className={cn(
          'min-w-8 w-8 h-8',
					className
				)}
				{...props}
			>
				{children}
			</Button>
		)
	}
)

IconButton.displayName = 'IconButton'

export { IconButton }
