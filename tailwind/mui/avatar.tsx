import React from 'react'
import {
	Avatar as ShadcnAvatar,
	AvatarImage,
	AvatarFallback,
} from '../../shadcn/ui/avatar'
import { cn } from '../../shadcn/lib/utils'

type AvatarVariant = 'rounded' | 'circular'

interface AvatarProps {
	children?: React.ReactNode
	variant?: AvatarVariant
	fallback?: string
	src?: string
	alt?: string
	className?: string
}

const Avatar: React.FC<AvatarProps> = ({
	children,
	variant = 'circular',
	fallback,
	src,
	alt,
	className,
}) => {
	const avatarClass = cn(
		{
			'rounded-md': variant === 'rounded',
			'rounded-full': variant === 'circular',
		},
		className
	)

	return (
		<ShadcnAvatar className={avatarClass}>
			{src && <AvatarImage src={src} alt={alt} />}
			<AvatarFallback>{fallback || children}</AvatarFallback>
		</ShadcnAvatar>
	)
}

export { Avatar }
