import React from 'react'
import {
	ArrayInput,
	SelectInput,
	DateInput,
	ImageInput,
	JSONInput,
	RatingInput,
	SwitchInput,
	TextInput,
} from '../..'
import { SyntheticEventType } from '../../../types'

type FormFieldProps = {
	field: any
	errors?: any
	value?: any | any[]
	handleChange: (e: SyntheticEventType) => void
	handleRemove?: (name: string) => void
}

const FormField: React.FC<FormFieldProps> = (props) => {
	const { field, errors, value, handleChange, handleRemove } = props

	const { name, label, placeholder, variant } = field

	return (
		<>
			{variant === 'array' && (
				<ArrayInput
					errors={errors}
					label={label}
					name={name}
					value={value || []}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}
			{variant === 'string' && (
				<TextInput
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}
			{variant === 'url' && (
				<TextInput
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}
			{variant === 'text' && (
				<TextInput
					multiline
					rows={6}
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}
			{variant === 'number' && (
				<TextInput
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}
			{variant === 'date' && (
				<DateInput
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}

			{variant === 'boolean' && (
				<SwitchInput
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}

			{variant === 'select' && (
				<SelectInput
					errors={errors}
					label={label}
					name={name}
					value={value}
					options={field?.options?.map((option) => ({
						label: option,
						value: option,
					}))}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}

			{variant === 'rating' && (
				<RatingInput
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}
			{variant === 'image' && (
				<ImageInput
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					handleRemove={handleRemove}
				/>
			)}
			{variant === 'price' && (
				<TextInput
					type="number"
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}
			{variant === 'json' && (
				<JSONInput
					errors={errors}
					label={label}
					name={name}
					value={value}
					handleChange={handleChange}
					placeholder={placeholder}
				/>
			)}
		</>
	)
}

export default FormField
