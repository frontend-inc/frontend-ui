'use client'

import React from 'react'
import { useApp } from '../../../hooks'
import { Icon } from '../../../components'
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator
} from 'frontend-shadcn'

export type BreadcrumbType = {
  icon?: string 
	label: string
	path: string
}

export type BreadcrumbsProps = {
	links: BreadcrumbType[]
	className?: string
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
	links = [],
	className,
}) => {
	const { clientUrl } = useApp()

	if (links.length === 0) return null
	return (
    <Breadcrumb>
      <BreadcrumbList>
				{links.map((link, index) => (
					<BreadcrumbItem key={index}>
            <BreadcrumbLink href={`${clientUrl}${link?.path}`}>						
							{link?.label}
						</BreadcrumbLink>
						{index < links.length - 1 && (
              <BreadcrumbSeparator />
						)}
					</BreadcrumbItem>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	)
}

export default Breadcrumbs
