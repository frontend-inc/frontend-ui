import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Image, TouchableOpacity } from '../../../components'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'
import { TypographyVariants } from '../../../types'
import { FEATURED_CARD_HEIGHT } from '../../../constants/index'

export type FeaturedCardProps = {
	editing?: boolean
	label?: string
	title?: string
	description?: string
	image?: string
	buttonText?: string
	textVariant?: TypographyVariants
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

	const router = useRouter()

	const handleItemClick = () => {		
		if (handleClick) {
			return handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	const direction =
		flexDirection == 'row' || flexDirection == 'row-reverse' ? 'row' : 'column'

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
					<Stack sx={ sx.textContent } spacing={2}>
						<Box>
              {label && (
								<Typography color="primary" sx={ sx.label } variant="caption">
									{label}
								</Typography>
							)}
							<Typography
								sx={{
                  ...sx.title,
									textAlign: direction == 'row' ? 'left' : 'center',
								}}								
								variant={textVariant}                
							>
								{title}
							</Typography>
							<Typography								
								variant="body2"
								sx={{
									...sx.description,
									textAlign: direction == 'row' ? 'left' : 'center',
								}}
							>
								{truncate(description, 160)}
							</Typography>
              {buttonText && (
                <Box
                  sx={{
                    ...sx.actions,
                    justifyContent: direction == 'row' ? 'flex-start' : 'center',
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
						</Box>
					</Stack>
				</Box>
			</Box>
		</Box>
	)
}

export default FeaturedCard

const sx = {
	root: {
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
    justifyContent: 'flex-start',
		alignItems: 'flex-start',
		height: '100%',
		width: '100%',
  },
  label: {
    color: 'primary.main'
  },
  title: {
    color: 'text.primary',
    my: 1
  },
	description: {
    color: 'text.secondary',
		maxWidth: '480px',
	},
}
