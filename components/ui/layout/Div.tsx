import React from 'react'
import { cn } from '@nextui-org/react'

const Div: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
	const { children, ...rest } = props

	return <div {...rest}>{children}</div>
}

export default Div
