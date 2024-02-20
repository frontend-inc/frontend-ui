import React from 'react'
import { Box } from '@mui/material'
import FilterInput from './FilterInput'

type FilterInputProps = {
	filters: any[]
	fieldOptions: any[]
	handleChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void
	handleRemove: (index: number) => void
}

const FilterInputs: React.FC<FilterInputProps> = (props) => {
	const { filters, fieldOptions, handleChange, handleRemove } = props

	return (
		<>
			{Array.isArray(filters) &&
				filters?.map((filter, index) => (
					<Box key={index}>
						<FilterInput
							index={index}
							filter={filter}
							fieldOptions={fieldOptions}
							handleChange={handleChange}
							handleRemove={handleRemove}
						/>
					</Box>
				))}
		</>
	)
}

export default FilterInputs
