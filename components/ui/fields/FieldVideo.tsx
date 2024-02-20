import React from 'react'
import { NoImage, FieldWrapper } from '../../../components'

type FieldVideoProps = {
	value?: any
	handleClick?: (item: any) => void
	label?: string
	rest?: any
}

const FieldVideo: React.FC<FieldVideoProps> = (props) => {
	const { value, label, handleClick, ...rest } = props

	return (
		<FieldWrapper label={label} {...rest}>
			{value ? <video src={value} controls muted autoPlay /> : <NoImage />}
		</FieldWrapper>
	)
}

export default FieldVideo
