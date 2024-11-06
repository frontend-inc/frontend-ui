'use client'

import React from 'react'
import { RemoteAutosuggest } from '../..'
import { useAdmin } from '../../../hooks'

type PolicyAutosuggestProps = {
	errors?: any
	value: any
	name?: string
	label?: string
  valueParam?: string
	handleChange: any
	query?: any
	direction?: 'row' | 'column'
	placeholder?: string
}

const PolicyAutosuggest: React.FC<PolicyAutosuggestProps> = (props) => {
	const { apiUrl } = useAdmin()

	const {
		errors,
		value,
    name='policy',
		direction = 'column',
		label,
    valueParam='handle',
		handleChange,
		placeholder = 'Select action',
	} = props

	if (!apiUrl) return null
	return (
		<RemoteAutosuggest
			enableClear
			errors={errors}
			name={name}
			label={label}
			value={value}
			displayField="title"
			valueParam={valueParam}
			direction={direction}
			url={`${apiUrl}/policies`}
			placeholder={placeholder}
			handleChange={handleChange}
		/>
	)
}

export default PolicyAutosuggest
