import React, { Suspense } from 'react'
import { useTheme } from '@mui/material'
import { get } from 'lodash'
import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { Box } from '@mui/material';

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
  const LucideIcon = dynamic(dynamicIconImports[toKebabCase(name)])
  
  if(!LucideIcon) return <Box sx={sx.filled} />;
	return (
    <LucideIcon color={get(theme.palette, color)} size={size} />  
  )
}
export default LucideIcon

const sx = {
  filled: {
    height: 32,
    width: 32,
    bgcolor: 'red'
  }
}