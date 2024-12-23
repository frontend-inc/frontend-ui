'use client'

import React from 'react'
import { Empty } from '../../../components'
import AccordionItem from './AccordionItem'
import { cn, Accordion as ShadcnAccordion } from 'frontend-shadcn'

export type AccordionProps = {
	variant?: 'default' | 'fill' | 'outline'
	items?: {
		title: string
		subtitle: string
		image?: string
	}[]
}

const Accordion: React.FC<AccordionProps> = (props) => {
	const { variant, items = [] } = props

	return (
		<div className={cn(
      "container mx-auto max-w-screen-lg",
      )}>
			<div className="flex flex-col">
				{items?.map((item, i) => (
					<AccordionItem
						key={i}
						title={item?.title}
						subtitle={item?.subtitle}
					/>
				))}
				{items?.length == 0 && (
					<Empty
						icon="ri-search-line"
						title="No content"
						description="Your content will appear here."
					/>
				)}
			</div>
		</div>
	)
}

export default Accordion
