'use client'

import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from 'frontend-shadcn'
import { Typography } from '../../../components'

type AccordionItemProps = {
	title: string
	subtitle: string
}

const AccordionItemComponent: React.FC<AccordionItemProps> = (props) => {
	const {title, subtitle } = props

	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item">
				<AccordionTrigger className="hover:no-underline hover:bg-muted/50 px-3">
					<Typography variant="subtitle1">{title}</Typography>
				</AccordionTrigger>
				<AccordionContent>
					<Typography variant="body1" className="px-3 text-muted-foreground">
						{subtitle}
					</Typography>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}

export default AccordionItemComponent
