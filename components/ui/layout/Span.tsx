import React from 'react'

type SpanProps = React.HTMLAttributes<HTMLDivElement> & {
  text?: string
}

const Span: React.FC<SpanProps> = (props) => {
	const { children, text, ...rest } = props

	return <div {...rest}>{ text }{children}</div>
}

export default Span
