'use client'

import React from 'react'
import { Typography } from '../../components'
import { cn } from '@nextui-org/react'

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
		<Typography
			variant="caption"
			className={cn(
				'px-3 py-1 text-xs tracking-wider text-foreground',
				textAlign && textAlignClasses[textAlign],
				className
			)}
		>
			{children}
		</Typography>
	)
}

export default Label
