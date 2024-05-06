import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { Actions, ActionButton, YouTubeEmbed } from '../../../../components'
import moment from 'moment'
import { ShowItemProps } from '../Show'
import { flattenDocument } from 'frontend-js'

type YouTubeVideoProps = ShowItemProps & {
  fieldName: string 
} 

const YouTubeVideo: React.FC<YouTubeVideoProps> = (props) => {
	const { actions, resource, fieldName, enableBorder, enableEdit, handleEdit } =
		props || {}
	const { title, description, data } = resource || {}
	const { published_at } = data || {}
  const youTubeUrl = flattenDocument(resource)[fieldName]  
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
      <Box sx={sx.videoContainer}>
        <YouTubeEmbed 
          src={ youTubeUrl }
        />          
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

export default YouTubeVideo

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
  videoContainer: {
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
