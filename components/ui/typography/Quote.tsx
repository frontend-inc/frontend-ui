'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { RiDoubleQuotesL } from '@remixicon/react'

export type QuoteProps = {
	text: string
	author?: string
	className?: string
}

const Quote: React.FC<QuoteProps> = (props) => {
	const { text, author, className } = props || {}

	return (
		<figure className={cn('flex space-x-4', className)}>
			<div className="flex flex-col space-y-4 pl-6 border-l-4 border-border">
				<blockquote>
					<p className="text-lg italic font-medium text-muted-foreground leading-loose">
						{text}
					</p>
				</blockquote>
				{author && (
					<figcaption className="flex justify-center mt-6 space-x-3">
						<div className="flex divide-x-2 divide-border">
							<cite className="pr-3 font-medium text-muted-foreground">
								&mdash; {author}
							</cite>
						</div>
					</figcaption>
				)}
			</div>
		</figure>
	)
}

export default Quote
