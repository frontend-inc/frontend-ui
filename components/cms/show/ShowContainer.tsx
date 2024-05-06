import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { Actions, ActionButton } from '../../../components'
import { ShowItemProps } from './Show'
import { flattenDocument } from 'frontend-js'

type ShowContainerProps = ShowItemProps & {
  fieldName: string 
  children: React.ReactNode
} 

const ShowContainer: React.FC<ShowContainerProps> = (props) => {
	const { actions, resource, children, enableBorder, enableEdit, handleEdit } =
		props || {}
	const { title, description } = resource || {}
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
        <Typography sx={ sx.title } color="text.primary" variant="h6">
          {title}
        </Typography>
        
				{(actions || enableEdit) && (
					<Stack
						direction={{ xs: 'column', sm: 'row' }}
						sx={sx.actions}
						spacing={0}
					>
						{enableEdit && (
              <Box>
                <ActionButton
                  resource={flattenDocument(resource)}
                  action={{
                    label: 'Edit',
                    color: 'secondary',
                    name: 'click',
                    onClick: handleEdit,
                  }}
                />
              </Box>
						)}
						<Actions actions={actions} resource={flattenDocument(resource)} />
					</Stack>
				)}
			</Stack>
      <Box sx={sx.container }>
        { children }
      </Box>      
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

export default ShowContainer

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
