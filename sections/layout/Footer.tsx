import React from 'react'
import { LightDarkMode, Footer } from '../../components'
import { FooterProps } from '../../components/ui/footer/Footer'
import { useRouter } from 'next/router'
import { useApp } from '../../hooks'

type LayoutFooterProps = FooterProps & {
	mode: 'accent' | 'light' | 'dark'
}

const AppFooter: React.FC<LayoutFooterProps> = (props) => {
	const router = useRouter()
	const { mode, links = [], ...rest } = props || {}

  const { clientUrl } = useApp()

	const handleClick = (path: string) => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		router.push(`${clientUrl}${path}`)
	}

	return (
		<LightDarkMode mode={mode}>
			<Footer {...rest} links={links} handleClick={handleClick} />
		</LightDarkMode>
	)
}

export default AppFooter
