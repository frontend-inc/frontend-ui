import React from 'react'
import { RemoteAutosuggest } from 'frontend-ui/components'
import { SyntheticEventType } from 'frontend-ui/types'
import { useAdmin } from '../../../hooks'

type TeamAutosuggestProps = {
	errors?: any
	name: string
	label: string
	value: any
	direction?: 'row' | 'column'
	displayField?: string
	handleChange: (ev: SyntheticEventType) => void
}

const TeamAutosuggest: React.FC<TeamAutosuggestProps> = (props) => {

  const { apiUrl } = useAdmin()

	const {
		errors,
		direction = 'column',
		name = 'team_id',
		label,
		value,
		displayField = 'name',
		handleChange,
	} = props || {}

  if(!apiUrl) return null;
	return (
		<RemoteAutosuggest
      enableClear
			errors={errors}
			direction={direction}
			name={name}			
			label={label}
			value={value}
			displayField={displayField}
			imageField={'image.url'}
			url={`${apiUrl}/teams`}
			placeholder="Select team"
			handleChange={handleChange}
		/>
	)
}

export default TeamAutosuggest
