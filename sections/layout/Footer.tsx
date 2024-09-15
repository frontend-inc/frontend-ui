import React from 'react'
import { LightDarkMode, Footer as AppFooter } from '../../components'
import { FooterProps } from '../../components/ui/footer/Footer'
import { useRouter } from 'next/router'

type LayoutFooterProps = FooterProps & {
	mode: 'accent' | 'light' | 'dark'
}

const Footer: React.FC<LayoutFooterProps> = (props) => {
	const router = useRouter()
	const { mode, links=[], ...rest } = props || {}

	const handleClick = (path: string) => {
		router.push(path)
	}

	return (
		<LightDarkMode mode={mode}>
			<AppFooter 
        {...rest} 
        links={links}
        handleClick={handleClick} 
      />
		</LightDarkMode>
	)
}

export default Footer
