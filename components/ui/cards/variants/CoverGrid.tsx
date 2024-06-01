import React, { useContext } from 'react'
import { AppContext } from '../../../../context'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Image, Icon, TouchableOpacity, Actions } from '../../..'
import { truncate } from '../../../../helpers'
import { useRouter } from 'next/router'
import { CardProps } from '../../../../types'

const CoverVert: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		actions,
		resource,
		href,
		handleClick,
		textVariant = 'subtitle1',
		objectFit = 'cover',
		height = 320,
		enableGradient = false,
		enableOverlay = false,
		icon,
	} = props || {}

	const { label, title, description, image } = resource || {}
	const router = useRouter()

	const handleItemClick = () => {
		if (handleClick) {
			handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
		<Stack
			spacing={1}
			sx={{
				...sx.root,
			}}
		>
			<TouchableOpacity handleClick={handleItemClick}>
				<Image
					label={label}
					src={image?.url}
					height={height}
					objectFit={objectFit}
					alt={title}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
				/>
			</TouchableOpacity>
			<Stack spacing={1} sx={sx.cover}>
				<Stack
					sx={sx.fullWidth}
					spacing={1}
					direction={'row'}
					alignItems="center"
				>
					{icon && (
						<Box>
							<Icon size={20} name={icon} color="common.white" />
						</Box>
					)}
					<Box sx={sx.content}>
						<Stack sx={sx.contentContainer} direction="column" spacing={0}>
							<Box sx={sx.fullWidth}>
								<Typography color="common.white" variant={textVariant}>
									{truncate(title, 60)}
								</Typography>
								{description && (
									<Typography color="common.white" variant="body2">
										{truncate(description, 30)}
									</Typography>
								)}
							</Box>
						</Stack>
					</Box>
				</Stack>
			</Stack>
			<Box sx={sx.actions}>
				<Actions
					numVisible={0}
					resource={resource}
					actions={actions}
					color={enableOverlay ? 'common.white' : 'text.secondary'}
				/>
			</Box>
		</Stack>
	)
}

export default CoverVert

const sx = {
	root: {
		position: 'relative',
		flexDirection: 'column',
		overflow: 'hidden',
		width: '100%',
		borderRadius: 1,
	},
	cover: {
		width: '100%',
		position: 'absolute',
		bottom: 0,
		left: 0,
		zIndex: 1,
		p: 1,
	},
	description: {
		maxWidth: '320px',
	},
	button: {
		bgcolor: 'common.white',
		color: 'common.black',
		'&:hover': {
			color: 'common.black',
			bgcolor: 'common.white',
			opacity: 0.9,
		},
	},
	fullWidth: {
		width: '100%',
	},
	content: {
		px: 1,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	contentContainer: {
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	actions: {
		position: 'absolute',
		top: 0,
		right: 10,
	},
}
