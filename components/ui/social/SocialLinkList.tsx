'use client'

import React from 'react'
import { Empty } from '../..'
import { BlurFade } from '../..'
import { Typography } from '../..'
import { SocialIcon } from '../../../components'
import { cn } from '@nextui-org/react'

type SocialLinkListType = {
  variant?: 'fill' | 'outline' | 'default'
  provider: string
	title: string
	subtitle: string	
	url?: string
}

export type SocialLinkListProps = {
	variant?: 'fill' | 'outline' | 'default'
	items: SocialLinkListType[]
}

const SocialLinkListItem: React.FC<SocialLinkListType> = (props) => {
	const { variant, title, subtitle, provider, url } = props

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
		<li className="w-full">
			<button
				//@ts-ignore
				onClick={handleClick}
				className={cn(
					'w-full flex justify-between items-center rounded-xl p-4 focus:outline-none hover:bg-content2',
					variant === 'fill' && 'bg-content1 hover:bg-content2',
					variant === 'outline' && 'border border-divider rounded-lg'
				)}
			>
				<div className=" flex flex-row space-x-6 items-center">
          <SocialIcon 
            provider={provider}
            
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
		</li>
	)
}


const SocialLinkList: React.FC<SocialLinkListProps> = (props) => {
	const { variant, items } = props || {}

	return (
		<div className="w-full justify-center flex flow-row">
			<div className="container mx-auto max-w-screen-2xl">
				<ul className="list-none w-full flex flex-col space-y-2 py-2">
					{items?.map((item, idx) => (
						<BlurFade delay={0.25 + idx * 0.05} key={idx}>
							<SocialLinkListItem {...item} variant={variant} />
						</BlurFade>
					))}
				</ul>
				{items?.length == 0 && (
					<Empty
						icon="ri-instagram-fill"
						title="No social media links"
						description="Your social media links will appear here."
					/>
				)}
			</div>
		</div>
	)
}

export default SocialLinkList
