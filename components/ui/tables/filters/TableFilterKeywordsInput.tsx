import React from 'react'
import { Box, Typography } from '@mui/material'
import { SearchInput } from '../../..'

type FilterKeywordProps = {
	label?: string
	handleSearch: () => void
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	value?: string
}

const FilterKeywordsInput: React.FC<FilterKeywordProps> = (props) => {
	const { label, value, handleChange, handleSearch } = props

	return (
		<Box sx={sx.inputField}>
			{label && (
				<Box sx={sx.inputLabel}>
					<Typography variant="subtitle2" color="textSecondary">
						{label}
					</Typography>
				</Box>
			)}
			<Box sx={sx.inputKeywords}>
				<SearchInput
					name={label}
					value={value}
					placeholder="Keywords"
					handleChange={handleChange}
					handleSearch={handleSearch}
				/>
			</Box>
		</Box>
	)
}

export default FilterKeywordsInput

const sx = {
	button: {
		mt: 2,
	},
	searchBar: {
		width: '100%',
	},
	inputField: {
		py: 0.5,
		px: 0,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	inputLabel: {
		minWidth: '100px',
	},
	inputKeywords: {
		width: '100%',
		mr: '30px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
}
