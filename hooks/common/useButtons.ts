import React, { useContext } from 'react'
import { AppContext } from '../../context'
import { useRouter } from 'next/router'
import { ActionType, UserType } from '../../types'
import { useLoadingWrapper } from '.'
import copy from 'copy-to-clipboard'
import { useAlerts } from '..'
import { useAuth, useApi } from 'frontend-js'

type UseButtonParams = {
	action: ActionType 
  actionId?: number 
  path?: string
  url?: string
  value?: any   
	resource?: any
  user?: UserType
}

const useButtons = (params: UseButtonParams) => {
  const { action, actionId, value, path, resource, user } = params || {}

	const { loading, data, errors, loadingWrapper } = useLoadingWrapper()

	const { showAlertSuccess } = useAlerts()

  const { api } = useApi()

	const router = useRouter()
	const { clientUrl } = useContext(AppContext)
	const { currentUser } = useAuth()

	const handleClick = async (ev) => {
		let url;
		switch (action) {
			case 'navigate':
				url = `${clientUrl}${path}`
				router.push(url)
				break
      case 'navigate_user':
        url = `${clientUrl}${path}`
        if (resource?.handle) {
          url = `${clientUrl}${path}/${user.username}`
        }
        router.push(url)
        break
      case 'navigate_cms':
        url = `${clientUrl}${path}`
        if (resource?.handle) {
          url = `${clientUrl}${path}/${resource?.handle}`
        }
        router.push(url)
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
				if (path) {
					window.open(path, '_blank')
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
				if (path) {
					window.open(path, '_blank')
				}
				break
			case 'action':
				await loadingWrapper(() =>
					api.post(`/api/v1/actions/${actionId}/trigger`, {
            app_action: {
              resource_id: resource?.id,
            }
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
