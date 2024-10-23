'use client'

import React from 'react'
import { Typography } from '../../core'
import { Avatar, ExpandableText } from '../../../components'

type TestimonialProps = {
	author: string
	text: string
	rating?: number
	image?: string
	size?: 'small' | 'large'
}

const TestimonialCard: React.FC<TestimonialProps> = (props) => {
	const { author, text, image = '' } = props || {}

	return (
		<div className={'p-4 h-[320px] border border-zinc-200 rounded-lg'}>
			<div className="flex flex-col space-y-3 justify-between h-full">
				<div>
					{text && (
						<ExpandableText
							variant="subtitle1"
							className="text-muted-foreground"
							text={`"${text}"`}
						/>
					)}
				</div>
				<div className="flex flex-row space-x-2">
					<Avatar src={image} />
					<Typography variant="body2" className="text-muted-foreground">
						&mdash; {author}
					</Typography>
				</div>
			</div>
		</div>
	)
}

export default TestimonialCard
