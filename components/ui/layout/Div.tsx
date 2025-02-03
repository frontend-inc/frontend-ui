import React from 'react'

type DivProps = React.HTMLAttributes<HTMLDivElement> & {
  text?: string
}

const Div: React.FC<DivProps> = (props) => {
	const { children, text, ...rest } = props

	return <div {...rest}>{ text }{children}</div>
}

export default Div
