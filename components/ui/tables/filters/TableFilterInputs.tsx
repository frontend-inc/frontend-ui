import React from 'react'
import TableFilterInput from './TableFilterInput'

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
					<div key={index}>
						<TableFilterInput
							index={index}
							filter={filter}
							fieldOptions={fieldOptions}
							handleChange={handleChange}
							handleRemove={handleRemove}
						/>
					</div>
				))}
		</>
	)
}

export default FilterInputs
