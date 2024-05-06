import React, { ReactNode } from 'react'
import { Box } from '@mui/material'
import { Alert, LayoutScroll } from '../../../components'
import { Notifications } from '../../../components'
import { NotificationType } from '../../../types'

type LayoutContainerProps = {
	handleClick: (item: any) => void
	children: ReactNode
	header?: ReactNode
	footer?: ReactNode
	enableSideNav?: boolean
	notifications: NotificationType[]
	offsetY?: number
  offsetX?: number
}

const LayoutContainer: React.FC<LayoutContainerProps> = (props) => {
	const {
		children,
		header,
		footer,
		notifications,
		enableSideNav = false,
    offsetX=0,
    offsetY=0, 
	} = props

	return (
		<Box 
      sx={{
        ...sx.layout,
        height: {
          sm: `calc(100vh - ${offsetY}px)`,
          xs: '100vh',
        },
      }}
      >
			<Alert />
			{notifications?.length > 0 && (
				<Notifications notifications={notifications} />
			)}
			<Box
				sx={{
					...sx.root,
					...(enableSideNav && sx.sideNav),          
				}}
			>
				{header}
				<Box
					sx={{
						...sx.content,
						...(enableSideNav ? sx.contentSideNav : sx.contentTopNav),
            height: {
              sm: `calc(100vh - ${offsetY - 80}px)`,
              xs: '100vh',
            }
					}}
				>
					<LayoutScroll>
						<Box
							sx={{
								...sx.page,
								minHeight: {
									sm: `calc(100vh - ${offsetY - 30}px)`,
									xs: '100vh',
								},
							}}
						>
							{children}
						</Box>
						{footer}
					</LayoutScroll>
				</Box>
			</Box>
		</Box>
	)
}

export default LayoutContainer

const sx = {
	layout: {
		width: '100%',
    overflowY: 'hidden'
	},
	root: {
		width: '100%',
		height: '100%',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
		bgcolor: 'background.default',
	},
	sideNav: {
		display: 'flex',
		flexDirection: {
			md: 'row',
			xs: 'column',
		},
		pt: {
			sm: 0,
			xs: '60px',
		},
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	contentSideNav: {
		width: {
			md: 'calc(100% - 280px)',
			xs: '100%',
		},
		height: '100%',
		maxHeight: '100vh',
	},
	contentTopNav: {
		pt: '60px',
		minHeight: 'calc(100% - 60px)',
	},
	page: {
		width: '100%',
		bgcolor: 'background.default',
	},
}
