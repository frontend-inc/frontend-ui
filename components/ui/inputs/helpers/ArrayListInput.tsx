import React, { useState } from 'react'
import { Typography, Box, Stack, IconButton, Button } from '@mui/material'
import { InputPropsType } from '../../../../types'
import { X, Plus } from 'lucide-react'
import { TextInput } from '../../..'

type ArrayItemInputProps = {
	index: number
	value: string
	handleChange: any
	handleRemove: any
}

const ArrayItemInput: React.FC<ArrayItemInputProps> = (props) => {
	const { index, value = '', handleChange, handleRemove } = props

	const [_value, setValue] = useState('')

	const handleInputChange = (ev) => {
		let { value = '' } = ev.target
		setValue(value)
		handleChange(value, index)
	}

	return (
		<Stack spacing={0.5} direction="row" sx={sx.root}>
			<TextInput
				name="value"
				value={value}
				placeholder="Enter..."
				//@ts-ignore
				handleChange={handleInputChange}
			/>
			<Box>
				<IconButton size="small" onClick={() => handleRemove(index)}>
					<X  />
				</IconButton>
			</Box>
		</Stack>
	)
}

const ArrayListInput: React.FC<InputPropsType> = (props) => {
	const { name, label, value: values = [], handleChange } = props

	const handleAddClick = () => {
		let newValues = [...values, '']
		handleChange({
			target: {
				name: name,
				value: newValues,
			},
		})
	}

	const handleRemove = (index: number) => {
		let newValues = [...values]
		newValues = newValues.filter((_, i) => i !== index)
		handleChange({
			target: {
				name: name,
				value: newValues,
			},
		})
	}

	const handleInputChange = (value, index) => {
		let newValues = [...values]
		newValues[index] = value
		handleChange({
			target: {
				name: name,
				value: newValues,
			},
		})
	}

	return (
		<Stack spacing={0.5} sx={sx.root}>
			{label && (
				<Typography variant="caption" color="text.secondary">
					{label}
				</Typography>
			)}
			{Array.isArray(values) &&
				values?.map((value, index) => (
					<ArrayItemInput
						key={index}
						index={index}
						value={value}
						handleChange={handleInputChange}
						handleRemove={handleRemove}
					/>
				))}
			<Box>
				<Button
					variant="contained"
					color="secondary"
					onClick={handleAddClick}
					startIcon={<Plus  />}
				>
					Add
				</Button>
			</Box>
		</Stack>
	)
}

export default ArrayListInput

const sx = {
	root: {},
}
