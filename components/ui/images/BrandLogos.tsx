import React from 'react'
import { Stack, Box } from '@mui/material'
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
		<div className="mx-auto px-4">
			<div
				className={
					'flex flex-wrap w-full justify-center items-center gap-4 sm:flex-nowrap'
				}
			>
				{logos.map((logo, i) => (
					<div
						className={
							'p-4 max-h-[50px] max-w-[140px] rounded-lg w-full flex items-center justify-center'
						}
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
					</div>
				))}
			</div>
		</div>
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
	},
}
