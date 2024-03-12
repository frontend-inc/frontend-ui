import React from 'react'
import { Stack } from '@mui/material'
import { Icon, AccordionItem, Placeholder } from '../..'
import { Typography } from '@mui/material'

type AccordionProps = {
	title?: string
	items?: {
		title: string
		description: string
		image?: string
	}[]
	editing?: boolean
}

const Accordion: React.FC<AccordionProps> = (props) => {
	const { title, items = [] } = props

	return (
		<Stack spacing={1} sx={sx.root}>
			<Stack direction="row" justifyContent={'space-between'} spacing={1}>
				<Typography variant="h6" sx={sx.title} color="textPrimary">
					{title}
				</Typography>
			</Stack>
			{items?.map((item, i) => (
				<AccordionItem
					key={i}
					title={item?.title}
					description={item?.description}
					image={item?.image}
				/>
			))}
			{items?.length === 0 && (
				<Placeholder
					icon={<Icon name="Search" />}
					title="No content"
					description="Your content will appear here."
				/>
			)}
		</Stack>
	)
}

export default Accordion

const sx = {
	root: {
		width: '100%',
	},
	title: {
		width: '100%',
		textAlign: 'center',
		mb: 2,
	},
	accordionSummary: {},
}
