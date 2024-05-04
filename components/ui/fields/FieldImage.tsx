import React from 'react'
import { Image, FieldWrapper } from '../../../components'

type FieldImageProps = {
	value?: any
	label?: string
	rest?: any
	handleClick?: () => void
	objectFit?: 'cover' | 'contain'
}

const FieldImage: React.FC<FieldImageProps> = (props) => {
	const { label, value, objectFit = 'cover', ...rest } = props
	return (
    <FieldWrapper label={label} {...rest}>
      <Image
        src={value?.url || value}
        height={120}
        objectFit={objectFit}
      />
    </FieldWrapper>
	)
}

export default FieldImage
