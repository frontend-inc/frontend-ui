import React from 'react'
import { useTheme } from '@mui/material'
import * as icons from 'lucide-react'
import { get } from 'lodash'

type LucideIconProps = {
	name: string
	color?: string
	size?: number
}

const LucideIcon: React.FC<LucideIconProps> = (props) => {
	const { name, color = 'text.primary', size = 20 } = props
	const theme = useTheme()
	const Icon = icons[name]
	if (!Icon) return null
	return <Icon color={get(theme.palette, color)} size={size} />
}
export default LucideIcon
