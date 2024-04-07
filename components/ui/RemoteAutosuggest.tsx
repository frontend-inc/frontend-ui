import React, { useEffect, useState } from 'react'
import { useResource } from 'frontend-js'
import { Autosuggest } from '../../components'
import { ErrorText } from '../../components'
import { useError } from '../../hooks'
import { OptionType, QueryParamsType, SyntheticEventType } from '../../types'

type RemoteAutosuggestProps = {
	errors?: any
	value?: any
	label?: string
	name: string
	url: string
	displayField?: string
	handleChange: (event: SyntheticEventType) => void
	handleClear?: () => void
	valueParam?: string
	placeholder?: string
	imageField?: string
	direction?: 'row' | 'column'
	defaultQuery?: QueryParamsType
	defaultOptions?: OptionType[]
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
		handleClear,
		valueParam = 'id',
		placeholder = 'Search',
		defaultQuery = {},
		direction = 'column',
		defaultOptions = [],
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
		findOption(newValue)
	}

	const formatResources = (resources) => {
		return resources.map((resource) => ({
			label: resource[displayField],
			value: resource[valueParam],
		}))
	}

	const findOption = async (value) => {
		if (!value) return null
		if (options?.length > 0) {
			let matchOption = options.find(
				(option: OptionType) => option.value == value
			)
			if (matchOption) {
				setOption(matchOption)
			}
		}
	}

	useEffect(() => {
		if (resources) {
			setOptions([...formatResources(resources), ...defaultOptions])
		}
	}, [resources])

	useEffect(() => {
		if (value && resources && resources.length > 0) {
			findOption(value)
		}
	}, [value, resources, url])

	useEffect(() => {
		if (url) {
			//@ts-ignore
			findMany(defaultQuery)
		}
	}, [url])

	return (
		<>
			{options?.length > 0 && (
				<Autosuggest
					direction={direction}
					label={label}
					name={name}
					value={option}
					options={options}
					placeholder={placeholder}
					handleChange={handleChange}
					handleInputChange={handleInputChange}
					handleClear={handleClear}
				/>
			)}
			<ErrorText error={error} />
		</>
	)
}

export default RemoteAutosuggest
