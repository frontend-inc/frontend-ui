'use client'

import React, { useEffect } from 'react'
import { Hidden } from '../../core'
import { useAdmin } from '../../../hooks'
import { Sheet } from '../../../components'

type AdminLayoutRightProps = {
	title?: string
	children?: React.ReactNode
}

const AdminLayoutRight: React.FC<AdminLayoutRightProps> = (props) => {
	const { children, title } = props
	const { openLayoutRight, setOpenLayoutRight } = useAdmin()

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
					disablePadding
					title={title}
					open={openLayoutRight}
					handleClose={() => setOpenLayoutRight(false)}
				>
					{children}
				</Sheet>
			</Hidden>
		</div>
	)
}

export default AdminLayoutRight
