'use client'

import React from 'react'
import Typography from './Typography'
import { TypographyProps } from './Typography'

type TextProps = Omit<TypographyProps, 'children'> & {
  text: string
} 

const Text: React.FC<TextProps> = (props) => {
	const { text, ...rest } = props

	return <Typography { ...rest}>{ text }</Typography>
}

export default Text
