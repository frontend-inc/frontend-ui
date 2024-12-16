'use client'

import React from 'react'
import { Badge } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

type LabelProps = {
	label?: string
	textAlign?: 'left' | 'center' | 'right'
	className?: string
}

const Label: React.FC<LabelProps> = (props) => {
	const { label, textAlign, className } = props

	const textAlignClasses = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right',
	}

	if (!label) return null
	return (
		<Badge
      variant='outline'
			className={cn(
				'px-3 py-1 text-xs font-semibold uppercase tracking-wider',
				textAlign && textAlignClasses[textAlign],
				className
			)}
		>
			{label}
		</Badge>
	)
}

export default Label
