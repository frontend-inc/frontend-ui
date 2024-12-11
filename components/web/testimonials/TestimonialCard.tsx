'use client'

import React from 'react'
import { Typography } from '../../../components'
import { Avatar } from '../../../components'
import { cn } from 'frontend-shadcn'

type TestimonialProps = {
	text: string
	author: string
	image?: string
	size?: 'small' | 'large'
	variant?: 'fill' | 'outline' | 'default'
}

const TestimonialCard: React.FC<TestimonialProps> = (props) => {
	const { text, author, image = '', variant } = props || {}

	return (
		<div
			className={cn(
				'p-3 rounded-lg min-h-[240px]',
				variant === 'fill' && 'p-6 bg-muted',
				variant === 'outline' && 'p-6 border-2 border-border'
			)}
		>
			<div className="flex flex-col space-y-3 justify-between h-full">
				<div>
					{text && (
						<Typography variant="body1" className="font-normal leading-loose">
							{text}
						</Typography>
					)}
				</div>
				<div className="flex flex-row space-x-2 items-center">
					<Avatar src={image} variant="circular" />
					<Typography variant="body2" className="text-foreground/70">
						{author}
					</Typography>
				</div>
			</div>
		</div>
	)
}

export default TestimonialCard
