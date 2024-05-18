import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useResource } from 'frontend-js'
import { Autosuggest } from '../..'
import { ErrorText } from '../..'
import { useError } from '../../../hooks'
import { OptionType, QueryParamsType, SyntheticEventType } from '../../../types'
import { get } from 'lodash'

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
	enableRemoteSearch?: boolean
	enableClear?: boolean
}

const RemoteAutosuggest: React.FC<RemoteAutosuggestProps> = (props) => {
	const {
		errors,
		value,
		label,
		name,
		url,
		displayField = 'title',
		imageField,
		handleChange,
		handleClear,
		valueParam = 'id',
		placeholder = 'Search',
		defaultQuery = {},
		direction = 'column',
		defaultOptions = [],
		enableRemoteSearch = false,
		enableClear = false,
	} = props

	const { error, clearError } = useError({
		errors: errors,
		name: name,
	})

	const { loading, delayedLoading, resources, findMany } = useResource({
		url: url,
		name: name,
	})

	const [option, setOption] = useState<OptionType>()
	const [options, setOptions] = useState<OptionType[]>([])

	const handleInputChange = (newValue) => {
		if (error) clearError()
		findOption(newValue)

		if (enableRemoteSearch && !loading) {
			//@ts-ignore
			findMany({
				...defaultQuery,
				keywords: newValue,
			})
		}
	}

	const formatResources = (resources) => {
		return resources.map((resource) => ({
			label: resource[displayField],
			value: resource[valueParam],
			image: imageField ? get(resource, imageField) : null,
		}))
	}

	const findOption = async (value) => {
		if (!value) return null
		let resource = resources.find((resource) => resource[displayField] == value)
		if (resource) {
			setOption({
				label: resource[displayField],
				value: resource[valueParam],
			})
		}
	}

	useEffect(() => {
		if (resources) {
			setOptions([...formatResources(resources), ...defaultOptions])
		}
	}, [resources])

	useEffect(() => {
		if (value && resources?.length > 0) {
			let resource = resources.find((resource) => resource[valueParam] == value)
			if (resource) {
				setOption({
					label: resource[displayField],
					value: resource[valueParam],
				})
			}
		}
	}, [value, resources])

	useEffect(() => {
		if (url) {
			//@ts-ignore
			findMany({
				...defaultQuery,
				per_page: 100,
			})
		}
	}, [url])

	return (
		<>
			<Autosuggest
				errors={errors}
				loading={delayedLoading}
				direction={direction}
				label={label}
				name={name}
				value={option}
				options={options}
				placeholder={placeholder}
				handleChange={handleChange}
				handleInputChange={handleInputChange}
				handleClear={handleClear}
				enableClear={enableClear}
			/>
		</>
	)
}

export default RemoteAutosuggest
