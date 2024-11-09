'use client'

import React from 'react'
import { Typography } from '../../core'
import { Heading } from '../..'
import { TypographyVariantsType } from '../../../types'

export type TextProps = {
	title: string
	description: string
	label?: string
	textAlign?: 'center' | 'left'
	size?: 'sm' | 'md' | 'lg' | 'xl'
	html?: boolean
}

// Call To Action
const Text: React.FC<TextProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		size = 'lg',
		html = false,
	} = props || {}

	return (
		<div className="container max-w-screen-lg mx-auto">
			<div className="flex flex-col space-y-2">
				<Heading
					label={label}
					title={title}
					textAlign={textAlign}
					size={size}
				/>
				{html ? (
					<Typography variant="body1">
						<div dangerouslySetInnerHTML={{ __html: description }} />
					</Typography>
				) : (
					<Typography variant="body1">{description}</Typography>
				)}
			</div>
		</div>
	)
}

export default Text
