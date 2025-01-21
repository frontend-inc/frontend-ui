'use client'

import React from 'react'
import { Typography } from '../..'
import { SocialIcon } from 'react-social-icons'
import { cn } from '@nextui-org/react'

type SocialLinkType = {
	variant?: 'fill' | 'outline' | 'default'
	provider: string
	title: string
	subtitle: string
	url?: string
}

const SocialLink: React.FC<SocialLinkType> = (props) => {
	const { variant = 'fill', title, subtitle, provider, url } = props

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
		<div className="w-full">
			<button
				//@ts-ignore
				onClick={handleClick}
				className={cn(
					'w-full h-full p-4 flex justify-between items-center rounded-xl focus:outline-none hover:bg-content2',
					variant === 'fill' && 'bg-content1 hover:bg-content2',
					'border-2 border-divider rounded-xl'
				)}
			>
				<div className=" flex flex-row space-x-6 items-center">
					<SocialIcon
						network={provider}
						style={{
							height: 32,
							width: 32,
						}}
					/>
					<div className="flex flex-col space-y-0">
						<Typography variant="subtitle2">{title}</Typography>
						<Typography variant="body2" className="text-foreground/70">
							{subtitle}
						</Typography>
					</div>
				</div>
				<i className="ri-arrow-right-up-line text-xl rotate-[45] text-foreground/70" />
			</button>
		</div>
	)
}

export default SocialLink
