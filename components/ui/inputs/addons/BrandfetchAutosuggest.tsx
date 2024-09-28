import React, { useEffect, useState } from 'react'
import { AutocompleteInput } from '../../..'
import { SyntheticEventType } from '../../../../types'
import { useBrandfetch } from '@frontend-mui/hooks'

type AutosuggestProps = {
	value?: any
	name?: string
	label?: string
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	direction?: 'row' | 'column'
}

const BrandfetchAutosuggest: React.FC<AutosuggestProps> = (props) => {
	const {
		value,
		label,
		direction = 'column',
		placeholder,
		name = 'domain',
		handleChange,
	} = props

	const { loading, brands, fetchBrands } = useBrandfetch()

	const [options, setOptions] = useState<any>([])

	const handleInputChange = (newValue) => {
		fetchBrands(newValue)
	}

	useEffect(() => {
		if (brands) {
			setOptions(
				brands?.map((brand) => ({
					label: brand.domain,
					value: brand.domain,
					image: brand.icon,
				}))
			)
		}
	}, [brands])

	const handleAutocompleteChange = (e) => {
		handleChange({
			target: {
				name,
				value: e.target.value,
			},
		})
	}

	return (
		<AutocompleteInput
			name={name}
			label={label}
			value={value}
			options={options}
			handleChange={handleAutocompleteChange}
			handleInputChange={handleInputChange}
			direction={direction}
			placeholder={placeholder}
		/>
	)
}

export default BrandfetchAutosuggest
