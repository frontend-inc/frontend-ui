import React from 'react'
import { cn } from '@nextui-org/react'

const Div: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
	const { children, text, ...rest } = props

	return <div {...rest}>{text}{children}</div>
}

export default Div
