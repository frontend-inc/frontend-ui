'use client'

import React from 'react'
import { Container, Heading } from '../../../components'
import { Image } from '@nextui-org/react'
import { TypographyVariantsType } from '../../../types'
import { HeadingProps } from '../../../types'

export type SpotlightListProps = HeadingProps & {
	image?: string
	textVariant?: TypographyVariantsType
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode
	enableGradient?: boolean
	enableOverlay?: boolean
	objectFit?: 'cover' | 'contain'
}

const Spotlight: React.FC<SpotlightListProps> = (props) => {
	const {
		image,
		label,
		title,
		subtitle,
		actions,
		enableGradient,
		enableOverlay,
		editable,
		handleChange,
		fontSize = 'xl',
	} = props || {}

	return (
		<div className="h-auto w-full">
			<div className="flex flex-col space-y-6 px-2 w-full items-center">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign="center"
					size={fontSize}
					editable={editable}
					handleChange={handleChange}
				/>
				{actions && actions}
				<Container maxWidth="lg">
					<Image src={image} alt={title} />
				</Container>
			</div>
		</div>
	)
}

export default Spotlight
