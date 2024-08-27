import React from 'react'
import { Box, Stack, Typography, Checkbox } from '@mui/material'
import { Icon, Image, AvatarImage } from '../..'
import { CardProps } from './Card'

export type ListCardProps = CardProps & {
  circular?: boolean
  disableImage?: boolean
}

const ListCard: React.FC<ListCardProps> = (props) => {
	const {  
    circular = false,  
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
		height = 160,
    disableImage,
		slots = {
			item: {},
			image: {},
		},
	} = props || {}

	return (
		<Box sx={sx.root} {...slots.item}>
      <Stack direction="row" alignItems='center' spacing={0} width='100%'>
        { selectable && (
          <Checkbox 
            checked={selected}
            onChange={handleSelect}
            color="primary"
          />
        )}
        { sortable && (
          <Icon 
            name="GripVertical"
            color='text.secondary'
          />
        )}
			<Stack
				sx={sx.container}
				spacing={1}
				flexDirection={{ xs: 'column', sm: 'row' }}
			>
        <Stack direction="row" alignItems='flex-start' spacing={0}>
          
          { !disableImage && (
            <Box sx={sx.image}>
              { circular ? (
                <AvatarImage                
                  label={label}
                  src={image}
                  height={height}
                  alt={primary}
                  handleClick={ handleClick }
                  {...slots.image}
                />  
              ):(
              <Image                
                label={label}
                src={image}
                height={height}
                alt={primary}
                handleClick={ handleClick }
                {...slots.image}
              />
            )}
          </Box>
        )}
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
		width: {
			sm: 180,
			xs: '100%',
		},
		minWidth: {
			sm: 180,
			xs: '100%',
		},
    mr: {
      sm: 2,
      xs: 0
    },
		height: '100%',
    display: 'flex',
    justifyContent: {
      xs: 'center',
      sm: 'flex-start',
    },
    alignItems: 'center',
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
