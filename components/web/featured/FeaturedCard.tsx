import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../../context'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Image, TouchableOpacity } from '../..'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'

export type FeaturedCardProps = {
	label?: string
	title?: string
	description?: string
	image?: string
	buttonText?: string
	href?: string
	flexDirection?: 'row' | 'row-reverse'
	handleClick?: () => void
	objectFit?: 'cover' | 'contain'
	enableOverlay?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
}

const FeaturedCard: React.FC<FeaturedCardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		label,
		title,
		description,
		image = '',
		href,
		buttonText,
		flexDirection = 'row',
		handleClick,
		objectFit = 'cover',
		enableOverlay = false,
		enableBorder = false,
		enableGradient = false,
	} = props || {}

	const router = useRouter()

	const handleItemClick = () => {
		if (handleClick) {
			return handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
		<Box
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
			}}
		>
			<Box
				sx={{
					...sx.imageContainer,
					flexDirection: {
						sm: flexDirection,
						xs: 'column',
					},
				}}
			>
				<Box sx={sx.image}>
					<TouchableOpacity handleClick={handleItemClick}>
						<Image
							label={label}
							src={image}
							height={320}
							objectFit={objectFit}
							alt={title}
							enableOverlay={enableOverlay}
							enableGradient={enableGradient}
							disableBorderRadius={enableBorder}
						/>
					</TouchableOpacity>
				</Box>
				<Box sx={sx.content}>
					<Stack spacing={0} sx={sx.textContent}>
						<Typography sx={sx.title} variant={'subtitle1'}>
							{title}
						</Typography>
						<Typography variant="body1" sx={sx.description}>
							{truncate(description, 160)}
						</Typography>
						{buttonText && (
							<Box sx={sx.buttons}>
								<Button
									size="large"
									variant="contained"
									color="primary"
									onClick={handleItemClick}
								>
									{buttonText}
								</Button>
							</Box>
						)}
					</Stack>
				</Box>
			</Box>
		</Box>
	)
}

export default FeaturedCard

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		borderRadius: 1,
	},
	imageContainer: {
		width: '100%',
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		borderRadius: 1,
		overflow: 'hidden',
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
	image: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: {
			xs: '100%',
			sm: '55%',
		},
	},
	buttons: {
		mt: 2,
		display: 'flex',
		justifyContent: {
			sm: 'flex-start',
			xs: 'center',
		},
		width: '100%',
	},
	content: {
		display: 'flex',
		justifyContent: {
			sm: 'flex-start',
			xs: 'center',
		},
		width: {
			sm: '45%',
			xs: '100%',
		},
		alignItems: 'center',
		height: '100%',
	},
	textContent: {
		p: 2,
		display: 'flex',
		justifyContent: 'center',
		height: '100%',
		width: '100%',
	},
	title: {
		width: '100%',
		color: 'text.primary',
		my: 1,
		textAlign: {
			sm: 'left',
			xs: 'center',
		},
	},
	description: {
		width: '100%',
		color: 'text.secondary',
		textAlign: {
			sm: 'left',
			xs: 'center',
		},
	},
}
