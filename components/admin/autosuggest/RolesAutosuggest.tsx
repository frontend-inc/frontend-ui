import React from 'react'
import { RemoteAutosuggest } from '../../../components'
import { useAdmin } from '../../../hooks'

type RolesAutosuggestProps = {
	value: any
	name?: string
	label: string
	handleChange: any
	direction?: 'column' | 'row'
}

const RolesAutosuggest: React.FC<RolesAutosuggestProps> = (props) => {
	const { value, name = 'locale', direction, label, handleChange } = props

	const { apiUrl } = useAdmin()

	if (!apiUrl) return null
	return (
		<RemoteAutosuggest
			name={name}
			label={label}
			value={value}
			direction={direction}
			displayField="label"
			valueParam="name"
			url={`${apiUrl}/roles`}
			placeholder="Select role"
			handleChange={handleChange}
		/>
	)
}

export default RolesAutosuggest
