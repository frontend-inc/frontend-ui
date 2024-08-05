import React, { useContext, useEffect, useState } from 'react'
import { IconButton } from '@mui/material'
//@ts-ignore
import { SocialIcon } from 'react-social-icons'

type SocialLinkProps = {
	provider: string
	url?: string
	color?: string
}

const SocialLink: React.FC<SocialLinkProps> = (props) => {
	const { provider, url, color = 'text.primary' } = props || {}

	const formatUrl = (username: string) => {
		switch (provider) {
			case 'facebook':
				return `https://www.facebook.com/${username}`
			case 'instagram':
				return `https://www.instagram.com/${username}`
			case 'linkedin':
				return `https://www.linkedin.com/in/${username}`
			case 'twitter':
				return `https://www.twitter.com/${username}`
			case 'youtube':
				return `https://www.youtube.com/${username}`
			case 'tiktok':
				return `https://www.tiktok.com/${username}`
			case 'github':
				return `https://www.github.com/${username}`
			case 'pinterest':
				return `https://www.pinterest.com/${username}`
			case 'snapchat':
				return `https://www.snapchat.com/add/${username}`
			case 'whatsapp':
				return `https://wa.me/${username}`
			case 'email':
				return `mailto:${username}`
			default:
				break
		}
	}

	const handleClick = () => {
		if (!url) return
		if (url.includes('http') || url.includes('www')) {
			window.open(url, '_blank')
			return
		} else if (provider == 'whatsapp' && url.includes('+')) {
			window.open(`https://wa.me/${url}`, '_blank')
			return
		} else if (provider == 'email') {
			window.open(`mailto:${url}`, '_blank')
			return
		} else {
			window.open(formatUrl(url), '_blank')
		}
	}

	return (
		<IconButton size="small" onClick={handleClick}>
			<SocialIcon network={provider} color={color} style={styles} />
		</IconButton>
	)
}

export default SocialLink

const styles = {
	height: 24,
	width: 24,
}
