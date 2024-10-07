import React from 'react'
import { cn } from '../../../shadcn/lib/utils'

type LightDarkModeProps = {
	mode: 'dark' | 'light' | 'accent'
	children: React.ReactNode
}

const LightDarkMode: React.FC<LightDarkModeProps> = (props) => {
	const { mode, children } = props || {}

	return <div className={cn(mode === 'dark' ? 'dark' : 'light')}>{children}</div>
}

export default LightDarkMode
