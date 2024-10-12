'use client'

import React, { useState } from 'react'
import { cn } from '../../../shadcn/lib/utils'
import { Button } from '../../../shadcn/ui/button'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '../../../shadcn/ui/popover'
import { ArrowUp, ArrowDown } from 'lucide-react'
import SortList from './SortList'
import { SortOptionType } from '../../../types'

type SortButtonProps = {
	loading?: boolean
	sortOptions: SortOptionType[]
	sortBy: string
	sortDirection: 'asc' | 'desc'
	handleSortBy: (field: SortOptionType) => void
	handleSortDirection: (sortDirection: 'asc' | 'desc') => void
}

export default function SortButton({
	sortOptions,
	sortBy,
	sortDirection,
	handleSortBy,
	handleSortDirection,
}: SortButtonProps) {
	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = () => setIsOpen(!isOpen)

	return (
		<>
			<div className="hidden sm:block">
				<Popover open={isOpen} onOpenChange={setIsOpen}>
					<PopoverTrigger asChild>
						<Button
							variant="secondary"
							className={cn('w-full sm:w-auto border-r-0', 'hover:border-r-0')}
							onClick={toggleOpen}
						>
							Sort
							{sortDirection === 'asc' ? (
								<ArrowUp className="ml-2 h-4 w-4" />
							) : (
								<ArrowDown className="ml-2 h-4 w-4" />
							)}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-80 p-0">
						<SortList
							sortOptions={sortOptions}
							sortBy={sortBy}
							sortDirection={sortDirection}
							handleSortBy={handleSortBy}
							handleSortDirection={handleSortDirection}
						/>
					</PopoverContent>
				</Popover>
			</div>
		</>
	)
}
