'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { Typography } from '../../core'
import { 
  ExpandLeftButton,   
  ExpandRightButton,
  ExpandMobileLeftButton, 
} from '../../../components'
import { useAdmin } from '../../../hooks'

type AdminHeaderProps = {
	title?: string | React.ReactNode
	buttons?: React.ReactNode
	primaryActions?: React.ReactNode
	secondaryActions?: React.ReactNode
	disableBorder?: boolean
	enableExpandLeftPanel?: boolean
	enableExpandRightPanel?: boolean
}

export default function AdminHeader(props: AdminHeaderProps) {

  const {
    title,
    buttons,
    primaryActions,
    secondaryActions,
    enableExpandLeftPanel = false,
    enableExpandRightPanel = false,
    disableBorder = false,
  } = props

	const { openLayoutLeft } = useAdmin()

	return (    
		<div
			className={cn(
				'w-full flex flex-row items-center h-[50px] min-h-[50px]',
				!disableBorder && 'border-b border-border',
			)}
		>
			<div className="grid grid-cols-3 gap-1 w-full">
				<div className="flex flex-row items-center h-full">
					{enableExpandLeftPanel && !openLayoutLeft && <ExpandLeftButton />}
          { enableExpandLeftPanel && <ExpandMobileLeftButton /> }
					{primaryActions}
					{title && (
						<Typography
							variant="body1"
							className="px-2 leading-none break-keep text-foreground"
						>
							{title}
						</Typography>
					)}
				</div>
				<div className="flex flex-row justify-center items-center h-full space-x-1">
					{secondaryActions}
				</div>
				<div className="flex flex-row justify-end items-center h-full">
					{buttons}
					{enableExpandRightPanel && <ExpandRightButton />}
				</div>
			</div>
		</div>
	)
}
