'use client'

import React from 'react'
import { useApp } from '..'
import { useRouter } from 'next/navigation'
import { ActionType } from '../../types'
import { useLoadingWrapper } from '.'
import copy from 'copy-to-clipboard'
import { useAlerts } from '..'

type UseButtonParams = {
	action: ActionType
	path?: string
	url?: string
	value?: any
}

const useButtons = (params: UseButtonParams) => {
	const { action, value, path, url } = params || {}

	const { loading, data, errors } = useLoadingWrapper()

	const { showAlertSuccess } = useAlerts()

	const router = useRouter()
	const { clientUrl } = useApp()

	const handleClick = async (ev) => {
		switch (action) {
			case 'page':
				router.push(`${clientUrl}${path}`)
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
				if (url) {
					window.open(url, '_blank')
				}
				break
			case 'url':
				if (value) {
					window.open(value, '_blank')
				}
				break
			case 'download':
				if (path) {
					window.open(path, '_blank')
				}
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
