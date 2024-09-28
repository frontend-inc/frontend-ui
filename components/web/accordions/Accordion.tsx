import React from 'react'
import { Stack } from '@mui/material'
import {
	Container,
	AccordionItem,
	Placeholder,
	Text,
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
			<Stack spacing={1} sx={sx.root}>
				{items?.map((item, i) => (
					<AccordionItem
						key={i}
						primary={item?.title}
						secondary={
							<Text variant="body1" color="text.primary">
								{item?.description}
							</Text>
						}
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

const sx = {
	root: {
		width: '100%',
		borderRadius: 0,
	},
	title: {
		width: '100%',
		textAlign: 'center',
		mb: 2,
	},
	accordionSummary: {},
}
