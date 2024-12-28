'use client'

import React, { useState } from 'react'
import { RemixIcon } from '../..'
import { FilterOptionType, SearchFilterOptionType } from '../../..'
import { cn } from 'frontend-shadcn'
import { 
  Button,
  Popover, 
  PopoverContent, 
  PopoverTrigger,
  Listbox,
  ListboxSection,
  ListboxItem 
} from '@nextui-org/react'

type FilterGroupProps = {
	filters?: FilterOptionType[]
	filterOption: SearchFilterOptionType
	handleFilter: (name: string, value: string | number | boolean) => void
}

export const FilterGroup: React.FC<FilterGroupProps> = (props) => {
	const { filters, filterOption, handleFilter } = props || {}

  const selectedKeys = filters
    ?.filter(filter => filter?.name == filterOption?.name)
    ?.map(filter => filter?.value)

  const handleSelectionChange = (keys) => {
    handleFilter(filterOption?.name, keys.currentKey)
  }

	return (
    <Listbox
      selectionMode="single"
      selectedKeys={selectedKeys}
      onSelectionChange={ handleSelectionChange }
    >
      <ListboxSection 
        title={ filterOption?.label}
      >
        { filterOption?.options?.map(option => (
          <ListboxItem key={ option?.value }>
            { option?.label}
          </ListboxItem>
        ))}
      </ListboxSection>
    </Listbox>	
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

	return (
			<Popover>
				<PopoverTrigger>
					<Button
						variant="ghost"
						loading={loading}
						className={cn(
							'relative w-full sm:w-auto',
						)}
						startContent={
							<RemixIcon
								name="ri-filter-3-line"
								className="text-foreground"
							/>
						}
					>
						Filters
					</Button>
				</PopoverTrigger>
				<PopoverContent className="min-w-[220px]">
          {filterOptions.map((filterOption, index) => (
            <FilterGroup
              key={index}
              filters={filters}
              filterOption={filterOption}
              handleFilter={handleFilter}
            />
          ))}
      </PopoverContent>
    </Popover>
	)
}

export default FilterButton
