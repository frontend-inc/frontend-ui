'use client'

import React, { useContext } from 'react'
import { useAdmin } from '../../../hooks'
import { ExpandLeftButton, AdminHeader, Sheet } from '../../../components'
import { Hidden } from '../../core'
import { cn } from 'frontend-shadcn'

type AdminLayoutLeftProps = {
	title?: string
	children: React.ReactNode
	disableBorder?: boolean
}

export default function AdminLayoutLeft(props: AdminLayoutLeftProps) {

  const {
    title,
    children,
  } = props
	
  const { openLayoutLeft, setOpenLayoutLeft } = useAdmin()

	return (
		<>
			<Hidden smDown>
				{openLayoutLeft && (
					<div
						className={cn(
							'bg-background px-3 overflow-y-scroll overflow-x-hidden scrollbar-hide',
							'h-screen sm:min-w-[320px] ml-auto',
							'border-r border-border'
						)}
					>
						<AdminHeader title={title} buttons={<ExpandLeftButton />} />
						<div className="h-[calc(100vh-50px)] w-full">{children}</div>
					</div>
				)}
			</Hidden>
			<Hidden smUp>
				<Sheet
					disablePadding
					side="left"
					open={openLayoutLeft}
					handleClose={() => setOpenLayoutLeft(false)}
				>
					{children}
				</Sheet>
			</Hidden>
		</>
	)
}
