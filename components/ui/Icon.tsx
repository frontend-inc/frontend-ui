import React from 'react'
import * as icons from 'lucide-react'
import { cn } from '../../shadcn/lib/utils'

type LucideIconProps = {
	name: string
	color?: string
	size?: number
	className?: string
}

const LucideIcon: React.FC<LucideIconProps> = ({
	name,
	color = 'text-foreground',
	className,
	size = 20,
}) => {

	const Icon = icons[name]
	if (!Icon) return null

	return (
		//@ts-ignore
		<Icon className={cn(color, className, 'w-5 h-5')} size={size} />
	)
}

export default LucideIcon
