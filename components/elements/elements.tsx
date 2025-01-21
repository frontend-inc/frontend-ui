import React from 'react'

const Div: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
	const { children, ...rest } = props

	return <div {...rest}>{children}</div>
}

const Button: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (props) => {
	const { children, ...rest } = props

	return <button {...rest}>{children}</button>
}

const H1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
	const { children, ...rest } = props

	return <h1 {...rest}>{children}</h1>
}

const H2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
	const { children, ...rest } = props

	return <h2 {...rest}>{children}</h2>
}

const H3: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
	const { children, ...rest } = props

	return <h3 {...rest}>{children}</h3>
}

const H4: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
	const { children, ...rest } = props

	return <h4 {...rest}>{children}</h4>
}

const H5: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
	const { children, ...rest } = props

	return <h5 {...rest}>{children}</h5>
}

const H6: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
	const { children, ...rest } = props

	return <h6 {...rest}>{children}</h6>
}

const P: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = (props) => {
	const { children, ...rest } = props

	return <p {...rest}>{children}</p>
}

const Span: React.FC<React.HTMLAttributes<HTMLSpanElement>> = (props) => {
	const { children, ...rest } = props

	return <span {...rest}>{children}</span>
}

const Section: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
	const { children, ...rest } = props

	return <section {...rest}>{children}</section>
}

const Nav: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
	const { children, ...rest } = props

	return <nav {...rest}>{children}</nav>
}

const Footer: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
	const { children, ...rest } = props

	return <footer {...rest}>{children}</footer>
}

const Ul: React.FC<React.HTMLAttributes<HTMLUListElement>> = (props) => {
	const { children, ...rest } = props

	return <ul {...rest}>{children}</ul>
}

const Ol: React.FC<React.HTMLAttributes<HTMLOListElement>> = (props) => {
	const { children, ...rest } = props

	return <ol {...rest}>{children}</ol>
}

const Li: React.FC<React.HTMLAttributes<HTMLLIElement>> = (props) => {
	const { children, ...rest } = props

	return <li {...rest}>{children}</li>
}

const A: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => {
	const { children, ...rest } = props

	return <a {...rest}>{children}</a>
}

const Img: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
	const { children, ...rest } = props || {}
	return <img {...rest} />
}

const Video: React.FC<React.VideoHTMLAttributes<HTMLVideoElement>> = (
	props
) => {
	return <video {...props} />
}

export {
	Div,
	Button,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	P,
	Span,
	Section,
	Nav,
	Footer,
	Ul,
	Ol,
	Li,
	A,
	Img,
	Video,
}
