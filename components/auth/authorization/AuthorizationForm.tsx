import React from 'react'
import {
	Button,
	Box,
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material'
import { Icon, IconLoading } from 'frontend-ui/components'

type AuthorizeFormProps = {
	loading?: boolean
	app: any
	handleSubmit: any
}

const AuthorizeForm: React.FC<AuthorizeFormProps> = (props) => {
	const { loading, app, handleSubmit } = props

	const permissions = [
		'Your name',
		'Your email address',
		'Your profile picture',
	]

	return (
		<Box sx={sx.root}>
			<Typography variant="h5" sx={sx.title}>
				Do you authorize {app?.name} to access your account?
			</Typography>
			<Typography variant="body2" sx={sx.title}>
				The following information will be shared with <span>{app?.name}</span>:
			</Typography>
			<List disablePadding>
				{permissions.map((permission, index) => (
					<ListItem disableGutters disablePadding key={index}>
						<ListItemIcon sx={sx.listItemIcon}>
							<Typography variant="body2">
								<Icon name="CheckSquare" color="text.secondary" size={20} />
							</Typography>
						</ListItemIcon>
						<ListItemText primary={permission} />
					</ListItem>
				))}
			</List>
			<Button
				fullWidth
				color="primary"
				onClick={handleSubmit}
				variant="contained"
				endIcon={<IconLoading loading={loading} />}
			>
				Continue
			</Button>
			<Box sx={sx.termsAndConditions}>
				<Typography variant="caption">
					By clicking "Continue" you agree to our{' '}
					<Link target="_blank" href="/terms-and-conditions">
						Terms and Conditions
					</Link>
					.
				</Typography>
			</Box>
		</Box>
	)
}

export default AuthorizeForm

const sx = {
	root: {
		mt: 3,
		display: 'flex',
		flexDirection: 'column',
		gap: '20px',
	},
	termsAndConditions: {
		my: 1,
		color: 'text.secondary',
	},
	title: {
		'& span': {
			fontWeight: 700,
		},
	},
	listItemIcon: {
		minWidth: 30,
	},
}
