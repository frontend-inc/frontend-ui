import React from 'react'
import { LightDarkMode, Header } from '../../components'
import { HeaderProps } from '../../components/ui/header/Header'
import { useRouter } from 'next/router'
import { useApp } from '../../hooks'

type LayoutHeaderProps = HeaderProps & {
	mode: 'accent' | 'light' | 'dark'
}

const AppHeader: React.FC<LayoutHeaderProps> = (props) => {
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
		<LightDarkMode mode={mode}>
			<Header {...rest} handleClick={handleClick} />
		</LightDarkMode>
	)
}

export default AppHeader
