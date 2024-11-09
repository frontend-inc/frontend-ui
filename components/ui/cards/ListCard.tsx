'use client'

import React from 'react'
import { Checkbox } from 'frontend-shadcn'
import { Icon, Image, AvatarImage } from '../..'
import { CardProps } from './Card'
import { Typography } from '../../core'

export type ListCardProps = CardProps & {
	circular?: boolean
	disableImage?: boolean
}

const ListCard: React.FC<ListCardProps> = (props) => {
	const {
		circular = false,
		sortable = false,
		selectable = false,
		selected = false,
		label,
		primary,
		secondary,
		actions,
		secondaryAction,
		handleClick,
		handleSelect,
		image,
		size = 140,
		disableImage,
		slots = {
			item: {},
			image: {},
		},
	} = props || {}

	return (
		<button 
      onClick={ handleClick }
      className="p-4 w-full border-b border-border last:border-b-0 hover:bg-muted/50">
			<div className="flex flex-row items-center w-full">
				{selectable && (
					<div className="mr-2">
						<Checkbox checked={selected} onCheckedChange={handleSelect} />
					</div>
				)}
				{sortable && (
					<Icon name="GripVertical" className="text-muted-foreground" />
				)}
				<div className="flex flex-row justify-start items-start space-x-4 flex-grow">
					{!disableImage && (
						<div className="flex-shrink-0 w-[180px]">
							<div className="w-full pr-2 h-full flex flex-row justify-center items-center">
								{circular ? (
									<AvatarImage
										label={label}
										src={image}
										size={size}
										alt={primary}
										{...slots.image}
									/>
								) : (
									<Image
										label={label}
										src={image}
										height={size}
										alt={primary}
										aspectRatio={1.0}
										{...slots.image}
									/>
								)}
							</div>
						</div>
					)}
					<div className="flex flex-col justify-between min-h-[120px] flex-grow">
						<div className="flex flex-col space-y-1">							
							<Typography variant="subtitle1">{primary}</Typography>							
							<Typography variant="body2" className="text-muted-foreground">
								{secondary}
							</Typography>
						</div>
						<div className="flex flex-row justify-between items-center w-full">
							{actions}
							{secondaryAction}
						</div>
					</div>
				</div>
			</div>
		</button>
	)
}

export default ListCard
