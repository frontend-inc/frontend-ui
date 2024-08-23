import React from 'react'
import { Grid, Stack, Box, Typography } from '@mui/material'
import { ExpandLeftButton, ExpandRightButton } from '../../../components'
import { TypographyVariantsType } from '../../../types'
import { useAdmin } from '../../../hooks'

type AdminHeaderProps = {
	title?: string | React.ReactNode
	buttons?: React.ReactNode
	variant?: TypographyVariantsType
	primaryActions?: React.ReactNode
	secondaryActions?: React.ReactNode
	disableBorder?: boolean
	enableExpandLeftPanel?: boolean
	enableExpandRightPanel?: boolean
}

const AdminHeader: React.FC<AdminHeaderProps> = (props) => {
	const {
		title,
		buttons,
		variant = 'overline',
		primaryActions,
		secondaryActions,
		enableExpandLeftPanel = false,
		enableExpandRightPanel = false,
		disableBorder = false,
	} = props

	const { openLayoutLeft } = useAdmin()

	return (
		<Box
			sx={{
				...sx.root,
				...(disableBorder && sx.disableBorder),
			}}
		>
			<Grid container spacing={1}>
				<Grid item xs={4} sm={4}>
					<Box sx={sx.container}>
						{enableExpandLeftPanel && !openLayoutLeft && <ExpandLeftButton />}
						{primaryActions && primaryActions}
						{title && (
							<Typography variant={variant} sx={sx.title} color="text.primary">
								{title}
							</Typography>
						)}
					</Box>
				</Grid>
				<Grid item xs={4} sm={4}>
					<Stack sx={sx.secondaryActions} direction="row" spacing={1}>
						{secondaryActions && secondaryActions}
					</Stack>
				</Grid>
				<Grid item xs={4} sm={4}>
					<Box sx={sx.buttons}>
						{buttons}
						{enableExpandRightPanel && <ExpandRightButton />}
					</Box>
				</Grid>
			</Grid>
		</Box>
	)
}

export default AdminHeader

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		height: 50,
		minHeight: 50,
		px: 0.5,
		bgcolor: 'background.main',
		borderBottom: '1px solid',
		borderColor: 'divider',
		zIndex: (theme) => theme.zIndex.appBar,
	},
	disableBorder: {
		borderBottom: 'none',
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		height: '100%',
	},
	title: {
		px: 1,
		lineHeight: 1.0,
		wordBreak: 'keep-all',
	},
	buttons: {
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	secondaryActions: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
	},
}
