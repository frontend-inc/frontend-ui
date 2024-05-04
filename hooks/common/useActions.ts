import React, { useState, useContext } from 'react'
import { AppContext } from '../../context'
import { useRouter } from 'next/router'
import { ActionType } from '../../types'
import { useLoadingWrapper } from '.'
import copy from 'copy-to-clipboard'
import { useAlerts } from '../../hooks'

type UseActionParams = {
	action: ActionType
	resource?: any
}

const useActions = (params: UseActionParams) => {
	const { loading, data, errors, loadingWrapper } = useLoadingWrapper()

	const { action, resource } = params

	const { showAlertSuccess } = useAlerts()

	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

	const handleClick = async (ev) => {
		let value = resource[action?.fieldName]
		switch (action?.name) {
			case 'navigate':
				let url = `${clientUrl}${action?.path}`
				if (resource?.handle) {
					url = `${clientUrl}${action?.path}/${resource.handle}`
				}
				router.push(url)
				break
			case 'click':
				action?.onClick && action.onClick(ev)
				break
			case 'copy':
				if (value) {
					copy(value)
					showAlertSuccess('Copied to clipboard')
				}
				break
			case 'email':
				if (value) {
					window.location.href = `mailto:${value}`
				}
				break
			case 'phone':
				if (value) {
					window.location.href = `tel:${value}`
				}
				break
			case 'sms':
				if (value) {
					window.location.href = `sms:${value}`
				}
				break
			case 'url':
				if (action?.path) {
					window.open(action?.path, '_blank')
				}
				break
			case 'link':
				if (value) {
					window.open(value, '_blank')
				}
				break
			case 'download':
				if (value?.url) {
					window.open(value.url, '_blank')
				}
				break
			case 'webhook':
				await loadingWrapper(() =>
					fetch(action.url, {
						method: action?.options?.method,
						headers: action?.options?.headers,
						body: JSON.stringify({
							data: resource,
						}),
					})
				)
				break
			default:
				break
		}
	}

	return {
		loading,
		data,
		errors,
		handleClick,
	}
}

export default useActions
