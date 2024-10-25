'use client'

import React from 'react'
import { ButtonType } from '../../../types'
import { Heading, ButtonActions, Breadcrumbs } from '../../../components'

export type PageHeaderProps = {
	label?: string
	title?: string
	description?: string
	links: {
		label: string
		path: string
	}[]
	maxLinks?: number
	buttons: ButtonType[]
	resource?: any
	enableBorder?: boolean
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
	const { label, title, description, links, buttons } = props

	return (
		<div className="w-full flex flex-col space-y-1">
			<Breadcrumbs links={links} />
			<div className="flex flex-col space-y-1 justify-between w-full border-b border-divider pb-1">
				<Heading
					label={label}
					title={title}
					description={description}
					textAlign="left"
				/>
				{buttons?.length > 0 && (
					<div className="flex items-start justify-end sm:pb-0 xs:pb-1">
						<ButtonActions buttons={buttons} />
					</div>
				)}
			</div>
		</div>
	)
}

export default PageHeader
