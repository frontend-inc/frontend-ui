'use client'

import React from 'react'
import { Header } from '../../components'
import { HeaderProps } from '../../components/web/header/Header'
import { useRouter } from 'next/navigation'
import { useApp } from '../../hooks'
import { cn } from 'frontend-shadcn'

type UIHeaderProps = HeaderProps & {
	bgColor: string
	mode: 'light' | 'dark'
}

const UIHeader: React.FC<UIHeaderProps> = (props) => {
	const router = useRouter()
	const { mode, ...rest } = props || {}

	const { clientUrl } = useApp()

	const handleClick = (path: string) => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		router.push(`${clientUrl}${path}`)
	}

	return (
		<div className={cn(mode, 'w-full')}>
			<Header {...rest} handleClick={handleClick} />
		</div>
	)
}

export default UIHeader
