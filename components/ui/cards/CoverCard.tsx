import React, { useContext } from 'react'
import { AppContext, ThemeContext } from '../../../context'
import { Box, Stack, Typography } from '@mui/material'
import {
	UserChip,
	AvgRating,
	FavoriteButton,
	DisplayFields,
	Image,
	Icon,
	TouchableOpacity,
	Actions,
	CommentButton,
} from '../..'
import { ThemeProvider } from '../../../context'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'
import { CardProps } from '../../../types'

const CoverVert: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		actions,
		resource,
		displayFields = [],
		href,
		handleClick,
		textVariant = 'subtitle1',
		objectFit = 'cover',
		height = 400,
		enableGradient = false,
		enableUsers = false,
		enableOverlay = false,
		enableComments = false,
		enableFavorites = false,
		enableRatings = false,
		icon,
	} = props || {}

	const { label, title, image } = resource || {}
	const router = useRouter()

	const handleItemClick = () => {
		if (handleClick) {
			handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	const { theme } = useContext(ThemeContext)

	return (
		<ThemeProvider
			muiTheme={theme}
			textPrimary="#FFFFFF"
			textSecondary="#FFFFFF"
		>
			<Stack spacing={1} sx={sx.root}>
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
									<Typography color="text.primary" variant={textVariant}>
										{truncate(title, 60)}
									</Typography>
									{enableRatings == true && (
										<AvgRating resource={resource} size="small" />
									)}
									<DisplayFields fields={displayFields} resource={resource} />
									{enableUsers == true && <UserChip user={resource?.user} />}
								</Box>
							</Stack>
						</Box>
					</Stack>
				</Stack>
				<Box sx={sx.actions}>
					{enableComments == true && (
						<CommentButton resource={resource} color="common.white" />
					)}
					{enableFavorites == true && (
						<FavoriteButton handle={resource?.handle} color="common.white" />
					)}
					<Actions numVisible={0} resource={resource} actions={actions} />
				</Box>
			</Stack>
		</ThemeProvider>
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
		display: 'flex',
		justifyContent: 'flex-end',
		flexDirection: 'row',
		position: 'absolute',
		top: 0,
		right: 10,
	},
}
