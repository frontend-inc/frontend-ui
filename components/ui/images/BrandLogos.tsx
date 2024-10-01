import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import Image from 'next/image'

type BrandLogosProps = {
	height?: number
	width?: number
	logos: {
		title: string
		image: string
	}[]
}

const BrandLogos: React.FC<BrandLogosProps> = (props) => {
	const { logos = [], height = 48, width = 128 } = props || {}

	return (
		<Stack direction="row" spacing={3} sx={sx.logos}>
			{logos.map((logo, i) => (
				<Box
					sx={{
						...sx.logo,
						height,
						maxWidth: width,
					}}
				>
					<Image            
						key={i}
						src={logo?.image}
						height={height}
						width={width}
						style={{
							objectFit: 'contain',
							height,
							width,
						}}
						layout="responsive"
						alt={logo?.title}
					/>
				</Box>
			))}
		</Stack>
	)
}

export default BrandLogos

const sx = {
	logos: {
		alignItems: 'center',
		overflowX: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
		justifyContent: {
			sm: 'center',
			xs: 'flex-start',
		},
	},
	logo: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
	}  
}
