'use client'

import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { SyntheticEventType } from '../../../types'
import { Search } from 'lucide-react'
import { cn } from 'frontend-shadcn'
import { Input } from 'frontend-shadcn'
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
		name = 'keywords',
		fullWidth = false,
		value,
		placeholder = 'Search...',
		handleChange,
		handleSearch,
	} = props

	const [text, setText] = useState(value)
	const [debouncedValue] = useDebounce(text, 500)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value)
	}

	useEffect(() => {
		if (debouncedValue !== value) {
			handleChange({
				target: {
					name,
					value: debouncedValue,
				},
			} as SyntheticEventType)
		}
	}, [debouncedValue, handleChange, name, value])

	useEffect(() => {
		if (value !== text) {
			setText(value)
		}
	}, [value])

	return (
		<div className={cn(fullWidth ? 'w-full' : 'max-w-[400px] w-full')}>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					handleSearch(text)
				}}
				className={cn(
					'bg-background flex items-center w-full border border-input rounded-md transition-shadow hover:shadow-md',
					fullWidth
						? 'w-full min-w-full'
						: 'max-w-[400px] min-w-[280px] sm:min-w-full'
				)}
			>
				<Input
					type="text"
					placeholder={placeholder}
					value={text}
					onChange={handleInputChange}
					className="text-foreground flex-grow border-none focus-visible:ring-0 focus-visible:ring-offset-0"
				/>
				<div className="h-6 border-l border-input" />
				<IconButton className="rounded-none" onClick={() => handleSearch(text)}>
					<Search className="h-4 w-4 text-foreground" />
					<span className="sr-only">Search</span>
				</IconButton>
			</form>
		</div>
	)
}

export default SearchInput
