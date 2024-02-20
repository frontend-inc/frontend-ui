import React from 'react'
import { useError } from '../../../hooks'
import {
	FormControl,
	Popper,
	Typography,
	Autocomplete,
	Chip,
	TextField,
} from '@mui/material'
import { ErrorText } from '../../../components'
import { X } from 'lucide-react'
import { SyntheticEvent } from '../../../types'

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
	handleChange: (e: SyntheticEvent) => void
	freeSolo?: boolean
}

const ArrayInput: React.FC<ArrayInputProps> = (props) => {
	const {
		errors,
		label,
		name,
		value,
		options,
		placeholder,
		handleChange,
		freeSolo = true,
	} = props

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
		<FormControl fullWidth>
			<Typography variant="caption" color="textSecondary">
				{label}
			</Typography>
			{value && (
				<Autocomplete
					multiple
					freeSolo={freeSolo}
					defaultValue={value || []}
					onChange={handleInputChange}
					options={options || ['Enter value']}
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
			)}
			<ErrorText error={error} />
		</FormControl>
	)
}

export default ArrayInput

export const sx = {
	root: {},
	textField: {
		'& .MuiOutlinedInput-root': {
			p: '4px',
			fontSize: (theme) => theme.typography.body2.fontSize,
			fontFamily: (theme) => theme.typography.body2.fontFamily,
			borderRadius: (theme) => theme.shape.borderRadius,
			bgcolor: 'background.paper',
			border: (theme) => `1px solid ${theme.palette.divider}`,
			transition: '0.5s',
			boxShadow: `rgb(0 0 0 / 5%) 0px 2px 4px !important`,
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
		color: '#888',
	},
	popper: {
		fontWeight: (theme) => theme.typography.body2.fontWeight,
		fontFamily: (theme) => theme.typography.body2.fontFamily,
	},
	chip: {
		pr: 0.5,
	},
}
