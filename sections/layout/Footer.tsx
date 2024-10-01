import React from 'react'
import { BackgroundColor, Footer } from '../../components'
import { FooterProps } from '../../components/ui/footer/Footer'
import { useRouter } from 'next/router'
import { useApp } from '../../hooks'

type LayoutFooterProps = FooterProps & {
	bgColor: 'string'
}

const AppFooter: React.FC<LayoutFooterProps> = (props) => {
	const router = useRouter()
	const { bgColor, links = [], ...rest } = props || {}

  const { clientUrl } = useApp()

	const handleClick = (path: string) => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		router.push(`${clientUrl}${path}`)
	}

	return (
		<BackgroundColor bgColor={bgColor}>
			<Footer {...rest} links={links} handleClick={handleClick} />
		</BackgroundColor>
	)
}

export default AppFooter
