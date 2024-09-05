import React from 'react'
import { RemoteAutosuggest } from '../../../components'
import { useAdmin } from '../../../hooks'

type ActionAutosuggestProps = {
	errors?: any
	value: any
	name?: string
	label?: string
	handleChange: any
	query?: any
	direction?: 'row' | 'column'
	placeholder?: string
}

const ActionAutosuggest: React.FC<ActionAutosuggestProps> = (props) => {

  const { apiUrl } = useAdmin()

	const {
		errors,
		value,
		name = 'action_id',
		direction = 'column',
		label,
		handleChange,
		placeholder = 'Select action',
		query: defaultQuery = {},
	} = props

  if(!apiUrl) return null;
	return (
		<RemoteAutosuggest
			enableClear
			errors={errors}
			name={name}
			label={label}
			value={value}
			displayField="name"
			direction={direction}
			url={`${apiUrl}/actions`}
			placeholder={placeholder}
			handleChange={handleChange}
			defaultQuery={defaultQuery}
		/>
	)
}

export default ActionAutosuggest
