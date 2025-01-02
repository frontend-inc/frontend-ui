'use client'

import React from 'react'
import { Heading, Button } from '../../../components'
import { Image } from '../..'
import { useNavigate } from '../../../hooks'
import { cn } from '@nextui-org/react'
import { HeadingProps } from '../../../types'

export type CoverProps = HeadingProps & {
	buttonText?: string
	image: string
	height?: number
	width?: number
	alignItems?: 'items-start' | 'items-center' | 'items-end'
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
		alignItems = 'items-center',
		buttonText,
		actions,
		path,
		editable,
		handleChange,
	} = props

	const onClick = useNavigate({
		handleClick,
	})

	return (
		<div className='relative w-full'>
      <Image
        disableZoom
        disableBorderRadius
        src={image}
        alt={alt}	   
        height={height}       
        enableGradient={enableGradient}
        enableOverlay={enableOverlay}
      />
			<div
				className={cn(
					'flex flex-col items-center justify-center z-20',
					height && `h-[${height}px]`,
					`absolute top-0 left-0 w-full h-full px-3 sm:px-0`
				)}
			>
				<div className={cn('flex flex-col space-y-4 px-4', alignItems)}>
					<Heading
						label={label}
						title={title}
						subtitle={subtitle}
						textAlign={alignItems === 'items-center' ? 'center' : 'left'}
						size="lg"
						editable={editable}
						handleChange={handleChange}
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
