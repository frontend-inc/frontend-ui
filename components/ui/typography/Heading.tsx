'use client'

import React from 'react'
import { Label } from '../../../components'
import { Typography } from '../../core'
import { TypographyVariantsType } from '../../../types'
import { cn } from 'frontend-shadcn'

type HeadingProps = {
	label?: string
	title?: string
	description?: string
	textAlign?: 'left' | 'center' | 'right'
	textVariant?: TypographyVariantsType
	enableBorder?: boolean
	secondaryAction?: React.ReactNode
}

const Heading: React.FC<HeadingProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign = 'left',
		textVariant = 'h4',
		secondaryAction,
	} = props || {}

	if (!title && !description && !label) return null
	return (
		<div className="py-4 px-2 w-full flex justify-between items-center flex-col sm:flex-row">
			<div className="w-full flex flex-col justify-between">
				<div className="flex flex-col space-y-2">
					{label && (
						<div
							className={cn(
								textAlign === 'center' && 'text-center',
								textAlign === 'right' && 'text-right'
							)}
						>
							<Label label={label} />
						</div>
					)}
					{title && (
						<Typography variant={textVariant} textAlign={textAlign}>
							{title}
						</Typography>
					)}
					{description && (
						<Typography
							variant="body1"
							className="text-muted-foreground"
							textAlign={textAlign}
						>
							{description}
						</Typography>
					)}
				</div>
				{secondaryAction}
			</div>
		</div>
	)
}

export default Heading
