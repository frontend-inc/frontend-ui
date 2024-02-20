import React from 'react'
import { useResponsive } from '../../hooks'
import { Box, Typography } from '@mui/material'

type SubheaderProps = {
	title: string
	buttons?: any[]
	mb?: number
}

const Subheader: React.FC<SubheaderProps> = (props) => {
	const { title, buttons, mb = 2 } = props
	const { isMobile } = useResponsive()

	return (
		<Box
			sx={{
				...sx.root,
				mb,
			}}
		>
			<Box
				width="100%"
				display="flex"
				flexDirection="row"
				justifyContent="space-between"
			>
				<Box ml={isMobile ? 6 : 3} mt={1.5}>
					<Typography color="textPrimary" variant="h4">
						{title}
					</Typography>
				</Box>
			</Box>
			<Box display="flex" justifyContent="flex-end">
				{buttons &&
					buttons.map((button, i) => (
						<Box m={1} key={i}>
							{button}
						</Box>
					))}
			</Box>
		</Box>
	)
}
export default Subheader

const sx = {
	root: {
		position: 'relative',
		height: 52,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		bgcolor: 'background.paper',
		borderBottom: '1px solid',
		borderColor: 'divider',
		boxShadow: (theme) => `0px 0px 4px 0px ${theme.palette.divider}`,
		background: (theme) =>
			`linear-gradient(#fff, ${theme.palette.background.paper})`,
	},
}
