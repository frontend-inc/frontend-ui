'use client'

import React from 'react'
import { ChevronRight } from 'lucide-react'
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbSeparator,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
} from 'frontend-shadcn'

interface BreadcrumbsProps {
	links: { label: string; value: string }[]
	className?: string
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ links, className }) => {
	return (
		<Breadcrumb>
			<BreadcrumbList className={className}>
				{links?.map((link, index) => (
					<BreadcrumbItem key={index}>
						{index == links?.length - 1 ? (
							<>
								<BreadcrumbLink href={link?.value}>
									{link?.label}
								</BreadcrumbLink>
								<BreadcrumbSeparator>
									<ChevronRight className="h-4 w-4" />
								</BreadcrumbSeparator>
							</>
						) : (
							<BreadcrumbPage>{link?.label}</BreadcrumbPage>
						)}
					</BreadcrumbItem>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	)
}

export { Breadcrumbs }
