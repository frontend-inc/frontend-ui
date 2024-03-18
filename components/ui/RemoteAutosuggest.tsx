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
		valueParam = 'id',
		placeholder = 'Search',
		defaultQuery = null,
		direction = 'column',
    defaultOptions=[]
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
    return resources.map(resource => ({
      label: resource[displayField],
      value: resource[valueParam]
    }))
  }

	const findOption = async (value) => {
		if (!value) return null    
    if(options?.length > 0){
		  let matchOption = options.find((option: OptionType) => option.value == value)    
      if(matchOption){
        setOption(matchOption)
      } 
    }    
	}

	useEffect(() => {
		if (resources || defaultOptions) {			
			setOptions([
        ...formatResources(resources),
        ...defaultOptions 
      ])
		}
	}, [resources, defaultOptions])

	useEffect(() => {
		if (value && resources && resources.length > 0) {
			findOption(value)
		}
	}, [value, resources, defaultOptions, url])

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
