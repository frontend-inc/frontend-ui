'use client'

import React, { useState } from 'react'
import { RemixIcon, Sheet } from '../..'
import { Hidden } from '../../../components'
import { FilterOptionType, SearchFilterOptionType } from '../../..'
import { Typography } from '../../../components'
import { Button } from '../../../components'
import { Popover, PopoverContent, PopoverTrigger } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

type FilterGroupProps = {
	filters?: FilterOptionType[]
	filterOption: SearchFilterOptionType
	handleFilter: (name: string, value: string | number | boolean) => void
}

export const FilterGroup: React.FC<FilterGroupProps> = (props) => {
	const { filters, filterOption, handleFilter } = props || {}

	return (
		<div className="w-full flex flex-col space-y-3 p-4 rounded-lg">
			<Typography variant="body1" className="font-medium">
				{filterOption?.label}
			</Typography>
			<ul className="list-none w-full p-0 flex flex-col space-y-2">
				{filterOption?.options?.map((option, index) => {
					const selected = filters?.find(
						(f) => f?.name === filterOption?.name && f?.value === option?.value
					)
					return (
						<li key={index} className="list-none">
							<Button
								fullWidth
								variant="ghost"
								className="justify-between items-center"
								onClick={() => handleFilter(filterOption?.name, option?.value)}
								endIcon={
									selected && (
										<RemixIcon
											name="ri-check-fill"
											className="text-foreground ml-2"
										/>
									)
								}
							>
								{option?.label}
							</Button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export type FilterButtonProps = {
	filters?: FilterOptionType[]
	loading?: boolean
	filterOptions?: SearchFilterOptionType[]
	handleFilter: (name: string, value: string | number | boolean) => void
}

const FilterButton: React.FC<FilterButtonProps> = (props) => {
	const {
		loading = false,
		filters = [],
		filterOptions = [],
		handleFilter,
	} = props || {}

	const [open, setOpen] = useState(false)

	return (
		<div className="w-full sm:w-auto">
			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant="secondary"
						loading={loading}
						className={cn(
							'relative w-full sm:w-auto',
							filters?.length > 0 && 'border-r-0'
						)}
						startIcon={
							<RemixIcon
								name="ri-equilizer-2-fill"
								className="text-secondary-foreground"
							/>
						}
					>
						Filters
					</Button>
				</PopoverTrigger>
				<PopoverContent className="bg-background w-80 p-0">
					<ul className="w-full p-0">
						{filterOptions.map((filterOption, index) => (
							<FilterGroup
								key={index}
								filters={filters}
								filterOption={filterOption}
								handleFilter={handleFilter}
							/>
						))}
					</ul>
				</PopoverContent>
			</Popover>
			<Hidden smUp>
				<Sheet open={open} handleClose={() => setOpen(false)} title="Search">
					<ul className="w-full p-0">
						{filterOptions.map((filterOption, index) => (
							<FilterGroup
								key={index}
								filters={filters}
								filterOption={filterOption}
								handleFilter={handleFilter}
							/>
						))}
					</ul>
				</Sheet>
			</Hidden>
		</div>
	)
}

export default FilterButton
