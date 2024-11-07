'use client'

import React from 'react'
import { useApp } from '../../../hooks'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from 'frontend-shadcn'

export type Breadcrumb = {
	label: string
	path: string
}

export type BreadcrumbsProps = {
	links: Breadcrumb[]
	className?: string
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
	links = [],
	className,
}) => {
	const { clientUrl } = useApp()

	if (links.length === 0) return null

	return (
		<nav aria-label="breadcrumb" className={cn('py-0', className)}>
			<ol className="flex items-center space-x-2">
				{links.map((link, index) => (
					<li key={index} className="flex items-center">
						<Link
							href={`${clientUrl}${link?.path}`}
							className="text-sm text-muted-foreground hover:underline"
						>
							{link?.label}
						</Link>
						{index < links.length - 1 && (
							<ChevronRight className="h-4 w-4 text-muted-foreground mx-1" />
						)}
					</li>
				))}
			</ol>
		</nav>
	)
}

export default Breadcrumbs
