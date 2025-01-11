'use client'

import React from 'react'
import { Header } from '../../components'
import { HeaderProps } from '../../components/web/header/Header'

type UIHeaderProps = HeaderProps & {
	bgColor?: string
	mode?: 'light' | 'dark'
}

const UIHeader: React.FC<UIHeaderProps> = (props) => {
	const { mode = 'light', ...rest } = props || {}
	
	return (
		<Header {...rest} />
	)
}

export default UIHeader
