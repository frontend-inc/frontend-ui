'use client'

import React from 'react'
import { AccordionItem, Placeholder } from '../../../components'

export type AccordionProps = {
	items?: {
		title: string
		subtitle: string
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
						title={item?.title}
						subtitle={item?.subtitle}
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
