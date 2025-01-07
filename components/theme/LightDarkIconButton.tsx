import React from 'react'
import { RemixIcon, IconButton } from '../../components'
import { useTheme } from 'next-themes'

const LightDarkIconButton: React.FC = () => {
	const { theme, setTheme } = useTheme()

	const handleClick = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return (
		<IconButton
			onClick={handleClick}
			className="flex items-center justify-center"
		>
			{theme === 'dark' ? (
				<RemixIcon
					name="ri-sun-fill"
					className="text-md text-foreground transition duration-200 hover:scale-110"
				/>
			) : (
				<RemixIcon
					name="ri-moon-fill"
					className="text-md text-foreground transition duration-200 hover:scale-110"
				/>
			)}
		</IconButton>
	)
}

export default LightDarkIconButton
