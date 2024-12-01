'use client'

import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,  
} from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'
import { Typography } from '../../../components'

type AccordionItemProps = {
	title: string
	subtitle: string
  variant?: 'default' | 'fill' | 'outline'
}

const AccordionItemComponent: React.FC<AccordionItemProps> = (props) => {
	const { title, subtitle, variant } = props

	return (
			<AccordionItem value="item">
				<AccordionTrigger 
          className={cn(
            "hover:no-underline hover:bg-muted/50 px-3",
            variant === 'outline' && 'border border-muted rounded-lg',
            variant === 'fill' && 'bg-muted/50 hover:bg-muted rounded-lg',
          )}>
					<Typography variant="subtitle1">{title}</Typography>
				</AccordionTrigger>
				<AccordionContent>
					<Typography variant="body1" className="px-3 text-muted-foreground">
						{subtitle}
					</Typography>
				</AccordionContent>
			</AccordionItem>
	)
}

export default AccordionItemComponent
