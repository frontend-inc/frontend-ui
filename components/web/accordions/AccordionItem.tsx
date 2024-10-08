import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../../../shadcn/ui/accordion'
import { Typography } from '../../../tailwind'
import { cn } from '../../../shadcn/lib/utils'

type AccordionItemProps = {
	primary: string
	secondary: React.ReactNode
	disablePadding?: boolean
}

const AccordionItemComponent: React.FC<AccordionItemProps> = (props) => {
	const {
		primary,
		secondary,
		disablePadding,
	} = props

	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem
				value="item"
				className={cn(
					'bg-background border-divider my-0',
					disablePadding ? 'py-0' : 'py-1'
				)}
			>
				<AccordionTrigger className="hover:no-underline">
          <Typography variant="subtitle1">
            {primary}
          </Typography>					
				</AccordionTrigger>
				<AccordionContent className="bg-background">
        <Typography variant="body1" className='text-muted-foreground'>{secondary}</Typography>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}

export default AccordionItemComponent
