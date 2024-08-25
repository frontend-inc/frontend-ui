import React from 'react'
import { Box, Stack, Typography, Checkbox } from '@mui/material'
import { Icon, Image, TouchableOpacity } from '../..'
import { CardProps } from './Card'

export type ListCardProps = CardProps 

const ListCard: React.FC<ListCardProps> = (props) => {
	const {
    sortable = false,
    selectable = false,
    selected = false, 
		label,
		primary,
		secondary,
		actions,
		secondaryAction,
		handleClick,    
    handleSelect,
		image,
		height = 180,
		slots = {
			item: {},
			image: {},
		},
	} = props || {}

	return (
		<Box sx={sx.root} {...slots.item}>
			<Stack
				sx={sx.container}
				spacing={1}
				flexDirection={{ xs: 'column', sm: 'row' }}
			>
        <Stack direction="row" alignItems='flex-start' spacing={0}>
          { selectable && (
            <Checkbox 
              checked={selected}
              onChange={handleSelect}
              color="primary"
              size="small"
            />
          )}
          { sortable && (
            <Icon 
              name="GripVertical"
              color='text.secondary'
            />
          )}
          <Box sx={sx.image}>
            <TouchableOpacity handleClick={handleClick}>
              <Image
                label={label}
                src={image}
                height={height}
                alt={primary}
                {...slots.image}
              />
            </TouchableOpacity>
          </Box>
        </Stack>
				<Stack direction="row" spacing={1} sx={sx.contentArea}>
					<Stack direction="column" sx={sx.content}>
						<Stack direction="column" spacing={0.5}>
							<Typography color="text.primary" variant="subtitle1">
								{primary}
							</Typography>
							<Typography color="text.secondary" variant="body2">
								{secondary}
							</Typography>
						</Stack>
						<Stack direction="row" justifyContent="flex-end">
							{actions}
						</Stack>
					</Stack>
					<Stack direction="row" justifyContent="flex-end">            
						{ secondaryAction }
					</Stack>
				</Stack>
			</Stack>
		</Box>
	)
}

export default ListCard

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		pt: 1,
		pb: 2,
		overflow: 'hidden',
		borderBottom: '1px solid',
		borderColor: 'divider',
    bgcolor: 'background.main',
	},
	gradient: {
		'&::after': {
			content: '""',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '50%',
			background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
		},
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
	container: {
		width: '100%',
	},
	image: {
		pr: {
			sm: 2,
			xs: 0,
		},
		mr: {
			sm: 2,
			xs: 0,
		},
		width: {
			sm: 220,
			xs: '100%',
		},
		minWidth: {
			sm: 220,
			xs: '100%',
		},
		height: '100%',
	},
	contentArea: {
		width: '100%',
	},
	contentAreaBorder: {
		pr: 1,
	},
	content: {
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		height: '100%',
		py: {
			sm: 0,
			xs: 1,
		},
	},
	contentBorder: {
		px: {
			sm: 0,
			xs: 2,
		},
	},
	description: {
		maxWidth: '320px',
	},
	buttons: {
		display: 'flex',
		flexDirection: 'column',
	},
	buttonsBorder: {
		px: 1,
		pb: {
			sm: 0,
			xs: 1,
		},
	},
}
