import React from 'react'
import { BackgroundColor, Header } from '../../components'
import { HeaderProps } from '../../components/ui/header/Header'
import { useRouter } from 'next/router'
import { useApp } from '../../hooks'

type LayoutHeaderProps = HeaderProps & {
	bgColor: 'string'
}

const AppHeader: React.FC<LayoutHeaderProps> = (props) => {
	const router = useRouter()
	const { bgColor, ...rest } = props || {}

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
			<Header {...rest} handleClick={handleClick} />
		</BackgroundColor>
	)
}

export default AppHeader
