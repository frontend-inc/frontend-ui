import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import OptionButton from './OptionButton'

type ProductVariantOptionsProps = {
	name: string
	values: any
	selected: string
	handleChange: any
}

const ProductVariantOptions: React.FC<ProductVariantOptionsProps> = (props) => {
	const { name, values, selected, handleChange } = props

	return (
		<Box sx={sx.root}>
			<Typography sx={sx.title} variant="subtitle2" color="text.primary">
				Select {name}
			</Typography>
			<Box sx={sx.options}>
				{values?.map((value) => (
					<OptionButton
						key={value}
						value={value}
						name={name}
						active={selected === value}
						handleClick={handleChange}
					>
						{value}
					</OptionButton>
				))}
			</Box>
		</Box>
	)
}

export default ProductVariantOptions

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
	title: {
		mb: 1,
	},
}
