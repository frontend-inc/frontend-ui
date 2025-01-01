'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { Badge } from 'frontend-shadcn'
import { Popover, PopoverTrigger, PopoverContent } from 'frontend-shadcn'
import TableFilterForm from './TableFilterForm'
import { ListFilter } from 'lucide-react'
import { SyntheticEventType } from '../../../../types'
import { cn } from '@nextui-org/react'

type FilterButtonProps = {
	loading: boolean
	query: any
	fields: any[]
	badgeCount?: number
	handleChange: (ev: SyntheticEventType) => void
	handleSearch: (query: any) => void
	handleClear: () => void
}

const FilterButtonInput: React.FC<FilterButtonProps> = ({
	loading,
	query,
	fields,
	badgeCount = 0,
	handleSearch,
	handleChange,
	handleClear,
}) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					className={cn('text-secondary-foreground', badgeCount > 0 && 'pr-2')}
					variant="ghost"
				>
					<ListFilter className="mr-2 h-4 w-4" />
					Filter
					{badgeCount > 0 && (
						<Badge className="ml-2 rounded-full px-2">{badgeCount}</Badge>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[400px]">
				<TableFilterForm
					loading={loading}
					query={query}
					fields={fields}
					handleSearch={handleSearch}
					handleChange={handleChange}
					handleClearFilters={handleClear}
				/>
			</PopoverContent>
		</Popover>
	)
}

export default FilterButtonInput
