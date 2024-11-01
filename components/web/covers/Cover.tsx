'use client'

import React from 'react'
import { Typography, Button } from '../../../components'
import { Image } from '../..'
import { useRouter } from 'next/navigation'
import { useApp, useNavigate } from '../../../hooks'
import { cn } from 'frontend-shadcn'

export type CoverProps = {
	editing?: boolean
	title?: string | React.ReactNode
	description?: string
	buttonText?: string
	textVariant?: 'h1' | 'h2' | 'h3'
	image: string
	height?: number
	width?: number
	alignItems?: 'flex-start' | 'center' | 'flex-end'
	alt?: string
	handleClick?: () => void
	enableGradient?: boolean
	enableOverlay?: boolean
	opacity?: number
	path?: string
  actions?: React.ReactNode
}

const Cover: React.FC<CoverProps> = (props) => {

	const {
		title,
		description,
		textVariant = 'h3',
		handleClick,
		image,
		height = 400,
		alt = 'image',
		enableGradient = false,
		enableOverlay = false,
		alignItems = 'center',
		buttonText,
    actions,
		path,
	} = props

  const onClick = useNavigate({
    handleClick 
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
						'flex flex-col',
						alignItems === 'flex-start' && 'items-start',
						alignItems === 'center' && 'items-center',
						alignItems === 'flex-end' && 'items-end',
						'space-y-4'
					)}
				>
					{title && (
						<Typography
              className="text-foreground"
							variant={textVariant}
							textAlign={alignItems === 'center' ? 'center' : 'left'}
						>
							{title}
						</Typography>
					)}
					{description && (
						<Typography
              className="text-foreground"
							variant="subtitle2"
							textAlign={alignItems === 'center' ? 'center' : 'left'}
						>
							{description}
						</Typography>
					)}
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
