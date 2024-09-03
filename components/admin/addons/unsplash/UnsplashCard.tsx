import React from 'react'
import {
	Avatar,
	Link,
	Card,
	CardActionArea,
	CardHeader,
	Button,
} from '@mui/material'
import { Image } from 'frontend-ui/components'

type UnplashCardProps = {
	image?: any
	selected?: boolean
	handleClick?: (image: any) => void
}

const UnplashCard: React.FC<UnplashCardProps> = (props) => {
	const { image, selected, handleClick } = props

	const handleProfileClick = (user) => {
		let url = user?.links?.html + '?utm_source=frontend.co&utm_medium=referral'
		window.open(url, '_blank')
	}

	return (
		<Card
			sx={{
				...sx.root,
				...(selected && sx.selected),
			}}
		>
			<CardActionArea onClick={() => (handleClick ? handleClick(image) : null)}>
				<Image
					height={164}
					width={164}
					src={image?.urls?.small}
					alt={image?.alt_description}
					objectFit="cover"
					disableBorderRadius
				/>
			</CardActionArea>
			<CardHeader
				sx={sx.cardHeader}
				title={
					<Button
						startIcon={
							<Avatar sx={sx.avatar} src={image?.user?.profile_image?.medium} />
						}
						sx={sx.button}
						onClick={() => handleProfileClick(image?.user)}
					>
						{image?.user?.name}
					</Button>
				}
			/>
		</Card>
	)
}

export default UnplashCard

const sx = {
	root: {
		borderRadius: 1,
		bgcolor: 'background.paper',
		border: '1px solid',
		borderColor: 'divider',
		p: 0,
	},
	selected: {
		borderColor: 'primary.main',
	},
	header: {},
	image: {
		objectFit: 'cover',
	},
	avatar: {
		height: 24,
		width: 24,
	},
	button: {
		fontSize: 12,
		textDecoration: 'none',
		color: 'text.secondary',
		flexWrap: 'break-word',
		'&:hover': {
			color: 'text.primary',
		},
	},
	cardHeader: {
		p: 0.5,
	},
}
