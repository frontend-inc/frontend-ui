import React, { useState } from 'react'
import { TextInput } from '../../../components'
import { InputPropsType } from '../../../types'

type JSONInputProps = InputPropsType

const JSONInput: React.FC<JSONInputProps> = (props) => {
	const { errors, value, name, label, info, placeholder, handleChange } = props

	const defaultValue = value ? JSON.stringify(value, null, 2) : '{}'
	const [jsonValue, setJsonValue] = useState(defaultValue)
	const [jsonError, setJsonError] = useState({})

	const isValidJSON = (str: string) => {
		try {
			if (
				JSON.parse(str) &&
				(str === '{}' || Object.keys(JSON.parse(str)).length > 0)
			) {
				return true
			} else {
				setJsonError({
					[name]: 'Invalid JSON',
				})
				return false
			}
		} catch (e) {
			setJsonError({
				[name]: 'Invalid JSON',
			})
			return false
		}
	}

	const handleJSONChange = (ev) => {
		setJsonError({})
		const { value } = ev.target
		if (isValidJSON(value)) {
			handleChange({
				target: {
					name,
					value: JSON.parse(value),
				},
			})
		}
		setJsonValue(value)
	}

	const prettyJson = (json) => {
		if (json.constructor == Object) {
			return JSON.stringify(json, null, 2)
		} else {
			return json
		}
	}

	return (
		<TextInput
			errors={{
				...errors,
				...jsonError,
			}}
			multiline
			rows={4}
			value={prettyJson(jsonValue)}
			placeholder={placeholder}
			handleChange={handleJSONChange}
			name={name}
			label={label}
      info={info}
		/>
	)
}

export default JSONInput
