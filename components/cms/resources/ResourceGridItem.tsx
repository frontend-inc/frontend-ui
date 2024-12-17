'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { Card, CardHeader, CardContent, CardFooter } from 'frontend-shadcn'
import { Checkbox } from 'frontend-shadcn'
import { Button } from '../../../components'
import { Typography } from '../../../components'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from 'frontend-shadcn'
import { MoreVertical } from 'lucide-react'
import Image from 'next/image'

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
	menuActions?: React.ReactNode
	sortable?: boolean
	isDragging?: boolean
	enableBorder?: boolean
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
    menuActions,
    enableBorder = false,
    slots = {},
  } = props || {}  

	return (
		<Card
			className={cn(
				'overflow-hidden bg-background',
				'border border-transparent',
				enableBorder &&
					'border-border hover:shadow-md transition-shadow duration-200',
				selected && 'border-primary'
			)}
		>
			<CardHeader className="w-full p-2 flex flex-row space-x-2 justify-between items-center">
        <div className="flex flex-row space-x-2 items-center">
          {selectable && (
            <Checkbox
              className="text-foreground"
              checked={selected}
              onCheckedChange={handleSelect}
            />
          )}
          {secondaryAction}
        </div>
        {(menuActions || handleEdit || handleDelete) && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {menuActions}
              {handleEdit && (
                <DropdownMenuItem onClick={() => handleEdit({})}>
                  Edit
                </DropdownMenuItem>
              )}
              {handleDelete && (
                <DropdownMenuItem onClick={() => handleDelete({})}>
                  Delete
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
			</CardHeader>
			<div
				className="overflow-hidden h-40 flex items-center justify-center cursor-pointer"
				onClick={handleClick}
			>
        { avatar && avatar }
				{ image && (
					<Image
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
				<CardContent className="p-4">
					<Typography variant="body1">{primary}</Typography>
					{secondary && <Typography variant="body2">{secondary}</Typography>}
				</CardContent>
			)}
		</Card>
	)
}
