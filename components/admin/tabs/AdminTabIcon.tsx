'use client'

import React from 'react'
import { RemixIcon, IconButton } from '../../../components'
import { cn } from 'frontend-shadcn'

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
      <div className="w-[36px] h-[36px] flex items-center justify-center">
        <RemixIcon 
          name={ icon } 
          size="lg"
          className={cn(selected && 'text-accent')} 
        />
      </div>
		</IconButton>
	)
}
