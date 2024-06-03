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
		<Box
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
			}}
			spacing={0}
		>			
     	
			<Box sx={sx.container}>{children}</Box>
			<Stack
        spacing={2}
				sx={{
					...sx.content,
					...(enableBorder && sx.contentBorder),
				}}
			>
        <Stack direction={{ sm: "row", xs: 'column-reverse' }} justifyContent='space-between' spacing={1}>
        <Typography sx={sx.title} color="text.primary" variant="h4">
					{title}
				</Typography>
        {(actions || enableEdit) && (
        <Box
          sx={sx.actions}
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
        </Box>
      )}		
        </Stack>
        { subtitle && (
          <Typography color="text.secondary" variant="body1">
            {subtitle}
          </Typography>  
        )}            
				<Typography variant="body1" color="text.primary" sx={sx.text}>
					{description}
				</Typography>
			</Stack>
		</Box>
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
		pb: 2,
		border: '1px solid',
		borderColor: 'divider',
	},
	actions: {
		width: '100%',
    justifyContent: 'flex-end'
	},
	title: {
		width: '100%',
	},
	content: {
    py: 2,
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
}
