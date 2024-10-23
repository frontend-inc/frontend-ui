'use client'

import React from 'react'
import { Badge } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

type LabelProps = {
	label?: string
	variant?: 'default' | 'secondary' | 'destructive' | 'outline'
	className?: string
}

const Label: React.FC<LabelProps> = (props) => {
	const { label, variant, className } = props

	if (!label) return null
	return (
		<Badge variant={variant} className={cn('px-4', className)}>
			{label}
		</Badge>
	)
}

export default Label
