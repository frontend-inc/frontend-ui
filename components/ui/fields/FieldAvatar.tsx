import React from 'react'
import { FieldWrapper, Avatar } from '../../../components'

type FieldAvatarProps = {
	value?: any
	size?: number
	rounded?: boolean
	label?: string
	rest?: any
	color?: string
}

const FieldAvatar: React.FC<FieldAvatarProps> = (props) => {
	const { value, label, color, size = 32, ...rest } = props
	return (
		<FieldWrapper label={label} color={color} {...rest}>
			<Avatar src={value} />
		</FieldWrapper>
	)
}

export default FieldAvatar
