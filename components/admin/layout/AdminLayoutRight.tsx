'use client'

import React from 'react'
import { Hidden } from '../../core'
import { useAdmin } from '../../../hooks'
import { Sheet } from '../../../components'

type AdminLayoutRightProps = {
	title?: string
	children?: React.ReactNode
}

const AdminLayoutRight: React.FC<AdminLayoutRightProps> = (props) => {
	const { children, title } = props
	const { 
    openLayoutRight, 
    openMobileRight, 
    setOpenMobileRight 
  } = useAdmin()

	return (
		<div>
			<Hidden smDown>
				{openLayoutRight && (
					<div className="px-3 w-[300px] min-w-[300px] h-screen">
						{children}
					</div>
				)}
			</Hidden>
			<Hidden smUp>
				<Sheet
					title={title}
					open={openMobileRight}
					handleClose={() => setOpenMobileRight(false)}
				>
					{children}
				</Sheet>
			</Hidden>
		</div>
	)
}

export default AdminLayoutRight
