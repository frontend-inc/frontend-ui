'use client'

import React, { useState } from 'react'
import { toast } from 'sonner'
import { Modal, SocialIcon } from '../..'
import { Typography } from '../../../components'

type ShareButtonProps = {
	url: string
	open: boolean
	handleClose: () => void
}

const SOCIAL_PROVIDERS = [
	{ label: 'Share to Instagram', value: 'instagram' },
	{ label: 'Share to Facebook', value: 'facebook' },
	{ label: 'Share to Twitter', value: 'twitter' },
	{ label: 'Share to LinkedIn', value: 'linkedin' },
	{ label: 'Send by Email', value: 'email' },
]

export default function ShareButton({
	open,
	handleClose,
	url,
}: ShareButtonProps) {
	const handleShareClick = (platform: string) => {
		const shareUrl = getShareUrl(platform, url)
		if (platform === 'copy') {
			toast('Share link copied to clipboard')
		} else {
			window.open(shareUrl, '_blank')
		}
		handleClose()
	}

	const getShareUrl = (platform: string, url: string) => {
		switch (platform) {
			case 'instagram':
				return `https://www.instagram.com/?url=${url}`
			case 'facebook':
				return `https://www.facebook.com/sharer/sharer.php?u=${url}`
			case 'twitter':
				return `https://twitter.com/intent/tweet?url=${url}`
			case 'pinterest':
				return `https://pinterest.com/pin/create/button/?url=${url}`
			case 'linkedin':
				return `https://www.linkedin.com/shareArticle?mini=true&url=${url}`
			case 'email':
				return `mailto:?subject=Check out this product&body=${url}`
			default:
				return ''
		}
	}

	return (
		<Modal open={open} handleClose={handleClose}>
			<div className="p-4">
				<div className="space-y-6">
					<div className="w-full">
						<Typography variant="subtitle1" textAlign="center">
							Share to social media
						</Typography>
						<Typography variant="body2" textAlign="center">
							Select your social media platform
						</Typography>
					</div>
					<div className="flex justify-center items-center space-x-2">
						{SOCIAL_PROVIDERS.map((provider, index) => (
							<SocialIcon
								key={index}
								provider={provider.value}
								handleClick={() => handleShareClick(provider.value)}
								size={36}
							/>
						))}
					</div>
				</div>
			</div>
		</Modal>
	)
}
