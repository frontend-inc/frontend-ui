'use client'

import React from 'react'
import { FilterIcon, Search } from 'lucide-react'
import { SyntheticEventType } from '../../../../types'
import TableFilterForm from './TableFilterForm'
import { Button } from '@nextui-org/react'
import { Popover, PopoverContent, PopoverTrigger } from 'frontend-shadcn'

type FilterMenuProps = {
	loading: boolean
	fields: any
	query: any
	handleChange: (ev: SyntheticEventType) => void
	handleClearFilters: () => void
	handleSearch: () => void
}

const TableFilterMenu: React.FC<FilterMenuProps> = ({
	loading,
	query,
	fields,
	handleChange,
	handleClearFilters,
	handleSearch,
}) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button isIconOnly variant="ghost">
					<FilterIcon className="h-4 w-4" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-80 p-0">
				<div className="bg-background max-w-[420px] w-full">
					<div className="flex items-center justify-start h-[46px] py-0 px-4 border-b">
						<FilterIcon className="h-5 w-5 text-primary mr-2" />
						<span className="text-sm text-foreground/70">Search filters</span>
					</div>
					<div className="p-4">
						<TableFilterForm
							loading={loading}
							query={query}
							fields={fields}
							handleChange={handleChange}
							handleClearFilters={handleClearFilters}
							handleSearch={handleSearch}
						/>
						<Button
							className="w-full mt-2"
							onPress={handleSearch}
							startContent={<Search className="h-4 w-4" />}
						>
							Search
						</Button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}

export default TableFilterMenu
