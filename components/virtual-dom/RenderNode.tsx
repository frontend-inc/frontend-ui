'use client'

import React from 'react'
import { cn } from '@nextui-org/react'
import { StaticGridLayout } from '.'

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

type RenderNodeProps = {
	isEditing?: boolean
	handleChange?: (ev: any) => void
	name?: string
	type: string
	props?: any
	classNames?: string[]
	children?: VirtualNodeType[]
  injectProps?: any
	componentMap: {}
}

const RenderNode: React.FC<RenderNodeProps> = (parentProps) => {
	const {
		type,
		props,
		children,
		componentMap,
    injectProps={},
		...rest
	} = parentProps || {}

	const Component = componentMap[type] || Div

  const isImage = type == 'Image' || type == 'img'
  const isGrid = type == 'Grid' 

  if(isImage){
    return(<Component			
      { ...injectProps }
      { ...props }         
      { ...rest }   
			className={cn(props?.className)}
		/>)
  }
  if(isGrid){
    <StaticGridLayout 
      nodes={ children }
      componentMap={ componentMap }
    />
  }  
	return (
		<Component			
      { ...injectProps }
      { ...props }   
      { ...rest }   
			className={cn(props?.className)}
		>
			{ children?.map((childNode, index) => (
				<RenderNode
					key={index}
					type={childNode?.name}
					classNames={childNode?.classNames}
					props={childNode?.props}          
					children={childNode?.children}
					componentMap={componentMap}
          { ...injectProps }
					{...rest}
				/>
			))}
		</Component>
	)
}

export default RenderNode
