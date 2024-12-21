'use client'

import React from 'react'
import { Section, Footer } from '../../components'
import { FooterProps } from '../../components/web/footer/Footer'
import { useRouter } from 'next/navigation'
import { useApp } from '../../hooks'
import { SectionProps } from '../../types'
import { cn } from 'frontend-shadcn'

type UIFooterProps = FooterProps & SectionProps 

const UIFooter: React.FC<UIFooterProps> = (props) => {
	const router = useRouter()
	
  const { 
    bgColor, 
    mode, 
    maxWidth='lg', 
    links = [], 
    ...rest 
  } = props || {}

	const { clientUrl } = useApp()

	const handleClick = (path: string) => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		router.push(`${clientUrl}${path}`)
	}

	return (
		<Section
      bgColor={bgColor}
      mode={mode}
      maxWidth={maxWidth}
    >
			<Footer {...rest} links={links} handleClick={handleClick} />
		</Section>
	)
}

export default UIFooter
