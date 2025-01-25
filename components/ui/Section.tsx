'use client'

import React from 'react'
import { SectionProps } from '../../types'
import { cn } from '@nextui-org/react'
import { useTheme } from '../../hooks'
import { Container } from '../../components'

const Section: React.FC<SectionProps> = (props) => {
	const { theme } = useTheme()

	const {
		children,
		mode,
    disablePadding,
		className,
	} = props

	return (
		<section
			className={cn(				
				'z-0 bg-background w-full flex flex-col',				
				theme && mode && `${theme}-${mode}`,
				!disablePadding && 'p-4',
        className 
			)}
		>
      <Container maxWidth='lg'>
			  {children}
      </Container>
		</section>
	)
}

export default Section
