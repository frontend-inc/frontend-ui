'use client'

import React from 'react'
import { AccordionItem, Placeholder } from '../../../components'

export type AccordionProps = {
	items?: {
		title: string
		description: string
		image?: string
	}[]
}

const Accordion: React.FC<AccordionProps> = (props) => {
	const { items = [] } = props

	return (
		<div className="container mx-auto max-w-screen-lg">
			<div className="flex flex-col">
				{items?.map((item, i) => (
					<AccordionItem
						key={i}
						primary={item?.title}
						secondary={item?.description}
					/>
				))}
				{items?.length == 0 && (
					<Placeholder
						icon="Search"
						title="No content"
						description="Your content will appear here."
					/>
				)}
			</div>
		</div>
	)
}

export default Accordion
