'use client'

import React from 'react'
import RenderNode from './RenderNode'
import StaticGridLayout from './StaticGridLayout'
import { Section } from '../../components'
import { cn } from '@nextui-org/react'

const Div: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
	const { children } = props
	return <div {...props}>{children}</div>
}

export type VirtualNodeType = {
  id: string
	name: string
	props?: any
	classNames?: string[]
	children?: VirtualNodeType[]
}

type RenderNodeProps = {
	isEditing?: boolean
	handleChange?: (ev: any) => void
  root: VirtualNodeType
	componentMap: {}
}

const RenderDOM: React.FC<RenderNodeProps> = (parentProps) => {
	const {
		root,
		componentMap,
	} = parentProps || {}

  const { 
    name,
    props,
    children,
    ...rest
  } = root || {}

	const Component = componentMap[name] || Div

  return (
		<Component			
      { ...props }   
      { ...rest }   
			className={cn(props?.className)}
		>      
			{ children?.map((childNode, index) => (
        childNode?.name == 'Grid' ?
        <Section {...childNode.props} py='md' maxWidth="xl">
          <StaticGridLayout 
            key={index}
            nodes={ childNode?.children }
            componentMap={ componentMap }
          /> 
        </Section>:
				<RenderNode
					key={index}
					type={childNode?.name}
					props={childNode?.props}
					children={childNode?.children}
					componentMap={componentMap}
				/>
			))}
		</Component>
	)
}

export default RenderDOM
