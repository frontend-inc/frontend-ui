import React from 'react'
import { useApp } from '../../../hooks'
import { Box, Button, Stack, Typography } from '../../../tailwind'
import { ExpandableText, Image } from '../..'
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
	const { clientUrl } = useApp()
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
		<Stack			
			alignItems="center"
			spacing={4}
      direction={flexDirection}
		>
			<Box className='w-full md:1-1/2'>
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
			</Box>
			<Stack spacing={1} className='w-full md:1-1/2'>
				<Typography variant={'h6'}>
					{title}
				</Typography>
				{description && <ExpandableText text={description} />}
				{buttonText && (
					<Stack direction="row" spacing={1}>
						<Button
							size="large"
							variant="contained"
							color="primary"
							onClick={handleItemClick}
						>
							{buttonText}
						</Button>
					</Stack>
				)}
			</Stack>
		</Stack>
	)
}

export default FeaturedCard
