'use client'

import React, { useState } from 'react'
import { useApp } from '..'
import { useRouter } from 'next/navigation'
import { ActionType } from '../../types'
import { useLoadingWrapper } from '.'
import copy from 'copy-to-clipboard'
import { useMediaQuery } from 'react-responsive'
import { toast } from 'sonner'

type UseButtonParams = {
	action: ActionType
	path?: string
	url?: string
	src?: string
}

const useButtons = (params: UseButtonParams) => {
	const { action, src, path, url } = params || {}

	const isMobile = useMediaQuery({ maxWidth: 640 })

	const { loading, data, errors } = useLoadingWrapper()

	const [openVideo, setOpenVideo] = useState(false)
	const [openImage, setOpenImage] = useState(false)
	const [openShare, setOpenShare] = useState(false)

	const router = useRouter()
	const { clientUrl } = useApp()

	const handleClick = async () => {
		switch (action) {
			case 'page':
				router.push(`${clientUrl}${path}`)
				break
			case 'url':
				if (url) {
					window.open(url, '_blank')
				}
				break
			case 'copy':
				if (url) {
					copy(url)
					toast('Copied to clipboard')
				}
				break
			case 'email':
				if (url) {
					window.location.href = `mailto:${url}`
				}
				break
			case 'phone':
				if (url) {
					window.location.href = `tel:${url}`
				}
				break
			case 'sms':
				if (url) {
					window.location.href = `sms:${url}`
				}
				break
			case 'whatsapp':
				if (url) {
					window.open(`https://wa.me/${url}`, '_blank')
				}
				break
			case 'download':
				if (url) {
					window.open(url, '_blank')
				}
				break
			case 'video':
				if (url) {
					setOpenVideo(true)
				}
				break
			case 'image':
				if (url) {
					setOpenImage(true)
				}
				break
			case 'share':
				if (isMobile) {
					const title = window.document.title
					const description = window.document.querySelector(
						'meta[name="description"]'
					)
					navigator.share({
						title: title,
						text: `Check this out: ${description}`,
						url: window.location.href,
					})
				} else {
					setOpenShare(true)
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
		openVideo,
		openImage,
		openShare,
		setOpenVideo,
		setOpenImage,
		setOpenShare,
		handleClick,
	}
}

export default useButtons
