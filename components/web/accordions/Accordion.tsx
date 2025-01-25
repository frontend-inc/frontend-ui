'use client'

import React from 'react'
import { Empty, Typography } from '../..'
import { Accordion as NextAccordion, AccordionItem } from '@nextui-org/react'
import { cn } from '@nextui-org/react'

export type AccordionProps = {
	variant?: 'light' | 'shadow' | 'bordered' | 'splitted'
	items?: {
		title: string
		subtitle: string
		image?: string
	}[]
  className?: string
}

const Accordion: React.FC<AccordionProps> = (props) => {
	const { variant, className, items = [] } = props

	return (
		<div className={ cn('w-full p-4', className) }>
			<NextAccordion variant={variant} selectionMode="multiple">
				{items?.map((item, i) => (
					<AccordionItem key={i} aria-label={item?.title} title={item?.title}>
						<Typography variant="subtitle2" className="pb-2">
							{item?.subtitle}
						</Typography>
					</AccordionItem>
				))}
			</NextAccordion>
			{items?.length == 0 && (
				<Empty
					icon="ri-search-line"
					title="No content"
					description="Your content will appear here."
				/>
			)}
		</div>
	)
}

export default Accordion
