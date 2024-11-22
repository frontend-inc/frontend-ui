'use client'

import React from 'react'
import { Typography } from '../../../components'
import { Avatar } from '../../../components'

type TestimonialProps = {
	text: string
	author: string
	image?: string
	size?: 'small' | 'large'
}

const TestimonialCard: React.FC<TestimonialProps> = (props) => {
	const { text, author, image = '' } = props || {}

	return (
		<div className={'p-4 min-h-[240px]'}>
			<div className="flex flex-col space-y-3 justify-between h-full">
				<div>
					{text && (
						<Typography
							variant="subtitle1"
							className="font-normal italic leading-loose"
						>
							{text}
						</Typography>
					)}
				</div>
				<div className="flex flex-row space-x-2 items-center">
					<Avatar src={image} variant="circular" />
					<Typography variant="body2" className="text-muted-foreground">
						- {author}
					</Typography>
				</div>
			</div>
		</div>
	)
}

export default TestimonialCard
