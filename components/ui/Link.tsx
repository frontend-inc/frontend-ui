import React from 'react'
import {Link as NextUILink} from "@nextui-org/react";
import { useNavigate } from '../../hooks'

type LinkProps = {
  text: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  url?: string
  path?: string
  children: React.ReactNode | string
  className?: string
}

const Link: React.FC<LinkProps> = (props) => {

  const { 
    size='md',
    color='default',
    url,
    path,
    text,
    className,
    children  
  } = props 

  const onClick = useNavigate({ url, path })

  return(
    <NextUILink 
      size={size} 
      color={ color } 
      //@ts-ignore
      onPress={ onClick }
      className={ className }
      href="#"
    >
      { text }{ children }      
    </NextUILink>
  )
}

export default Link

