'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useApp } from '..'

type UseNavigateParams = {
	url?: string
	path?: string
	handleClick?: (ev?: any) => void
}

const useNavigate = (params?: UseNavigateParams) => {
	const { handleClick, path: _path, url } = params || {}

	const { clientUrl } = useApp()

	const router = useRouter()

	const onClick = (path?: string) => {
		if (handleClick) {
			handleClick()
		} else if (url) {
			window.open(url, '_blank')
		} else if (_path) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
      console.log('clientUrl', clientUrl, _path)
			router.push(`${clientUrl}/${_path}`)
		} else if (path) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
      console.log('clientUrl', clientUrl, path)
			router.push(`${clientUrl}/${path}`)
		}
	}

	return onClick
}

export default useNavigate
