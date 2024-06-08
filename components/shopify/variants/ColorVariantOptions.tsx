import React from 'react'
import { Box, Button } from '@mui/material'
import { ProductType } from 'frontend-shopify'
import Image from 'next/image'
import { findVariantByColor } from 'frontend-shopify'

type ColorVariantsOptionsProps = {
	product: ProductType
	name: string
	values: any
	selected: string
	handleChange: any
	styles?: any
}

const ColorVariantsOptions: React.FC<ColorVariantsOptionsProps> = (props) => {
	const { product, name, values, selected, handleChange } = props

	return (
		<Box sx={sx.root}>
			<Box sx={sx.options}>
				{values?.map((value) => {
					let variant = findVariantByColor(product, value)
					return (
						<Button
							key={value}
							sx={{
								...sx.button,
								...(selected === value && sx.activeButton),
							}}
							onClick={() => handleChange(name, value)}
						>
							<Image
								height={64}
								width={64}
								src={variant?.image?.url}
								alt={variant?.image?.altText}
								style={{
									objectFit: 'cover',
								}}
							/>
						</Button>
					)
				})}
			</Box>
		</Box>
	)
}

export default ColorVariantsOptions

const sx = {
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	options: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: '10px',
	},
	button: {
    p: 0,
    overflow: 'hidden',
		border: '3px solid transparent',
		'&:hover': {
			bgcolor: 'transparent',
			opacity: 0.85,
		},
	},
	activeButton: {
		opacity: 1,		
		borderColor: 'primary.main',
	},
}
