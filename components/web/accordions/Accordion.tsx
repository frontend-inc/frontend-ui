'use client'

import React from 'react'
import { Empty } from '../../../components'
import AccordionItem from './AccordionItem'
import {
	Accordion as ShadcnAccordion,
} from 'frontend-shadcn'

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
		<div className="container mx-auto max-w-screen-lg">
			<div className="flex flex-col">
      <ShadcnAccordion 
        type="multiple"
        collapsible 
        className="w-full"
      >

				{items?.map((item, i) => (
					<AccordionItem
						key={i}
						title={item?.title}
						subtitle={item?.subtitle}
            variant={variant}
					/>
				))}
        </ShadcnAccordion>
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
