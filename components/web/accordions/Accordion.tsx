import React from 'react'
import { Stack } from '../../../tailwind'
import {
	Container,
	AccordionItem,
	Placeholder,
} from '../../../components'

export type AccordionProps = {
	items?: {
		title: string
		description: string
		image?: string
	}[]
	editing?: boolean
}

const Accordion: React.FC<AccordionProps> = (props) => {
	const { items = [] } = props

	return (
		<Container maxWidth="md">
			<Stack spacing={0}>
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
			</Stack>
		</Container>
	)
}

export default Accordion
