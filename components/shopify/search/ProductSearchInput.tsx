import React from 'react'
import { Box, Button, InputAdornment, Input } from '@mui/material'

type SearchInputProps = {
	value?: string
	handleChange?: any
	handleSearch?: any
	handleClear?: any
	placeholder?: string
}

const ProductSearchInput: React.FC<SearchInputProps> = (props) => {
	const {
		value,
		handleChange,
		handleSearch,
		placeholder = 'Enter keywords...',
	} = props

	return (
		<Box sx={sx.root}>
			<Input
				fullWidth
				name="keywords"
				value={value}
				onChange={handleChange}
				disableUnderline
				autoComplete="off"
				placeholder={placeholder}
				endAdornment={
					<InputAdornment position="end">
						<Button sx={sx.button} onClick={() => handleSearch(value)}>
							Search
						</Button>
					</InputAdornment>
				}
			/>
		</Box>
	)
}

export default ProductSearchInput

const sx = {
	root: {
		display: 'flex',
		alignItems: 'center',
		ml: 'auto',
		flex: {
			sm: '1 1 auto',
			md: 'auto',
		},
		borderBottom: '1px solid',
		borderColor: 'primary.main',
	},
	icon: {
		px: 1,
		height: '100%',
		display: 'flex',
		alignItems: 'center',
	},
	button: {
		px: 2,
		minWidth: '60px',
		borderRadius: '4px',
	},
}
