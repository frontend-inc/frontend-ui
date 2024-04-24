import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useResource } from 'frontend-js'
import { Autosuggest } from '../..'
import { ErrorText } from '../..'
import { useError } from '../../../hooks'
import { OptionType, QueryParamsType, SyntheticEventType } from '../../../types'

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

	const { 
    delayedLoading, 
    resources, 
    findOne,
    findMany 
  } = useResource({
		url: url,
		name: name,
	})

  const [option, setOption] = useState<OptionalType>(null)
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
		let resource = resources.find((resource) => resource[displayField] == value)
    if(resource){    
      setOption({
        label: resource[displayField],
        value: resource[valueParam]
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
      if(resource){
        setOption({
          label: resource[displayField],
          value: resource[valueParam]
        })
      }
    }
	}, [value, resources])

	useEffect(() => {
		if (url) {
			//@ts-ignore
			findMany({ 
        ...defaultQuery,
        per_page: 100
      })
		}
	}, [url])

	return (
		<>
			<Autosuggest
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
			/>
			<ErrorText error={error} />
		</>
	)
}

export default RemoteAutosuggest
