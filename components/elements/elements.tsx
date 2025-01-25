import React from 'react'
import { Typography } from '../ui'
import { Image as NextUIImage, Card as NextUICard } from '@nextui-org/react'

const Div: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
	const { children, ...rest } = props

	return <div {...rest}>{children}</div>
}

const Button: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (props) => {
	const { children, ...rest } = props

	return <button {...rest}>{children}</button>
}


const Heading: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
	const { children,  ...rest } = props

	return <Typography variant='h3' {...rest}>{children}</Typography>
}

const H1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
	const { children, ...rest } = props

	return <Typography variant='h1' {...rest}>{children}</Typography>
}

const H2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
	const { children, ...rest } = props

	return <Typography variant='h2' {...rest}>{children}</Typography>
}

const H3: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
	const { children, ...rest } = props

	return <Typography variant='h3' {...rest}>{children}</Typography>
}

const H4: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
	const { children, ...rest } = props

	return <Typography variant='h4' {...rest}>{children}</Typography>
}

const H5: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
	const { children, ...rest } = props

	return <Typography variant='h5' {...rest}>{children}</Typography>
}

const H6: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
	const { children, ...rest } = props

	return <Typography variant='h6' {...rest}>{children}</Typography>
}

const Subtitle1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
  const { children, ...rest } = props

  return <Typography variant='subtitle1' {...rest}>{children}</Typography>
}

const Subtitle2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
  const { children, ...rest } = props

  return <Typography variant='subtitle2' {...rest}>{children}</Typography>
}

const P: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = (props) => {
	const { children, ...rest } = props

	return <Typography variant='body1' {...rest}>{children}</Typography>
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
	return <NextUIImage {...rest} />
}

type CardProps = {
  children: React.ReactNode  
}

const Card: React.FC<CardProps> = (props) => {
	const { children, ...rest } = props

	return <NextUICard {...rest}>{children}</NextUICard>
}
const Video: React.FC<React.VideoHTMLAttributes<HTMLVideoElement>> = (
	props
) => {
	return <video {...props} />
}

export {  
	Button,
  Card,	
  Div,
  Heading,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
  Subtitle1,
  Subtitle2,
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
