import React from 'react'
import { Typography, List, ListItem, ListItemText, Link } from '@mui/material'

type RichTextProps = {
	value: string
}

const RichText: React.FC<RichTextProps> = (props) => {
	let { value } = props
	if (typeof value === 'string') {
		value = JSON.parse(value)
	}

	const rendervalue = (value, inList = false) => {
		if (!value) return null

		if (value.type === 'root' && value.children?.length > 0) {
			return (
				<div>
					{value.children.map((child, index) => rendervalue(child, inList))}
				</div>
			)
		} else if (Array.isArray(value)) {
			return value.map((el, index) => renderElement(el, index, inList))
		} else {
			return renderElement(value, undefined, inList)
		}
	}

	const renderElement = (el, key, inList) => {
		switch (el.type) {
			case 'paragraph':
				return (
					<Typography my={1} key={key} variant="body1">
						{rendervalue(el.children, inList)}
					</Typography>
				)
			case 'heading':
				return (
					// @ts-ignore
					<Typography key={key} variant={`h${el.level}`}>
						{rendervalue(el.children, inList)}
					</Typography>
				)
			case 'list':
				return (
					<List key={key} component={el.listType === 'ordered' ? 'ol' : 'ul'}>
						{rendervalue(el.children, true)}
					</List>
				)
			case 'list-item':
				return <ListItem key={key}>{rendervalue(el.children, true)}</ListItem>
			case 'link':
				return (
					<Link key={key} href={el.url} title={el.title} target={el.target}>
						{rendervalue(el.children, inList)}
					</Link>
				)
			case 'text':
				return renderText(el, key, inList)
			default:
				return null
		}
	}

	const renderText = (el, key, inList) => {
		let textElement = (
			<span key={key}>
				{el.bold ? <strong>{el.value}</strong> : null}
				{el.italic ? <em>{el.value}</em> : null}
				{!el.bold && !el.italic ? el.value : null}
			</span>
		)

		if (inList) {
			textElement = <ListItemText key={key} primary={textElement} />
		}

		return textElement
	}

	return <>{rendervalue(value)}</>
}

export default RichText
