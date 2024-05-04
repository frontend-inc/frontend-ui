import React, { useState } from 'react'
import { Box, Link, Stack, Typography } from '@mui/material'
import { Image, ActionButton, Actions, SocialLink } from '../../../components'
import { ShowItemProps } from './Show'
import { flattenDocument } from 'frontend-js'

const Person: React.FC<ShowItemProps> = (props) => {
	const MAX_CHARS = 500

	const { actions, resource, enableBorder, enableEdit, handleEdit } = props || {}
	const { data } = resource || {}
  const { facebook, instagram, linkedin, twitter, youtube, blog } = data || {}

	const { label, title, image, description } = resource || {}
	const [open, setOpen] = useState(false)
	return (
		<Box 
      sx={{
        ...sx.root,
        ...(enableBorder && sx.rootBorder)
      }}>
			<Stack
				sx={sx.container}
				direction={{ sm: 'row', xs: 'column' }}
				spacing={4}
			>
        <Box sx={ sx.imageContainer }>
          <Image 
            label={label}
            height={240}
            src={image?.url} 
            alt={title}  
            disableBorderRadius={enableBorder}
          />
        </Box>
				<Stack spacing={2} sx={{ ...sx.content, ...(enableBorder && sx.contentBorder )}}>
					<Typography color="text.primary" variant="h4">
						{title}
					</Typography>
					{ facebook ||
						instagram ||
						linkedin ||
						twitter ||
						youtube ||
						(blog && (
							<Stack direction="row" spacing={0} sx={sx.socialUrls}>
								{facebook && <SocialLink provider="facebook" url={facebook} />}
								{instagram && (
									<SocialLink provider="instagram" url={instagram} />
								)}
								{linkedin && <SocialLink provider="linkedin" url={linkedin} />}
								{twitter && <SocialLink provider="twitter" url={twitter} />}
								{youtube && <SocialLink provider="youtube" url={youtube} />}
								{blog && <SocialLink provider="blog" url={blog} />}
							</Stack>
						))}
					<Box>
						{open ? (
							<Typography variant="body1" color="text.primary" sx={sx.text}>
								{description}
							</Typography>
						) : (
							<Typography variant="body1" color="text.primary" sx={sx.text}>
								{description?.slice(0, MAX_CHARS)}
							</Typography>
						)}
						{description?.length > MAX_CHARS && (
							<Link onClick={() => setOpen(!open)} sx={sx.link}>
								{open ? 'See less' : '... See all'}
							</Link>
						)}
					</Box>
				</Stack>
				{(actions || enableEdit) && (
          <Stack 
            sx={sx.actions}
            direction={{ sm: 'row', xs: 'column' }} 
            spacing={1} 
            p={enableBorder ? 1 : 0}
          >
            { enableEdit && (
              <ActionButton 
                resource={flattenDocument(resource)} 
                action={{ label: 'Edit', color: 'secondary', name: 'click', onClick: handleEdit }} 
              /> 
            )}
            <Actions
              actions={actions}
              resource={flattenDocument(resource)}
              justifyContent="flex-end"
            />
          </Stack>
				)}
			</Stack>
		</Box>
	)
}

export default Person

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
    borderRadius: theme => `${theme.shape.borderRadius}px`,
	},
  rootBorder: {
    overflow: 'hidden',
    borderRadius: theme => `${theme.shape.borderRadius}px`,
    border: '1px solid',
    borderColor: 'divider',
  },
	container: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: {
			sm: 'flex-start',
			xs: 'center',
		},
	},  	
  imageContainer: {
    width: "100%",
    height: "100%",
    maxHeight: {
      sm: 240,
      xs: 240
    },
    maxWidth: {
      sm: 240,
      xs: '100%'
    }
  },
	header: {
		width: '100%',
		textAlign: 'center',
	},
	content: {
		width: '100%',
	},
  contentBorder: {
    p: 2,
  },
	text: {
		width: '100%',
		whiteSpace: 'pre-line',
	},
	caption: {
		color: 'text.secondary',
	},
	link: {
		cursor: 'pointer',
		color: 'text.secondary',
	},
	socialUrls: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
  actions: {
    width: "100%"
  }
}
