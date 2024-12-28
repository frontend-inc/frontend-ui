'use client'

import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { SyntheticEventType } from '../../../types'
import { RemixIcon } from '../../../components'
import { cn } from 'frontend-shadcn'
import { Input } from '@nextui-org/react'
import { IconButton } from '../../../components'

type SearchInputProps = {
	name?: string
	label?: string
	value: string
	placeholder?: string
	fullWidth?: boolean
	handleChange: (e: SyntheticEventType) => void
	handleSearch: (keywords: string) => void
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
	const {
    label='Search',
		name = 'keywords',
		fullWidth = false,
		value,
		placeholder = 'Search...',
		handleChange,
		handleSearch,
	} = props

	const [text, setText] = useState(value)
	const [debouncedValue] = useDebounce(text, 350)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value)
	}

	useEffect(() => {
    handleChange({
      target: {
        name,
        value: debouncedValue,
      },
    })		
	}, [debouncedValue])

	return (		
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSearch(text)
      }}
    >
      <Input
        className={ fullWidth ? 'w-full' : '' }
        type="text"
        fullWidth={ fullWidth }
        placeholder={placeholder}
        value={text}
        onChange={handleInputChange}
        endContent={
          <RemixIcon name='ri-search-line' className='text-foreground' />
        }
      />
    </form>
	)
}

export default SearchInput
