import React from 'react'
import { Header } from '../../components'
import { HeaderProps } from '../../components/ui/header/Header'
import { useRouter } from 'next/router'
import { useApp } from '../../hooks'

type LayoutHeaderProps = HeaderProps & {
	bgColor: string
  mode: 'light' | 'dark'
}

const AppHeader: React.FC<LayoutHeaderProps> = (props) => {
	const router = useRouter()
	const { bgColor, mode, ...rest } = props || {}

	const { clientUrl } = useApp()

	const handleClick = (path: string) => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		router.push(`${clientUrl}${path}`)
	}

	return (
    <div className={mode}>
      <Header {...rest} handleClick={handleClick} />
    </div>
	)
}

export default AppHeader
