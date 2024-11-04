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
      'text-xs font-medium text-uppercase tracking-wide',
      className
    )}>
			{label}
		</div>
	)
}

export default Label

