'use client'

import React, { useEffect, useState } from 'react'
import { useResource } from 'frontend-js'
import { Autosuggest } from '../..'
import { useError } from '../../../hooks'
import { OptionType, QueryParamsType, SyntheticEventType } from '../../../types'
import { uniq, get } from 'lodash'

export type RemoteAutosuggestProps = {
	errors?: any
	value?: any
	label?: string
	name: string
	url: string
	handleChange: (event: SyntheticEventType) => void
	handleClear?: () => void
	displayField?: string
	valueParam?: string
	placeholder?: string
	imageField?: string
	direction?: 'row' | 'column'
	defaultQuery?: QueryParamsType
	defaultOptions?: {
		label: string
		value: string
	}[]
	enableRemoteSearch?: boolean
	enableClear?: boolean
	perPage?: number
}

const RemoteAutosuggest: React.FC<RemoteAutosuggestProps> = (props) => {
	const {
		errors,
		value,
		label,
		name,
		url,
		displayField,
		handleChange,
		valueParam = 'id',
		placeholder = 'Search',
		defaultQuery = {},
		defaultOptions = [],
		enableRemoteSearch = false,
		enableClear = false,
		perPage = 100,
	} = props

	const { error, clearError } = useError({
		errors: errors,
		name: name,
	})

  const { loading, resources, findOne, findMany } = useResource({
		url: url,
		name: name,
	})

	const handleInputChange = (newValue) => {
		if (error) clearError()
		if (enableRemoteSearch && !loading) {
			//@ts-ignore
			findMany({
				...defaultQuery,
				keywords: newValue,
			})
		}
	}

	const formatResources = (resources) => {
		if (!displayField) return []
		return resources.map((resource) => ({
			label: get(resource, displayField),
			value: get(resource, valueParam),
		}))
	}

	const findOption = async (value) => {
		if (!value) return null
		await findOne(value)		
	}

	useEffect(() => {
		if (value && url) {
			findOption(value)
		}
	}, [value, url])


	useEffect(() => {
		if (url) {
			//@ts-ignore
			findMany({
				...defaultQuery,
				per_page: perPage,
			})
		}
	}, [url])

  const options = formatResources(resources)  

	if (!options || options?.length == 0) return null
	return (
		<Autosuggest
			label={label}
			name={name}
			value={value}
			options={options}
			placeholder={placeholder}
			handleChange={handleChange}
			handleInputChange={handleInputChange}
			enableClear={enableClear}
		/>
	)
}

export default RemoteAutosuggest
