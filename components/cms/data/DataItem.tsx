import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {
	Image,
  MenuButton,
	TouchableOpacity,
} from '../..'

type DataListItemProps = {
  label?: string
  primary: string 
  secondary?: string
  actions?: React.ReactNode
  secondaryAction?: React.ReactNode
  image?: string
  height?: number
  handleClick?: () => void 
  handleEdit?: () => void
  handleDelete?: () => void
  slots?: {
    item?: any
    image?: any
  } 
}

const DataListItem: React.FC<DataListItemProps> = (props) => {
	
	const {
    label,
		primary,
    secondary,
    actions,
    secondaryAction,
    height,
    image,
    handleClick,
    handleEdit,
    handleDelete,
    slots={
      item: {},
      image: {}
    },
	} = props || {}

	return (
		<Box sx={sx.root}>
			<Stack
				sx={sx.container}
				spacing={1}
				flexDirection={{ xs: 'column', sm: 'row' }}
			>
        { image && (
          <Box sx={sx.image}>
            <TouchableOpacity handleClick={handleClick}>
              <Image
                label={label}
                src={image}
                height={height}
                alt={primary}
                { ...slots.image }
              />
            </TouchableOpacity>
          </Box>
        )}
				<Stack direction="row" spacing={1} sx={sx.contentArea}>
					<Stack direction="column" sx={sx.content}>
						<Stack direction="column" spacing={0.5}>              
							<Typography color="text.primary" variant="subtitle2">
								{ primary }
							</Typography>
              <Typography color="text.secondary" variant="body2">
								{ secondary }
							</Typography>              
						</Stack>
						<Stack direction="row" justifyContent="flex-end">
              { actions }
						</Stack>
					</Stack>
					<Stack direction="row" justifyContent="flex-end">            
            {(handleEdit || handleDelete) && (
						  <MenuButton handleEdit={handleEdit} handleDelete={handleDelete}>
							  { secondaryAction }
						  </MenuButton>
					  )}            
					</Stack>
				</Stack>
			</Stack>
		</Box>
	)
}

export default DataListItem

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
