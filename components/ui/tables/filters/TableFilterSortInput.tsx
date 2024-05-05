import React from 'react'
import { Box, Typography } from '@mui/material'
import { Autosuggest } from '../../..'
import { OptionType } from '../../../../types'

type TableFilterSortProps = {
	label: string
	fieldOptions: OptionType[]
	sortBy?: string
	sortDirection?: 'asc' | 'desc'
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SORT_DIRECTIONS = [
	{ label: 'descreasing', value: 'asc' },
	{ label: 'increasing', value: 'desc' },
]

const TableFilterSortInput: React.FC<TableFilterSortProps> = (props) => {
	const {
		label,
		sortBy = '',
		sortDirection = '',
		fieldOptions,
		handleChange,
	} = props

	return (
		<Box sx={sx.inputField}>
			{label && (
				<Box sx={sx.inputLabel}>
					<Typography variant="subtitle2" color="textSecondary">
						{label}
					</Typography>
				</Box>
			)}
			<Box sx={sx.inputSortBy}>
				<Autosuggest
					name={'sort_by'}
					options={fieldOptions}
					placeholder="Sort field"
					value={sortBy}
					handleChange={handleChange}
				/>
			</Box>
			<Box sx={sx.inputSortDirection}>
				<Autosuggest
					name={'sort_direction'}
					options={SORT_DIRECTIONS}
					placeholder="Sort direction"
					value={sortDirection || ''}
					handleChange={handleChange}
				/>
			</Box>
		</Box>
	)
}

export default TableFilterSortInput

const sx = {
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
	inputSortBy: {
		minWidth: '200px',
		mr: 1,
	},
	inputSortDirection: {
		width: '100%',
		mr: 3,
	},
}
