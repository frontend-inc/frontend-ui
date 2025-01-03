'use client'

import React from 'react'
import { cn } from '@nextui-org/react'
import {
	Checkbox,
	Card,
	CardHeader,
	CardFooter,
	Image,
} from '@nextui-org/react'
import { MenuButton, Typography } from '../../../components'

export type ResourceGridItemProps = {
	selectable?: boolean
	selected?: boolean
	primary?: React.ReactNode
	secondary?: React.ReactNode
	avatar?: React.ReactNode
	icon?: string
	color?: string
	label?: string
	image?: string
	handleClick?: (resource: any) => void
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	handleSelect?: () => void
	secondaryAction?: React.ReactNode
	sortable?: boolean
	isDragging?: boolean
	slots?: {
		image?: any
	}
}

export default function ResourceGridItem(props: ResourceGridItemProps) {
	const {
		selectable,
		selected,
		primary,
		secondary,
		avatar,
		label,
		image,
		handleClick,
		handleEdit,
		handleDelete,
		handleSelect,
		secondaryAction,
		slots = {},
	} = props || {}

	return (
		<Card
			isPressable
			onPress={handleClick}
			className={cn(
				'border-2 border-transparent hover:border-primary',
				selected && 'border-primary'
			)}
		>
			<CardHeader className="w-full p-2 flex flex-row space-x-2 justify-between items-center">
				<div className="flex flex-row space-x-2 items-center">
					{selectable && (
						<Checkbox isSelected={selected} onValueChange={handleSelect} />
					)}
					{secondaryAction}
				</div>
				{(handleEdit || handleDelete) && (
					<MenuButton handleEdit={handleEdit} handleDelete={handleDelete} />
				)}
			</CardHeader>
			<div className="w-full h-full">
				{avatar && avatar}
				{image && (
					<Image
						isZoomed
						radius="none"
						src={image}
						alt={label || 'Resource image'}
						width={320}
						height={160}
						className="object-cover w-full h-full"
						{...slots.image}
					/>
				)}
			</div>
			{(primary || secondary) && (
				<CardFooter className="flex flex-col p-4">
					<Typography variant="body1">{primary}</Typography>
					{secondary && <Typography variant="body2">{secondary}</Typography>}
				</CardFooter>
			)}
		</Card>
	)
}
