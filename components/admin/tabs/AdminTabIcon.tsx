'use client'

import React from 'react'
import { IconButton } from '../../core'
import { cn } from 'frontend-shadcn'
import { Icon } from '../../../components'

type LayoutTabIconProps = {
	icon: string
	selected?: boolean
	handleClick?: () => void
}

export default function LayoutTabIcon(props: LayoutTabIconProps) {
	
  const {
    icon,
    selected = false,
    handleClick,
  } = props

  return (
		<IconButton
			className={cn(
        'group hover:bg-accent/20',
        selected && 'bg-accent/20'
      )}
			onClick={handleClick}
		>
			<Icon
				name={icon}
				className={
          cn('w-4 h-4 text-muted-foreground group-hover:text-accent', 
          selected && 'text-accent'
        )}
			/>
		</IconButton>
	)
}
