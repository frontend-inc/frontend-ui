import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../../context'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Image, TouchableOpacity } from '../..'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'
import { TypographyVariantsType } from '../../../types'
import { FEATURED_CARD_HEIGHT } from '../../../constants/index'

export type FeaturedCardProps = {
	editing?: boolean
	label?: string
	title?: string
	description?: string
	image?: string
	buttonText?: string
	textVariant?: TypographyVariantsType
	size?: number
	href?: string
	height?: number
	width?: number
	flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
	handleClick?: () => void
	objectFit?: 'cover' | 'contain'
	responsive?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
}

const FeaturedCard: React.FC<FeaturedCardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		editing = false,
		label,
		title,
		description,
		image = '',
		href,
		height = FEATURED_CARD_HEIGHT,
		buttonText,
		flexDirection = 'row',
		textVariant = 'h3',
		handleClick,
		objectFit = 'cover',
		enableBorder = false,
		enableGradient = false,
	} = props || {}

	const [textAlign, setTextAlign] = useState('center')
	const [justifyContent, setJustifyContent] = useState('center')
	const [direction, setDirection] = useState('row')

	const router = useRouter()

	const handleItemClick = () => {
		if (handleClick) {
			return handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	useEffect(() => {
		if (flexDirection == 'row' || flexDirection == 'row-reverse') {
			setTextAlign('left')
			setDirection('row')
			setJustifyContent('center')
		} else {
			setTextAlign('center')
			setDirection('column')
			setJustifyContent('flex-start')
		}
	}, [flexDirection])

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
				<Box
					sx={{
						...sx.image,
						width: {
							xs: '100%',
							sm: direction == 'row' ? '50%' : '100%',
						},
					}}
				>
					<TouchableOpacity handleClick={handleItemClick}>
						<Image
							src={image}
							height={height}
							objectFit={objectFit}
							alt={title}
							enableGradient={enableGradient}
							disableBorderRadius={enableBorder}
						/>
					</TouchableOpacity>
				</Box>
				<Box
					sx={{
						...sx.content,
						justifyContent: direction == 'row' ? 'flex-start' : 'center',
						width: {
							sm: direction == 'row' ? '50%' : '100%',
							xs: '100%',
						},
					}}
				>
					<Stack
						spacing={0}
						sx={{
							...sx.textContent,
							justifyContent: {
								sm: justifyContent,
								xs: 'center',
							},
						}}
					>
						{label && (
							<Typography
								color="primary"
								sx={{
									...sx.label,
									textAlign: {
										sm: textAlign,
										xs: 'center',
									},
								}}
								variant="caption"
							>
								{label}
							</Typography>
						)}
						<Typography
							sx={{
								...sx.title,
								textAlign: {
									sm: textAlign,
									xs: 'center',
								},
							}}
							variant={textVariant}
						>
							{title}
						</Typography>
						<Typography
							variant="body2"
							sx={{
								...sx.description,
								textAlign: {
									sm: textAlign,
									xs: 'center',
								},
							}}
						>
							{truncate(description, 160)}
						</Typography>
						{buttonText && (
							<Box
								sx={{
									...sx.actions,
									justifyContent: {
										sm: direction == 'row' ? 'flex-start' : 'center',
										xs: 'center',
									},
								}}
							>
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
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
	},
	imageContainer: {
		width: '100%',
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
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
		width: '100%',
	},
	actions: {
		mt: 2,
		display: 'flex',
		width: '100%',
	},
	content: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: '100%',
	},
	textContent: {
		p: 2,
		display: 'flex',
		height: '100%',
		width: '100%',
	},
	label: {
		width: '100%',
		color: 'primary.main',
	},
	title: {
		width: '100%',
		color: 'text.primary',
		my: 1,
	},
	description: {
		width: '100%',
		color: 'text.secondary',
	},
}
