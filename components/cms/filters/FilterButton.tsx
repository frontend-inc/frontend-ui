'use client'

import React, { useState } from 'react'
import { Icon, Sheet, IconLoading } from '../..'
import FilterList from './FilterList'
import { Hidden } from '../../core'
import { FilterOptionType, SearchFilterOptionType } from '../../..'
import { Button } from '../../../components'
import { Badge } from 'frontend-shadcn'
import { Popover, PopoverContent, PopoverTrigger } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

export type FilterButtonProps = {
	filters?: FilterOptionType[]
	loading?: boolean
	filterOptions?: SearchFilterOptionType[]
	disableFilterCount?: boolean
	handleFilter: (filter: FilterOptionType) => void
	handleClear: () => void
}

const FilterButton: React.FC<FilterButtonProps> = (props) => {
	const {
		loading = false,
		filters = [],
		filterOptions = [],
		handleFilter,
		disableFilterCount = false,
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
              <Icon
								name="SlidersHorizontal"
								className="text-secondary-foreground"
							/>
            }      
					>																			
						Filters						
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-80 p-0">
					<FilterList
						filters={filters}
						filterOptions={filterOptions}
						handleFilter={handleFilter}
					/>
				</PopoverContent>
			</Popover>
			<Hidden smUp>
				<Sheet
					open={open}
					handleClose={() => setOpen(false)}
					title="Search"
					disablePadding
				>
					<FilterList
						filters={filters}
						filterOptions={filterOptions}
						handleFilter={handleFilter}
					/>
				</Sheet>
			</Hidden>
		</div>
	)
}

export default FilterButton
