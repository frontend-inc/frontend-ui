'use client'

import React from 'react'
import { Footer } from '../../components'
import { FooterProps } from '../../components/web/footer/Footer'
import { useRouter } from 'next/navigation'
import { useApp } from '../../hooks'
import { cn } from 'frontend-shadcn'

type LayoutFooterProps = FooterProps & {
	bgColor: string
	mode: 'light' | 'dark'
}

const AppFooter: React.FC<LayoutFooterProps> = (props) => {
	const router = useRouter()
	const { bgColor, mode, links = [], ...rest } = props || {}

	const { clientUrl } = useApp()

	const handleClick = (path: string) => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		router.push(`${clientUrl}${path}`)
	}

	return (
		<div 
      className={cn(mode, 'w-full')} 
      style={{
        backgroundColor: bgColor
      }}
    >
			<Footer {...rest} links={links} handleClick={handleClick} />
		</div>
	)
}

export default AppFooter
