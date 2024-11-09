'use client'

import React from 'react'
import { ButtonType } from '../../../types'
import { Heading, ButtonActions, Breadcrumbs } from '../../../components'

export type PageHeaderProps = {
	label?: string
	title?: string
	description?: string
	breadcrumbs: {
		label: string
		path: string
	}[]
	buttons: ButtonType[]
	enableBorder?: boolean
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
	const { label, title, description, breadcrumbs, buttons } = props

	return (
		<div className="w-full">
			<div className="px-2 w-full">
				<Breadcrumbs links={breadcrumbs} />
			</div>
			<div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 justify-left items-center sm:justify-between w-full border-b border-divider pb-2">
				<Heading
					label={label}
					title={title}
					description={description}
					size="sm"
					textAlign="left"
					className="py-4"
				/>
				{buttons?.length > 0 && (
					<div className="w-full flex justify-center sm:justify-end pb-2 sm:pb-0">
						<ButtonActions buttons={buttons} />
					</div>
				)}
			</div>
		</div>
	)
}

export default PageHeader
