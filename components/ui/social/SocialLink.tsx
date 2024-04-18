import React, { useContext, useEffect, useState } from 'react'
import { IconButton } from '@mui/material'
import { SocialIcon } from 'react-social-icons'
import { useTheme } from '@mui/material/styles'
import { ThemeContext } from '../../../context'

type SocialLinkProps = {
	provider:
		| 'facebook'
		| 'instagram'
		| 'linkedin'
		| 'twitter'
		| 'youtube'
		| 'tiktok'
		| 'blog'
	url: string
}

const SocialLink: React.FC<SocialLinkProps> = (props) => {
	const { provider, url } = props || {}

	const formatUrl = (username: string) => {
		switch (provider) {
			case 'facebook':
				return `https://www.facebook.com/${url}`
				break
			case 'instagram':
				return `https://www.instagram.com/${url}`
				break
			case 'linkedin':
				return `https://www.linkedin.com/in/${url}`
				break
			case 'twitter':
				return `https://www.twitter.com/${url}`
				break
			case 'youtube':
				return `https://www.youtube.com/${url}`
				break
			case 'tiktok':
				return `https://www.tiktok.com/${url}`
				break
			default:
				break
		}
	}

	const handleClick = () => {
		if (url.includes('http') || url.includes('www')) {
			window.open(url, '_blank')
			return
		} else {
			window.open(formatUrl(url), '_blank')
		}
	}

	const [bgColor, setBgColor] = useState('black')
	const { theme } = useContext(ThemeContext)

	useEffect(() => {
		if (theme) {
			setBgColor('#222222')
		}
	}, [theme])

	return (
		<IconButton size="small" onClick={handleClick}>
			<SocialIcon network={ provider } bgColor={bgColor} style={styles} />			
		</IconButton>
	)
}

export default SocialLink

const styles = {
	height: 32,
	width: 32,
}
