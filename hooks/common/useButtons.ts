import React, { useContext } from 'react'
import { AppContext } from '../../context'
import { useRouter } from 'next/router'
import { ButtonType } from '../../types'
import { useLoadingWrapper } from '.'
import copy from 'copy-to-clipboard'
import { useAlerts } from '..'
import { useAuth } from 'frontend-js'
import { get } from 'lodash'

type UseButtonParams = {
	action: ButtonType
	resource?: any
}

const useButtons = (params: UseButtonParams) => {
	const { loading, data, errors, loadingWrapper } = useLoadingWrapper()

	const { action, resource } = params || {}

	const { showAlertSuccess } = useAlerts()

	const router = useRouter()
	const { clientUrl } = useContext(AppContext)
	const { currentUser } = useAuth()

	const handleClick = async (ev) => {
		let value
		if (action.fieldName) {
			value = get(resource, action.fieldName)
		}
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
			case 'stripe_payment_link':
				if (value) {
					let url = `${value}?prefilled_email=${currentUser?.email}&client_reference_id=${currentUser?.email}`
					window.open(url, '_blank')
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

export default useButtons
