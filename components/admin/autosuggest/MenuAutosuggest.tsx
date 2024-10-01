import React from 'react'
import { RemoteAutosuggest } from 'frontend-ui/components'
import { useAdmin } from 'frontend-ui/hooks'

type MenuAutosuggestProps = {
	errors?: any
	appId: string
	value: string
	name?: string
	label?: string
	handleChange: (e: any) => void
	query?: any
	direction?: 'row' | 'column'
	placeholder?: string
}

const MenuAutosuggest: React.FC<MenuAutosuggestProps> = (props) => {
	const { apiUrl } = useAdmin()
	const {
		errors,
		value,
		name = 'menu_id',
		label,
		handleChange,
		query,
		direction = 'column',
		placeholder = 'Select menu',
	} = props

	return (
		<RemoteAutosuggest
			direction={direction}
			errors={errors}
			name={name}
			label={label}
			value={value || ''}
			displayField="name"
			url={`${apiUrl}/menus`}
			placeholder={placeholder}
			handleChange={handleChange}
			defaultQuery={query}
			enableClear
		/>
	)
}

export default MenuAutosuggest
