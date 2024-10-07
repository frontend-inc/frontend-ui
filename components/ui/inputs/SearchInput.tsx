import React, { useState, useEffect } from 'react'
import { Paper } from '@mui/material'
import { useDebounce } from 'use-debounce'
import { SyntheticEventType } from '../../../types'
import { Icon } from '../../../components'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'

type SearchInputProps = {
	name?: string
	label?: string
	value: string
	placeholder?: string
	fullWidth?: boolean
	handleChange: (e: SyntheticEventType) => void
	handleSearch: (keywords: string) => void
	styles?: any
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
	const {
		name = 'keywords',
		fullWidth = false,
		value,
		placeholder = 'Search...',
		handleChange,
		handleSearch,
		styles = {},
	} = props

	const [text, setText] = useState(value)
	const [debouncedValue] = useDebounce(text, 500)

	const handleInputChange = (e) => {
		setText(e.target.value)
	}

	useEffect(() => {
		if (debouncedValue !== value) {
			handleChange({
				target: {
					name,
					value: debouncedValue,
				},
			})
		}
	}, [debouncedValue])

	useEffect(() => {
		if (value !== text) {
			setText(value)
		}
	}, [value])

	return (
		<Paper
			component="form"
			elevation={0}
			sx={{
				...sx.root,
				...(fullWidth && sx.fullWidth),
			}}
		>
			<InputBase
				sx={{ ml: 2, flex: 1 }}
				placeholder={placeholder}
				value={text}
				onChange={handleInputChange}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						e.preventDefault()
						handleSearch(text)
					}
				}}
			/>
			<Divider sx={{ height: 28, my: 0.5 }} orientation="vertical" />
			<IconButton
				onClick={() => handleSearch(debouncedValue)}
				type="button"
				sx={{ p: '10px' }}
				aria-label="search"
			>
				<Icon name="Search" color="text.secondary" />
			</IconButton>
		</Paper>
	)
}

export default SearchInput

const sx = {
	root: {
		p: 0,
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		border: '1px solid',
		borderColor: 'divider',
		maxWidth: 400,
		minWidth: {
			sm: 320,
			xs: '100%',
		},
		transition: 'box-shadow 0.3s',
		'&:hover': {
			boxShadow: 1,
		},
	},
	fullWidth: {
		width: '100%',
		minWidth: '100%',
	},
}
