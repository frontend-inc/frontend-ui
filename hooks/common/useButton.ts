'use client'

import React, { useState, useEffect } from 'react'
import { useApp } from '..'
import { useRouter } from 'next/navigation'
import { ActionType } from '../../types'
import { useLoadingWrapper } from '.'
import copy from 'copy-to-clipboard'
import { useAlerts } from '..'
import { useMediaQuery } from 'react-responsive'

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

	const { showAlertSuccess } = useAlerts()

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
				if (src) {
					copy(src)
					showAlertSuccess('Copied to clipboard')
				}
				break
			case 'email':
				if (src) {
					window.location.href = `mailto:${src}`
				}
				break
			case 'phone':
				if (src) {
					window.location.href = `tel:${src}`
				}
				break
			case 'sms':
				if (src) {
					window.location.href = `sms:${src}`
				}
				break
      case 'whatsapp':
        if (src) {
          window.open(`https://wa.me/${src}`, '_blank')
        }
        break
			case 'download':
				if(src){
          window.open(src, '_blank')
        }
				break
      case 'video':
        if (src) {
          setOpenVideo(true)
        }
        break
      case 'image':
        if (src) {
          setOpenImage(true)
        }
        break  
      case 'share':
        if(isMobile){
          const title = window.document.title
          const description = window.document.querySelector('meta[name="description"]')
          navigator.share({
            title: title,
            text: `Check this out: ${description}`,
            url: window.location.href,
          })
        }else{
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
