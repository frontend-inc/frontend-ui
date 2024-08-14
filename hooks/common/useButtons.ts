import React, { useContext } from 'react'
import { AppContext } from '../../context'
import { useRouter } from 'next/router'
import { ButtonType, UserType } from '../../types'
import { useLoadingWrapper } from '.'
import copy from 'copy-to-clipboard'
import { useAlerts } from '..'
import { useAuth, useApi } from 'frontend-js'
import { get } from 'lodash'

type UseButtonParams = {
	button: ButtonType
	resource?: any
  user?: UserType
}

const useButtons = (params: UseButtonParams) => {
  const { button, resource, user } = params || {}

	const { loading, data, errors, loadingWrapper } = useLoadingWrapper()

  const { action_id } = button || {}

	const { showAlertSuccess } = useAlerts()

  const { api } = useApi()

	const router = useRouter()
	const { clientUrl } = useContext(AppContext)
	const { currentUser } = useAuth()

	const handleClick = async (ev) => {
		let value, url;
		if (button.fieldName) {
			value = get(resource, button.fieldName)
		}
		switch (button?.button_type) {
			case 'navigate':
				url = `${clientUrl}${button?.path}`
				router.push(url)
				break
      case 'navigate_user':
        url = `${clientUrl}${button?.path}`
        if (resource?.handle) {
          url = `${clientUrl}${button?.path}/${user.username}`
        }
        router.push(url)
        break
      case 'navigate_cms':
        url = `${clientUrl}${button?.path}`
        if (resource?.handle) {
          url = `${clientUrl}${button?.path}/${resource?.handle}`
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
      case 'click': 
        if (button?.onClick){
          button.onClick(resource)
        }
        break;
			case 'url':
				if (button?.path) {
					window.open(button?.path, '_blank')
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
			case 'action':
				await loadingWrapper(() =>
					api.post(`/api/v1/actions/${action_id}/trigger`, {
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
