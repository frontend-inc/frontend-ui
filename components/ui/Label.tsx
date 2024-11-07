'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'

type LabelProps = {
	label?: string	
	className?: string
}

const Label: React.FC<LabelProps> = (props) => {
	const { label, className } = props

	if (!label) return null
	return (
		<div className={cn(
      'text-xs font-medium uppercase tracking-widest',
      className
    )}>
			{label}
		</div>
	)
}

export default Label

