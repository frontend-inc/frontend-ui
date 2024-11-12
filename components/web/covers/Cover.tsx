'use client'

import React from 'react'
import { Heading, Button } from '../../../components'
import { Image } from '../..'
import { useNavigate } from '../../../hooks'
import { cn } from 'frontend-shadcn'

export type CoverProps = {
	label?: string
	title: string
	subtitle?: string
	buttonText?: string
	image: string
	height?: number
	width?: number
	alignItems?: 'items-start' | 'center' | 'items-end'
	alt?: string
	handleClick?: () => void
	enableGradient?: boolean
	enableOverlay?: boolean
	path?: string
	actions?: React.ReactNode
}

const Cover: React.FC<CoverProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		handleClick,
		image,
		height = 400,
		alt = 'image',
		enableGradient = false,
		enableOverlay = true,
		alignItems = 'center',
		buttonText,
		actions,
		path,
	} = props

	const onClick = useNavigate({
		handleClick,
	})

	return (
		<div className={cn('dark relative w-full')}>
			<div className="hidden sm:block">
				<Image
					disableBorderRadius
					src={image}
					alt={alt}
					aspectRatio={2.5}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
				/>
			</div>
			<div className="block sm:hidden">
				<Image
					disableBorderRadius
					src={image}
					alt={alt}
					aspectRatio={1.0}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
				/>
			</div>
			<div
				className={cn(
					'flex flex-col items-center justify-center',
					height && `h-[${height}px]`,
					`absolute top-0 left-0 w-full h-full px-3 sm:px-0`
				)}
			>
				<div
					className={cn(
						'flex flex-col space-y-4',
            alignItems 
					)}
				>
					<Heading
						label={label}
						title={title}
						subtitle={subtitle}
						textAlign={alignItems === 'center' ? 'center' : 'left'}
						size="lg"
					/>
					{actions}
					{buttonText && (
						<div className="py-2">
							<Button size="lg" onClick={() => onClick(path)} variant="default">
								{buttonText}
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Cover
