'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { Typography, Button } from '../../../components'
import { Check } from 'lucide-react'
import { SortOptionType } from '../../../types'

// Assuming SORT_DIRECTIONS is imported from a constants file
const SORT_DIRECTIONS = [
	{ value: 'asc', label: 'Ascending' },
	{ value: 'desc', label: 'Descending' },
]

type SortListProps = {
	sortOptions: SortOptionType[]
	sortBy: string
	sortDirection: 'asc' | 'desc'
	handleSortBy: (field: SortOptionType) => void
	handleSortDirection: (sortDirection: 'asc' | 'desc') => void
}

export default function SortList(props: SortListProps) {
	const {
		sortOptions,
		sortBy,
		sortDirection,
		handleSortBy,
		handleSortDirection,
	} = props

	return (
		<div className="flex flex-col space-y-3 w-full p-4">
			<Typography variant="body1" className="text-primary font-medium">
				Sort by
			</Typography>
			<ul className="space-y-1">
				{sortOptions?.map((sortOption) => (
					<Button
						key={sortOption.name}
						variant="ghost"
						className={cn(
							'w-full justify-between',
							sortBy === sortOption.name && 'bg-muted'
						)}
						onClick={() => handleSortBy(sortOption)}
						endIcon={
							sortBy === sortOption.name && <Check className="w-4 h-4" />
						}
					>
						{sortOption.label}
					</Button>
				))}
			</ul>
			<Typography variant="body1" className="text-primary font-medium">
				Direction
			</Typography>
			<ul className="space-y-1">
				{SORT_DIRECTIONS.map((direction) => (
					<Button
						key={direction.value}
						variant="ghost"
						fullWidth
						onClick={() =>
							handleSortDirection(direction.value as 'asc' | 'desc')
						}
						className={cn(
							'justify-between',
							sortDirection === direction.value && 'bg-muted'
						)}
						endIcon={
							sortDirection === direction.value && (
								<Check className="w-4 h-4 ml-2" />
							)
						}
					>
						{direction.label}
					</Button>
				))}
			</ul>
		</div>
	)
}
