'use client'

import React from 'react'
import { cn } from '@nextui-org/react'

const Div: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children } = props;
  return <div {...props}>{children}</div>;
}

export type VirtualNodeType = {  
  name: string   
  props?: any  
  classNames?: string[]
  innerHTML?: string
  children?: VirtualNodeType[]  
}

type RenderDomProps = {
  name: string   
  props?: any  
  classNames?: string[]
  innerHTML?: string
  children?: VirtualNodeType[]  
  components: {}
}

const RenderDOMComponent: React.FC<RenderDomProps> = (parentProps) => {
  const { name, props, innerHTML, children, classNames, components} = parentProps || {}
  
  const Component = components[name] || Div

  return (
    <Component 
      {...props} 
      
      className={cn(
        ...(classNames || []),
        props?.className,
      )}
    >
      {innerHTML }        
      {children?.map((childNode, index) =>
        <RenderDOMComponent 
          key={index}
          name={ childNode?.name }
          innerHTML={ childNode?.innerHTML }
          classNames={ childNode?.classNames }
          props={ childNode?.props }
          children={ childNode?.children }
          components={components} 
        />          
      )}
    </Component>
  )
}

export default RenderDOMComponent
