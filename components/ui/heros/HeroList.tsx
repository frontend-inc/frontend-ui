'use client'

import React from 'react'
import {
	AvatarImage,
	Image,
	Heading,
	Typography,
	YouTubeEmbed,
	SoundcloudEmbed,
	VimeoEmbed,
	GoogleMap,
} from '../../../components'
import { ButtonType } from '../../../types'
import { Badge } from 'frontend-shadcn'

export type HeroProps = {
	variant?: 'circular' | 'square'
	textAlign?: 'left' | 'center'
	image: string
	label?: string
	category?: string
	title: string
	subtitle?: string
	description?: string
	html?: string
	startsAt?: string
	endsAt?: string
	publishedAt?: string
	location?: string
	lat?: number
	lng?: number
	tags?: string[]
	youtubeSrc?: string
	vimeoSrc?: string
	soundcloudSrc?: string
	shopifyProduct?: string
	user?: {
		name: string
		avatar: {
			url: string
		}
	}
	style?: 'card' | 'cover' | 'list' | 'avatar' | 'spotlight'
	buttons?: ButtonType[]
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode
	disableImage?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	objectFit?: 'cover' | 'contain'
}

const HeroList: React.FC<HeroProps> = (props) => {
	const {
		variant,
		image,
		label,
		title,
		subtitle,
		textAlign = 'center',
		location,
		lat,
		lng,
		startsAt,
		endsAt,
		publishedAt,
		html,
		description,
		youtubeSrc,
		soundcloudSrc,
		vimeoSrc,
		tags = [],
		actions,
		secondaryAction,
		disableImage,
		enableGradient,
		enableOverlay,
	} = props || {}

	return (
		<div className="container mx-auto max-w-screen-lg">
			<div className="flex flex-col w-full justify-start items-center space-y-6">
				<div className="w-full max-w-screen-md justify-start items-center space-y-3">
					<Heading
						label={label}
						title={title}
						subtitle={subtitle}
						textAlign={textAlign}
						size="xl"
					/>
					{(startsAt || endsAt) && (
						<Typography
							variant="subtitle2"
							className="text-foreground/70"
							textAlign={textAlign}
						>
							{startsAt} - {endsAt}
						</Typography>
					)}
					{publishedAt && (
						<Typography
							variant="subtitle2"
							className="text-foreground/70"
							textAlign={textAlign}
						>
							{publishedAt}
						</Typography>
					)}
					{location && (
						<Typography
							variant="subtitle2"
							className="text-foreground/70"
							textAlign={textAlign}
						>
							{location}
						</Typography>
					)}
					{secondaryAction && secondaryAction}
				</div>
				{!disableImage && (
					<div className="w-full flex items-center justify-center rounded-lg">
						{variant !== 'circular' ? (
							<div className="w-full py-10">
								<Image
									aspectRatio={2.0}
									src={image}
									alt={title}
									label={label}
									enableGradient={enableGradient}
									enableOverlay={enableOverlay}
								/>
							</div>
						) : (
							<AvatarImage
								src={image}
								alt={title}
								size={160}
								enableGradient={enableGradient}
								enableOverlay={enableOverlay}
							/>
						)}
					</div>
				)}
				{youtubeSrc && <YouTubeEmbed src={youtubeSrc} />}
				{soundcloudSrc && <SoundcloudEmbed src={soundcloudSrc} />}
				{vimeoSrc && <VimeoEmbed src={vimeoSrc} />}
				{actions}
				<div className="w-full sm:max-w-screen-md flex flex-col space-y-6">
					{description && (
						<Typography variant="subtitle2" className="text-foreground/70">
							{description}
						</Typography>
					)}
					{html && (
						<div className="w-full prose">
							<div dangerouslySetInnerHTML={{ __html: html }} />
						</div>
					)}
					{lat && lng && (
						<div className="w-full py-4 flex flex-col space-y-2">
							<GoogleMap label={title} lat={lat} lng={lng} />
							<span className="text-sm text-foreground/70 italic">
								<strong>Location: </strong> {location}
							</span>
						</div>
					)}
					{tags?.length > 0 && (
						<div className="w-full flex flex-wrap gap-3">
							{tags.map((tag, index) => (
								<Badge
									key={index}
									variant="outline"
									className="px-3 py-1 text-foreground/70"
								>
									{tag}
								</Badge>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default HeroList
