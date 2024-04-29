import React, { useState } from 'react'
import { Avatar, Box, Link, Stack, Typography } from '@mui/material'
import { Image, ActionButton, Actions, SocialLink } from '../../../components'
import { ShowItemProps } from './Show'

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
        <Avatar 
          sx={{
            height: 360,
            width: 360 
          }}
        >
        <Image 
          height={360}
          src={image?.url} 
          alt={title}  
          disableBorderRadius={enableBorder}
        />
        </Avatar>
				<Stack spacing={2} sx={sx.content}>
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
          <Box>
            { enableEdit && (
              <ActionButton 
                resource={resource} 
                action={{ label: 'Edit', color: 'secondary', name: 'click', onClick: handleEdit }} 
              /> 
            )}
            <Actions
              actions={actions}
              resource={resource}
              justifyContent="flex-end"
            />
          </Box>
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
    p: 2,
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
	avatar: {
		height: {
			sm: 180,
			xs: 180,
		},
		width: {
			sm: 180,
			xs: 180,
		},
	},
	avatarContainer: {
		height: {
			sm: 180,
			xs: 180,
		},
		width: {
			sm: 180,
			xs: 180,
		},
	},
	header: {
		width: '100%',
		textAlign: 'center',
	},
	content: {
		width: '100%',
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
}
