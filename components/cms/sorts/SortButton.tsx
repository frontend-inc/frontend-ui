'use client'

import React, { useState } from 'react'
import { 
  Button,
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@nextui-org/react'
import { ArrowUp, ArrowDown } from 'lucide-react'
import { SortOptionType } from '../../../types'
import { 
  Listbox, 
  ListboxSection, 
  ListboxItem 
}  from '@nextui-org/react'

type SortButtonProps = {
	loading?: boolean
	sortOptions: SortOptionType[]
	sortBy: string
	sortDirection: 'asc' | 'desc'
	handleSortBy: (sortBy: string) => void
	handleSortDirection: (sortDirection: 'asc' | 'desc') => void
}

const SORT_DIRECTIONS = [
	{ value: 'asc', label: 'Ascending' },
	{ value: 'desc', label: 'Descending' },
]

export default function SortButton(props: SortButtonProps) {

  const {
    sortOptions,
    sortBy,
    sortDirection,
    handleSortBy,
    handleSortDirection,
  } = props || {}

	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = () => setIsOpen(!isOpen)

  const handleSortByKeys = (keys: string[]) => {
    handleSortBy(keys?.currentKey)
  }

  const handleSortDirectionKeys = (keys: string[]) => {
    handleSortDirection(keys?.currentKey)
  }

	return (
    <Popover isOpen={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <Button
          variant="ghost"
          onPress={toggleOpen}
          className="text-foreground w-full md:w-auto"
          endContent={
            sortDirection === 'asc' ? (
              <ArrowUp className="h-4 w-4 text-foreground" />
            ):(
              <ArrowDown className="h-4 w-4 text-foreground" />
            )}            
        >
          Sort						
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full md:min-w-[220px]">
      <Listbox
        disallowEmptySelection
        selectedKeys={[sortBy]}
        selectionMode="single"
        //@ts-ignore 
        onSelectionChange={handleSortByKeys}
      >
        <ListboxSection title="Sort by">
          {sortOptions?.map((sortOption) => (
            <ListboxItem 
              key={sortOption.name}						
            >
              {sortOption.label}
            </ListboxItem>
          ))}
        </ListboxSection>
      </Listbox>
      <Listbox 
        disallowEmptySelection
        selectedKeys={[sortDirection]}
        selectionMode="single"
        onSelectionChange={handleSortDirectionKeys}
      >
        <ListboxSection title="Sort direction">
          {SORT_DIRECTIONS.map((direction) => (
            <ListboxItem 
              key={direction.value}
            >
              {direction.label}
            </ListboxItem>
          ))}
			  </ListboxSection>
      </Listbox>
    </PopoverContent>
  </Popover>
	)
}
