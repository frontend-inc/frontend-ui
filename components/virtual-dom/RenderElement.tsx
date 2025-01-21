import React from 'react'

function RenderElement({ node }) {
	// Destructure the current virtual node properties
	const { name, props = {}, children = [] } = node

	// Recursively render children:
	const renderedChildren = children.map((child, index) => {
		// If a child is a string or number, return it directly
		if (typeof child === 'string' || typeof child === 'number') {
			return child
		}
		// Otherwise, assume it's another virtual DOM object and render recursively
		return <RenderElement key={index} node={child} />
	})

	// Create a React element using the tag name, props, and rendered children
	return React.createElement(name, props, ...renderedChildren)
}

export default RenderElement
