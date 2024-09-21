import React from 'react'
import { LightDarkMode, Footer } from '../../components'
import { FooterProps } from '../../components/ui/footer/Footer'
import { useRouter } from 'next/router'

type LayoutFooterProps = FooterProps & {
	mode: 'accent' | 'light' | 'dark'
}

const AppFooter: React.FC<LayoutFooterProps> = (props) => {
	const router = useRouter()
	const { mode, links=[], ...rest } = props || {}

	const handleClick = (path: string) => {
		router.push(path)
	}

	return (
		<LightDarkMode mode={mode}>
			<Footer 
        {...rest} 
        links={links}
        handleClick={handleClick} 
      />
		</LightDarkMode>
	)
}

export default AppFooter
