'use client'

import React from 'react'
import { VimeoEmbed } from '../../..'

export type FieldVimeoProps = {
	value: string
}

const FieldVimeo: React.FC<FieldVimeoProps> = (props) => {
	const { value } = props || {}
	return <VimeoEmbed src={value} />
}

export default FieldVimeo
