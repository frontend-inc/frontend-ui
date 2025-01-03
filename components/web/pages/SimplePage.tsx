'use client'

import React from 'react'
import { Typography } from '../../../components'

type SimplePageProps = {
	title: string
	body: string
	subtitle?: string
	html?: boolean
	disablePadding?: boolean
}

const SimplePage: React.FC<SimplePageProps> = (props) => {
	const {
		title,
		subtitle,
		body,
		html = false,
		disablePadding = false,
	} = props || {}

	return (
		<div
			className={`w-full flex justify-center items-start ${
				disablePadding ? '' : 'p-6'
			}`}
		>
			<div className="w-full max-w-3xl space-y-4">
				<Typography variant="h2" className="text-foreground text-center">
					{title}
				</Typography>
				<Typography variant="caption" className="block text-center">
					{subtitle}
				</Typography>
				{html ? (
					<div className="prose" dangerouslySetInnerHTML={{ __html: body }} />
				) : (
					<Typography variant="body1" className="whitespace-pre-line">
						{body}
					</Typography>
				)}
			</div>
		</div>
	)
}

export default SimplePage
