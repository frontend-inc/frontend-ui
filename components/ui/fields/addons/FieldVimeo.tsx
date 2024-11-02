'use client'

import React from 'react'
import { VimeoEmbed } from '../../..'

export type FieldVimeoProps = {
	value: string	
  height?: number 
  width?: number
	label?: string
}

const FieldVimeo: React.FC<FieldVimeoProps> = (props) => {
	const { value, height, width } = props || {}
	return <VimeoEmbed src={value} height={ height } />
}

export default FieldVimeo
