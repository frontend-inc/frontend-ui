'use client'

import React, { useLayoutEffect, useRef } from 'react'
import { cn } from '@nextui-org/react'

const Div: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
	const { children } = props
	return <div {...props}>{children}</div>
}

export type VirtualNodeType = {
	name: string
	props?: any
	classNames?: string[]
	children?: VirtualNodeType[]
}

type RenderDomProps = {
	isEditing?: boolean
	handleChange?: (ev: any) => void
	name?: string
	component: string
	props?: any
	classNames?: string[]
	children?: VirtualNodeType[]
	components: {}
}

const ROW_HEIGHT = 40 

const RenderDOMNode: React.FC<RenderDomProps> = (parentProps) => {
	const {
		component,
		props,
		children,
		components,
		...rest
	} = parentProps || {}

	const Component = components[component] || Div


	return (
		<Component			
      { ...props }   
      { ...rest }   
			className={cn(props?.className)}
		>
			{children?.map((childNode, index) => (
				<RenderDOMNode
					key={index}
					component={childNode?.name}
					classNames={childNode?.classNames}
					props={childNode?.props}
					children={childNode?.children}
					components={components}
					{...rest}
				/>
			))}
		</Component>
	)
}

export default RenderDOMNode
