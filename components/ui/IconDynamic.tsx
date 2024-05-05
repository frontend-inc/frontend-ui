import React from 'react';
import { useTheme } from '@mui/material'
import { get } from 'lodash'
import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
  color?: string;
  size?: number;
}

function toKebabCase(text) {
  return text?.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

const LucideIcon: React.FC<IconProps> = (props) => {
	const { name, color = 'text.primary', size = 24 } = props
	const theme = useTheme()
  const LucideIcon = dynamic(dynamicIconImports[toKebabCase(name)]);
    
	return (    
    <LucideIcon color={get(theme.palette, color)} size={size} />  
  )
}
export default LucideIcon
