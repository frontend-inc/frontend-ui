import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { Actions, ActionButton } from '../..'
import { HeroProps } from './Hero'
import { flattenDocument } from 'frontend-js'
import { buildActions } from '../../../helpers'

type HeroContainerProps = HeroProps & {
	children: React.ReactNode
}

const HeroContainer: React.FC<HeroContainerProps> = (props) => {
	const { actions, resource, children, enableBorder, enableEdit, handleEdit } =
		props || {}
	const { title, subtitle, description } = resource || {}
	return (
		<Stack
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
			}}
			spacing={2}
		>
			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				sx={{
					...sx.header,
					...(enableBorder && sx.headerBorder),
				}}
			>
				<Typography sx={sx.title} color="text.primary" variant="h6">
					{title}
				</Typography>
        { subtitle && (
          <Typography color="text.secondary" variant="body1">
            {subtitle}
          </Typography>  
        )}            

				{(actions || enableEdit) && (
					<Stack
						sx={sx.actions}
						direction={{ sm: 'row', xs: 'column' }}
						spacing={1}
						p={enableBorder ? 1 : 0}
					>
						<Actions
							actions={buildActions({
								enableEdit,
								handleEdit,
								actions,
							})}
							resource={flattenDocument(resource)}
							justifyContent="flex-end"
						/>
					</Stack>
				)}
			</Stack>
			<Box sx={sx.container}>{children}</Box>
			<Box
				sx={{
					...sx.content,
					...(enableBorder && sx.contentBorder),
				}}
			>
				<Typography variant="body1" color="text.primary" sx={sx.text}>
					{description}
				</Typography>
			</Box>
		</Stack>
	)
}

export default HeroContainer

const sx = {
	root: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	rootBorder: {
		py: 2,
		border: '1px solid',
		borderColor: 'divider',
	},
	header: {
		width: '100%',
		textAlign: 'space-between',
	},
	headerBorder: {
		px: 2,
	},
	title: {
		width: '100%',
	},
	content: {
		width: '100%',
		maxWidth: '100%',
	},
	contentBorder: {
		px: 2,
	},
	container: {
		width: '100%',
	},
	text: {
		width: '100%',
		whiteSpace: 'pre-line',
	},
	caption: {
		color: 'text.secondary',
	},
	actions: {
		justifyContent: 'flex-end',
		width: '100%',
	},
}
