import React from 'react'
import { useResourceContext } from 'frontend-js'
import { SYSTEM_FIELDS } from '../../constants/index'

const useForms = () => {
	const { setResource } = useResourceContext({})

	const handleDataChange = (ev) => {
		const { name } = ev.target
		const value =
			ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value

		if (!SYSTEM_FIELDS.includes(name)) {
			setResource((prev) => ({
				...prev,
				data: {
					...prev.data,
					[name]: value,
				},
			}))
		} else {
			setResource((prev) => ({
				...prev,
				[name]: value,
			}))
		}
	}

	return {
		handleDataChange,
	}
}

export default useForms
