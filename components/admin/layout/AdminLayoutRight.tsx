import React, { useEffect } from 'react'
import { Hidden } from '../../../tailwind'
import { useAdmin } from '../../../hooks'
import { Drawer } from '../../../components'
import { useResponsive } from '../../../hooks'

type AdminLayoutRightProps = {
	title?: string
	children?: React.ReactNode
}

const AdminLayoutRight: React.FC<AdminLayoutRightProps> = (props) => {
	const { children, title } = props
	const { openLayoutRight, setOpenLayoutRight } = useAdmin()

	const { breakpoint } = useResponsive()

	useEffect(() => {
		if (breakpoint == 'md' || breakpoint == 'sm') {
			setOpenLayoutRight(false)
		}
	}, [breakpoint])

	return (
		<div className='dark'>
			<Hidden smDown>
				{openLayoutRight && (
          <div className='dark border-l border-border w-[300px] min-w-[300px] h-screen'>{children}</div>
        )}
			</Hidden>
			<Hidden smUp>
				<Drawer
          mode='dark'
					disablePadding
					title={title}
					open={openLayoutRight}
					handleClose={() => setOpenLayoutRight(false)}
				>
					{children}
				</Drawer>
			</Hidden>
		</div>
	)
}

export default AdminLayoutRight
