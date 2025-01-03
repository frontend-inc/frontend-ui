import React from 'react'
import parse from 'html-react-parser'

export type HtmlProps = {
	html: string
}

const Html: React.FC<HtmlProps> = (props) => {
	const { html } = props || {}
	return parse(html)
}

export default Html
