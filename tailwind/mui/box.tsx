import React from 'react'
import { cn } from '../../shadcn/lib/utils'
import { sxTw } from '../utils'

type BoxProps = {
  children?: React.ReactNode
  component?: React.ElementType
  m?: string
  mt?: string
  mr?: string
  mb?: string
  ml?: string
  mx?: string
  my?: string
  p?: string
  pt?: string
  pr?: string
  pb?: string
  pl?: string
  px?: string
  py?: string
  display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'none'
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch'
  width?: string
  height?: string
  bgcolor?: string
  color?: string
  borderRadius?: string
  boxShadow?: string
  className?: string
  sx?: Record<string, any>
  [x: string]: any // Allow any other props
}

const Box: React.FC<BoxProps> = ({
  children,
  component: Component = 'div',
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  display,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  width,
  height,
  bgcolor,
  color,
  borderRadius,
  boxShadow,
  className,
  sx={},
  ...rest
}) => {

  const sxClassNames = sxTw(sx)

  const classes = cn(
    m && `m-${m}`,
    mt && `mt-${mt}`,
    mr && `mr-${mr}`,
    mb && `mb-${mb}`,
    ml && `ml-${ml}`,
    mx && `mx-${mx}`,
    my && `my-${my}`,
    p && `p-${p}`,
    pt && `pt-${pt}`,
    pr && `pr-${pr}`,
    pb && `pb-${pb}`,
    pl && `pl-${pl}`,
    px && `px-${px}`,
    py && `py-${py}`,
    display && `${display}`,
    flexDirection && `flex-${flexDirection}`,
    flexWrap && `flex-${flexWrap}`,
    justifyContent && `justify-${justifyContent}`,
    alignItems && `items-${alignItems}`,
    alignContent && `content-${alignContent}`,
    width && `w-${width}`,
    height && `h-${height}`,
    bgcolor && `bg-${bgcolor}`,
    color && `text-${color}`,
    borderRadius && `rounded-${borderRadius}`,
    boxShadow && `shadow-${boxShadow}`,
    sxClassNames,
    className,    
  )

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  )
}

export { 
  Box
}