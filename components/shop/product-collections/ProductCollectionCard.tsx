import React from 'react'
import { useApp } from '../../../hooks'
import { Box, Stack, Typography } from '@mui/material'
import { Image, TouchableOpacity, LightDarkMode } from '../..'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'

export type ProductCardProps = {
  label?: string
	primary: string
  image?: {
    url: string 
  }
	href?: string
	handleClick?: () => void
  slots?: {
    image?: any
  }	
}

const ProductCollectionCard: React.FC<ProductCardProps> = (props) => {
	const { clientUrl } = useApp()
	const {
    label,
		primary,
    image,
		href,
		handleClick,
    slots={
      image: {}
    }		
	} = props || {}

	const router = useRouter()

	const handleItemClick = () => {
		if (handleClick) {
			handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
		<LightDarkMode mode="dark">
			<Stack spacing={1} sx={sx.root}>
				<TouchableOpacity handleClick={handleItemClick}>
					<Image
						label={label}
						src={image?.url}
						height={400}
						alt={primary}
            { ...slots.image }						
					/>
				</TouchableOpacity>
				<Stack spacing={1} sx={sx.cover}>
					<Stack
						sx={sx.fullWidth}
						spacing={1}
						direction={'row'}
						alignItems="center"
					>
						<Box sx={sx.contentContainer}>
							<Stack sx={sx.content} direction="column" spacing={0}>
								<Box sx={sx.fullWidth}>
									<Typography color="text.primary" variant="subtitle2">
										{truncate(primary, 60)}
									</Typography>
								</Box>
							</Stack>
						</Box>
					</Stack>
				</Stack>
			</Stack>
		</LightDarkMode>
	)
}

export default ProductCollectionCard

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
	fullWidth: {
		width: '100%',
	},
	contentContainer: {
		px: 0,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	content: {
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
}
