'use client'

import React from 'react'
import { Header } from '../../components'
import { HeaderProps } from '../../components/web/header/Header'
import { useRouter } from 'next/navigation'
import { useApp, useTheme } from '../../hooks'
import { cn } from '@nextui-org/react'

type UIHeaderProps = HeaderProps & {
	bgColor?: string
	mode?: 'light' | 'dark'
}

const UIHeader: React.FC<UIHeaderProps> = (props) => {
	const router = useRouter()
	const { mode = 'light', ...rest } = props || {}

	const { clientUrl } = useApp()

	const handleClick = (link: any) => {
		const path = link?.path || '/'
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		router.push(`${clientUrl}${path}`)
	}

	const { theme } = useTheme()
	const themeClass = `${theme}-${mode}`

	return (
		<div className={cn(themeClass, 'bg-background w-full')}>
			<Header {...rest} handleClick={handleClick} />
		</div>
	)
}

export default UIHeader
