import React, { useEffect, useState } from 'react'
import { useResource } from 'frontend-js'
import { Autosuggest } from '../../components'
import { ErrorText } from '../../components'
import { useError } from '../../hooks'
import { OptionType, SyntheticEventType } from '../../types'

type RemoteAutosuggestProps = {
	errors?: any
	value?: any
	label?: string
	name: string
	url: string
	displayField?: string
	handleChange?: (event: SyntheticEventType) => void
	valueParam?: string
	placeholder?: string
	imageField?: string
	direction?: 'row' | 'column'
	defaultQuery?: Record<string, any>
}

const RemoteAutosuggest: React.FC<RemoteAutosuggestProps> = (props) => {
	const {
		errors,
		value,
		label,
		name,
		url,
		displayField = 'title',
		handleChange,
		valueParam = 'id',
		placeholder = 'Search',
		defaultQuery = null,
		direction = 'column',
	} = props

	const { error, clearError } = useError({
		errors: errors,
		name: name,
	})

	const { resources, findMany } = useResource({
		url: url,
		name: name,
	})

	const [option, setOption] = useState<OptionType | {}>({})
	const [options, setOptions] = useState<OptionType[]>([])

	const handleInputChange = (newValue) => {
		if (error) clearError()
		findOptions(newValue)
	}

	const findOptions = async (value) => {
		if (!value || resources?.length == 0) return null
		let resource = resources.find((r: any) => r[valueParam] == value)
		if (resource) {
			setOption({
				label: resource[displayField],
				value: resource[valueParam],
			})
		}
	}

	useEffect(() => {
		if (resources) {
			let _options = resources?.map((resource) => ({
				label: resource[displayField],
				value: resource[valueParam],
			}))
			setOptions(_options)
		}
	}, [resources])

	useEffect(() => {
		if (value && resources?.length > 0) {
			findOptions(value)
		}
	}, [resources?.length, value])

	useEffect(() => {
		if (url) {
			findMany(defaultQuery)
		}
	}, [url, defaultQuery])

	return (
		<>
			<Autosuggest
				direction={direction}
				label={label}
				name={name}
				value={option}
				options={options}
				placeholder={placeholder}
				handleChange={handleChange}
				handleInputChange={handleInputChange}
			/>
			<ErrorText error={error} />
		</>
	)
}

export default RemoteAutosuggest
