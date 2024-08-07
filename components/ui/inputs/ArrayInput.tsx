import React from 'react'
import { useError } from '../../../hooks'
import { Stack, Popper, Autocomplete, Chip, TextField } from '@mui/material'
import { InputLabel, ErrorText } from '../../../components'
import { X } from 'lucide-react'
import { SyntheticEventType } from '../../../types'

const CustomPopper = function (props) {
	return <Popper {...props} sx={sx.popper} placement="bottom" />
}

type ArrayInputProps = {
	errors?: any
	value?: any
	label?: string
	name: string
	options?: any[]
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	direction?: 'row' | 'column'
	freeSolo?: boolean
	info?: string
}

const ArrayInput: React.FC<ArrayInputProps> = (props) => {
	const {
		errors,
		label,
		name,
		options,
		placeholder,
		handleChange,
		direction = 'column',
		freeSolo = true,
		info,
	} = props
	let { value } = props
	if (!value) value = []

	const { error, clearError } = useError({
		errors,
		name,
	})

	const handleInputChange = (ev, values) => {
		if (error) clearError()

		let newValues = values.filter((value) => value != null)
		handleChange({
			target: {
				name,
				value: newValues,
			},
		})
	}

	return (
		<Stack sx={sx.root} direction={direction} spacing={0}>
			<InputLabel label={label} info={info} />
			<Autocomplete
				multiple
				freeSolo={freeSolo}
				defaultValue={value || []}
				onChange={handleInputChange}
				options={options || []}
				getOptionLabel={(option) => option}
				PopperComponent={CustomPopper}
				clearIcon={<X />}
				renderTags={(tagValue, getTagProps) =>
					Array.isArray(tagValue) &&
					tagValue.map((option, index) => (
						<Chip
							sx={sx.chip}
							label={option}
							color="secondary"
							deleteIcon={<X size={20} />}
							{...getTagProps({ index })}
						/>
					))
				}
				renderInput={(params) => (
					<TextField
						{...params}
						color="primary"
						sx={{
							...sx.textField,
							...((error && sx.inputError) || {}),
						}}
						placeholder={placeholder}
						margin="dense"
						variant="outlined"
					/>
				)}
			/>
			<ErrorText error={error} />
		</Stack>
	)
}

export default ArrayInput

export const sx = {
	root: {
		width: '100%',
	},
	textField: {
		my: 0,
		'& .MuiOutlinedInput-root': {
			minWidth: '230px',
			p: '4px',
			color: 'text.secondary',
			fontSize: (theme) => theme.typography.body2.fontSize,
			fontFamily: (theme) => theme.typography.body2.fontFamily,
			borderRadius: 1,
			bgcolor: 'background.default',
			border: (theme) => `1px solid ${theme.palette.divider}`,
			//boxShadow: `rgb(0 0 0 / 5%) 0px 2px 4px !important`,
			width: '100%',
			'& fieldset': {
				border: `1px solid transparent`,
			},
			'&:hover fieldset': {
				border: `1px solid transparent`,
			},
			'&.Mui-focused fieldset': {
				border: (theme) => `0px solid ${theme.palette.primary.light}`,
			},
		},
		root: {
			width: '100%',
			height: 26,
		},
	},
	inputError: {
		'& .MuiOutlinedInput-root': {
			border: '2px solid',
			borderColor: 'error.main',
		},
	},
	icon: {
		height: 20,
		width: 20,
		color: 'text.primary',
	},
	popper: {
		fontWeight: (theme) => theme.typography.body2.fontWeight,
		fontFamily: (theme) => theme.typography.body2.fontFamily,
	},
	chip: {
		borderRadius: '4px',
	},
	label: {
		width: '100px',
		minWidth: '100px',
	},
}
