'use client'

import React from 'react'
import { Typography } from '../../components'
import { cn } from '@nextui-org/react'

type LabelProps = {
	children?: string
	textAlign?: 'left' | 'center' | 'right'
  color?: 'textPrimary' | 'textSecondary' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
	className?: string
}

const Label: React.FC<LabelProps> = (props) => {
	const { children, color='textPrimary', textAlign, className } = props

	const textAlignClasses = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right',
	}

	if (!children) return null
	return (
		<Typography
			variant="caption"
      color={color}
			className={cn(
				'text-xs tracking-wider',
				textAlign && textAlignClasses[textAlign],
				className
			)}
		>
			{children}
		</Typography>
	)
}

export default Label
