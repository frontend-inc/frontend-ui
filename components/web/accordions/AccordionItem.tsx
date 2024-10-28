'use client'

import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from 'frontend-shadcn'
import { Typography } from '../../core'
import { ChevronDown } from 'lucide-react'

type AccordionItemProps = {
	primary: string
	secondary: React.ReactNode
}

const AccordionItemComponent: React.FC<AccordionItemProps> = (props) => {
	const { primary, secondary } = props

	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item">
				<AccordionTrigger>
					<Typography variant="body1">{primary}</Typography>
				</AccordionTrigger>
				<AccordionContent>
					<Typography variant="body2" className="text-muted-foreground">
						{secondary}
					</Typography>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}

export default AccordionItemComponent
