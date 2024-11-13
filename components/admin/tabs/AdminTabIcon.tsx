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
        'group hover:bg-accent',
        selected && 'bg-accent'
      )}
			onClick={handleClick}
		>
			<Icon
				name={icon}
				className={
          cn('w-4 h-4 text-muted-foreground group-hover:text-accent-foreground/80', 
          selected && 'text-accent-foreground'
        )}
			/>
		</IconButton>
	)
}
