'use client'

import React from 'react'
import { Badge } from '@nextui-org/react'
import { cn } from 'frontend-shadcn'

type LabelProps = {
	children?: string
	textAlign?: 'left' | 'center' | 'right'
	className?: string
}

const Label: React.FC<LabelProps> = (props) => {
	const { children, textAlign, className } = props

	const textAlignClasses = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right',
	}

	if (!children) return null
	return (
		<Badge
      variant='outline'
			className={cn(
				'px-3 py-1 text-xs tracking-wider text-foreground',
				textAlign && textAlignClasses[textAlign],
				className
			)}
		>
			{children}
		</Badge>
	)
}

export default Label
