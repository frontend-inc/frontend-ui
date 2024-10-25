'use client'

import React from 'react'
import { Typography } from '../core'
import { Icon } from '../../components'
import { cn } from 'frontend-shadcn'

type PlaceholderProps = {
	icon?: string
	title?: string
	description?: string
	buttons?: any
	color?: string
}

const Placeholder: React.FC<PlaceholderProps> = (props) => {
	const { icon, title, description, buttons, color = 'text.secondary' } = props

	return (
		<div className="w-full p-4 flex flex-col space-y-2 justify-center items-center">
			{icon && <Icon name={icon} className={cn(color, 'w-5 h-5')} />}
			<Typography variant="subtitle2">{title}</Typography>
			<Typography variant="body2" className="text-muted-foreground">
				{description}
			</Typography>
			{buttons && (
				<div className="flex flex-row space-x-2 justify-center items-center">
					{buttons}
				</div>
			)}
		</div>
	)
}
export default Placeholder
