import React from 'react'
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
	const { label, value, height = 140, width, color, ...rest } = props
	if (!value) return null
	return (
		<FieldWrapper color={color} label={label} {...rest}>
			<div 
        style={{
          height: `${height}px`,
          width: width ? `${width}px` : 'auto',
        }}				
			>
				<Image alt={'Image'} src={value?.url || value} height={height} />
			</div>
		</FieldWrapper>
	)
}

export default FieldImage
