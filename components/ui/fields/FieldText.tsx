import React from 'react'
import { ExpandableText, FieldWrapper } from '../../../components'
import { TypographyVariantsType } from '../../../types'

type FieldTextProps = {
	value?: any
	label?: string
	placeholder?: string
	variant?: TypographyVariantsType
	color?: string
  maxChars?: number
	rest?: any  
}

const FieldText: React.FC<FieldTextProps> = (props) => {
	const { value, label, variant, color, placeholder, maxChars=80, ...rest } = props
	return (
    <FieldWrapper label={label} color={color} {...rest}>
      <ExpandableText text={value || placeholder } maxChars={maxChars} />
    </FieldWrapper>
	)
}

export default FieldText
