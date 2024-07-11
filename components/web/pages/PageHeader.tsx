import React from 'react'
import { Stack, Box } from '@mui/material'
import { ActionType } from '../../../types'
import { Heading, Actions, Breadcrumbs } from '../../../components'

export type PageHeaderProps = {
	label?: string
	title?: string
	description?: string
	links: {
		label: string
		path: string
	}[]
	maxLinks?: number
	actions: ActionType[]
	resource?: any
	enableBorder?: boolean
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
	const {
		label,
		title,
		description,
		links,
		maxLinks = 3,
		actions,
		resource,
	} = props

	return (
		<Stack sx={sx.root} direction="column" spacing={1}>
			<Breadcrumbs maxLinks={maxLinks} links={links} />
			<Stack
				direction={{
					xs: 'column',
					sm: 'row',
				}}
				spacing={1}
				sx={{
					...sx.content,
				}}
			>
				<Heading
					label={label}
					title={title}
					description={description}
					textAlign="left"
				/>
				{actions?.length > 0 && (
					<Box sx={sx.actions}>
						<Actions actions={actions} resource={resource} />
					</Box>
				)}
			</Stack>
		</Stack>
	)
}

export default PageHeader

const sx = {
	root: {
		width: '100%',
	},
	content: {
		pb: 1,
		justifyContent: 'space-between',
		width: '100%',
		borderBottom: 1,
		borderColor: 'divider',
	},
	actions: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		pb: {
			sm: 0,
			xs: 1,
		},
	},
}
