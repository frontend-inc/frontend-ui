import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../../../shadcn/ui/accordion'
import { cn } from '../../../shadcn/lib/utils'
import { Icon } from '../..'

type AccordionItemProps = {
	primary: string
	secondary: React.ReactNode
	image?: string
	icon?: string
	startIcon?: string
	disablePadding?: boolean
}

const AccordionItemComponent: React.FC<AccordionItemProps> = (props) => {
	const {
		primary,
		secondary,
		startIcon,
		icon = 'Plus',
		disablePadding,
		image,
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
					<div className="flex items-center space-x-1">
						<span className="text-lg font-medium">{primary}</span>
					</div>
				</AccordionTrigger>
				<AccordionContent className="bg-background">
					<div className="flex space-x-2">{secondary}</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}

export default AccordionItemComponent
