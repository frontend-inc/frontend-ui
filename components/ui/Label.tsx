'use client'

import React from 'react'
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
    right: 'text-right'
  }

	if (!label) return null
	return (
		<div
			className={cn(
				'text-xs text-foreground font-semibold uppercase tracking-wider',
        textAlign && textAlignClasses[textAlign],
				className
			)}
		>
			{label}
		</div>
	)
}

export default Label
