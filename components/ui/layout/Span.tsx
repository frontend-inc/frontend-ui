import React from 'react'

type SpanProps = React.HTMLAttributes<HTMLSpanElement> & {
  text?: string
}

const Span: React.FC<SpanProps> = (props) => {
	const { children, text, ...rest } = props

	return <span {...rest}>{text}{children}</span>
}

export default Span
