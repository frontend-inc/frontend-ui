'use client'

import React from 'react'
import { Icon } from '../..'
import { Typography } from '../../core'
import { Avatar, AvatarFallback } from 'frontend-shadcn'

type FeatureProps = {
	icon?: string
	title?: string
	description?: string
	enableBorder?: boolean
}

const Feature: React.FC<FeatureProps> = (props) => {
	const { icon, title, description } = props || {}
	return (
		<div className="flex flex-col space-y-3 justify-center items-center">
			{icon && (
				<Avatar className="h-[48px] w-[48px]">
					<AvatarFallback className="bg-primary">
						<Icon name={icon} color="text-primary-foreground" />
					</AvatarFallback>
				</Avatar>
			)}
			<div className="flex flex-col justify-center space-y-2">
				<Typography variant="h6" className="text-center">{title}</Typography>
				<Typography className="text-muted-foreground text-center" variant="body1">
					{description}
				</Typography>
			</div>
		</div>
	)
}

export default Feature
