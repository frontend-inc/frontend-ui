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
	enableBorder?: boolean
	secondaryAction?: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const Heading: React.FC<HeadingProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign = 'left',
		secondaryAction,
    size="sm",
    className
	} = props || {}

  const titleVariant = {
    sm: 'h4',
    md: 'h3',
    lg: 'h2',
    xl: 'h1'
  }[size] as TypographyVariantsType

  const descriptionVariant = {
    sm: 'body1',
    md: 'body1',
    lg: 'subtitle2',
    xl: 'subtitle1'
  }[size] as TypographyVariantsType

	if (!title && !description && !label) return null
	return (
		<div className={ cn("py-4 px-2 w-full flex justify-between items-center flex-col sm:flex-row", className)}>
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
						<Typography variant={titleVariant} textAlign={textAlign}>
							{title}
						</Typography>
					)}          
					{description && (
						<Typography
							variant={ descriptionVariant }              
							className="text-foreground/80"
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
