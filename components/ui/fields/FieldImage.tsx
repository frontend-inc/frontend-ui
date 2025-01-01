'use client'

import React from 'react'
import { Image, FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'
import { cn } from '@nextui-org/react'

type FieldImageProps = FieldElementProps & {
	height?: number
	enableGradient?: boolean
	enableOverlay?: boolean
	className?: string
}

const FieldImage: React.FC<FieldImageProps> = (props) => {
	const {
		label,
		value,
		className,
		enableGradient,
		enableOverlay,
		height = 140,
	} = props
	return (
		<FieldWrapper>
			<div
				className={cn('w-full max-w-screen-md', className)}
				style={{
					width: '100%',
					height: height,
				}}
			>
				<Image
					label={label}
					alt={label}
					src={value?.url}
					height={height}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
				/>
			</div>
		</FieldWrapper>
	)
}

export default FieldImage
