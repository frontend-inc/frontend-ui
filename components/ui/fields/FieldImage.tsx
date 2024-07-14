import React from 'react'
import { Box } from '@mui/material'
import { Image, FieldWrapper } from '../../../components'

type FieldImageProps = {
	value?: any
	label?: string
	rest?: any
	height?: number
	width?: number
	handleClick?: () => void
	color?: string
}

const FieldImage: React.FC<FieldImageProps> = (props) => {
	const {
		label,
		value,
		height = 140,
		width,
		color,
		...rest
	} = props
	if (!value) return null
	return (
		<FieldWrapper color={color} label={label} {...rest}>
			<Box
				sx={{
					height,
					width: width ? width : undefined,
				}}
			>
				<Image
					src={value?.url || value}
					height={height}
				/>
			</Box>
		</FieldWrapper>
	)
}

export default FieldImage

const sx = {
	imageContainer: {
		borderRadius: 1,
		height: 140,
		width: 140,
		overflow: 'none',
	},
}
