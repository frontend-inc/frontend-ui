import React from 'react'
import {
	WHERE_OPTIONS,
	BOOLEAN_OPTIONS,
	BOOLEAN_FIELDS,
	DATE_FIELDS,
	STRING_FIELDS,
	SELECT_FIELDS,
	NUMBER_FIELDS,
	DATE_RANGE_OPTIONS,
	FILTER_OPERATORS,
} from '../../../constants/index'
import { Box, IconButton, Typography } from '@mui/material'
import { TextInput, Autosuggest, ArrayInput } from '../../../components'
import { OptionType, FilterOptionType, SyntheticEventType } from '../../../types'
import { X } from 'lucide-react'

type FieldOption = FilterOptionType & {
	db_type: string
}

type FilterFieldProps = {
	index: number
	filter: FilterOptionType
	fieldOptions: FieldOption[]
	handleChange: (e: SyntheticEventType, index: number) => void
	handleRemove: (index: number) => void
}

const FilterFieldWrapper: React.FC<FilterFieldProps> = (props) => {
	const { index, filter, fieldOptions, handleChange, handleRemove } = props

	let field
	let operatorOptions: OptionType[] = []

	if (filter.field) {
		field = fieldOptions.find((f) => f.value == filter.field)
		operatorOptions = FILTER_OPERATORS[field?.db_type || 'integer']
	}

	return (
		<Box sx={sx.root}>
			<Box sx={sx.inputLabel}>
				<Typography
					variant="subtitle2"
					color="textSecondary"
					sx={sx.inputWhere}
				>
					where
				</Typography>
			</Box>
			<Box sx={sx.inputFilter}>
				<Autosuggest
					name={'where'}
					options={WHERE_OPTIONS}
					placeholder="where"
					value={filter?.where || 'AND'}
					handleChange={(ev) => handleChange(ev, index)}
				/>
			</Box>
			<Box sx={sx.inputFilter}>
				<Autosuggest
					name={'field'}
					options={fieldOptions}
					placeholder="field"
					value={filter?.field || ''}
					handleChange={(ev) => handleChange(ev, index)}
				/>
			</Box>
			{filter?.field && (
				<Box sx={sx.inputOperator}>
					<Autosuggest
						name={'operator'}
						placeholder="…"
						options={operatorOptions}
						value={filter?.operator || ''}
						handleChange={(ev) => handleChange(ev, index)}
					/>
				</Box>
			)}
			<Box>
				<IconButton size="small" onClick={() => handleRemove(index)}>
					<X size={20} />
				</IconButton>
			</Box>
			<Box sx={sx.inputSpacer} />
			<Box sx={sx.inputValue}>
				{BOOLEAN_FIELDS.includes(field?.db_type) && (
					<Autosuggest
						name={'value'}
						placeholder="true or false"
						options={BOOLEAN_OPTIONS}
						value={filter?.value || ''}
						handleChange={(ev) => handleChange(ev, index)}
					/>
				)}

				{DATE_FIELDS.includes(field?.variant) && (
					<>
						{['gte', 'lte'].includes(filter?.operator) ? (
							<Autosuggest
								name={'value'}
								placeholder="date since"
								options={DATE_RANGE_OPTIONS}
								value={filter?.value || ''}
								handleChange={(ev) => handleChange(ev, index)}
							/>
						) : (
							<TextInput
								type={'date'}
								name={'value'}
								placeholder="value"
								value={filter?.value || ''}
								handleChange={(ev) => handleChange(ev, index)}
							/>
						)}
					</>
				)}

				{NUMBER_FIELDS.includes(field?.variant) && (
					<>
						{['in', 'nin'].includes(filter?.operator) ? (
							<ArrayInput
								name={'value'}
								placeholder="values"
								value={Array.isArray(filter?.value) ? filter?.value : []}
								handleChange={(ev) => handleChange(ev, index)}
							/>
						) : (
							<TextInput
								type="number"
								name={'value'}
								placeholder="value"
								value={filter?.value || ''}
								handleChange={(ev) => handleChange(ev, index)}
							/>
						)}
					</>
				)}

				{STRING_FIELDS.includes(field?.variant) && (
					<TextInput
						name={'value'}
						placeholder="value"
						value={filter?.value || ''}
						handleChange={(ev) => handleChange(ev, index)}
					/>
				)}

				{SELECT_FIELDS.includes(field?.variant) && (
					<Autosuggest
						name={'value'}
						placeholder="Select..."
						options={field?.options?.map((opt) => ({
							label: opt,
							value: opt,
						}))}
						value={filter?.value || ''}
						handleChange={(ev) => handleChange(ev, index)}
					/>
				)}
			</Box>
		</Box>
	)
}

export default FilterFieldWrapper

const sx = {
	root: {
		display: 'grid',
		gridTemplateColumns: '0.5fr 1fr 1fr 1fr 0.5fr',
		gap: '0px',
		borderTop: '1px dotted',
		borderColor: 'divider',
		mt: 1,
		pt: 1,
	},
	inputField: {
		py: 0.5,
		px: 0,
		display: 'grid',
		gridColumn: 'span 1',
	},
	inputLabel: {
		gridColumn: 'span 1',
		minWidth: '100px',
		mb: 1,
	},
	inputWhere: {
		width: '70px',
		gridColumn: 'span 1',
		textTranform: 'lowercase',
	},
	inputFilter: {
		gridColumn: 'span 1',
		minWidth: '100px',
	},
	inputOperator: {
		gridColumn: 'span 1',
		minWidth: '100px',
	},
	inputSpacer: {
		gridColumn: 'span 1',
	},
	inputValue: {
		my: 1,
		gridColumn: 'span 3',
		width: '100%',
	},
	icon: {
		height: '20px',
		width: '20px',
		color: 'icon',
	},
}
