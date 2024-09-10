import React from 'react'
import {
	Stack,
	Box,
	Button,
	Divider,
	Typography,
	List,
	ListItemIcon,
	ListItem,
	ListItemText,
} from '@mui/material'
import { SubscriptionType } from '../../../types'
import { Label, Icon } from '../..'

type SubscriptionTableCardProps = {
	selected?: boolean
	buttonText?: string
	handleClick: () => void
	subscription: SubscriptionType
}

const SubscriptionTableCard: React.FC<SubscriptionTableCardProps> = (props) => {
	const {
		buttonText = 'Subscribe',
		selected,
		handleClick,
		subscription,
	} = props

	return (
		<Box
			sx={{
				...sx.root,
				...(selected && sx.selected),
			}}
		>
			<Stack sx={sx.content} direction="column" spacing={1}>
				{subscription?.label && (
					<Box>
						<Label label={subscription.label} />
					</Box>
				)}
				<Typography variant="body1" color="text.secondary">
					{subscription.name}
				</Typography>
				<Typography variant="h5" color="text.primary">
					{subscription.display_price}
				</Typography>
				<Divider />
				<List dense disablePadding>
					{subscription?.features?.map((feature, i) => (
						<ListItem key={i}>
							<ListItemIcon>
								<Icon name="Check" color="text.secondary" />
							</ListItemIcon>
							<ListItemText
								primary={
									<Typography variant="body1" color="text.primary">
										{feature}
									</Typography>
								}
							/>
						</ListItem>
					))}
				</List>
			</Stack>
			<Button
				onClick={handleClick}
				variant="contained"
				color="primary"
				fullWidth
			>
				{buttonText}
			</Button>
		</Box>
	)
}

export default SubscriptionTableCard

const sx = {
	root: {
		width: '100%',
		p: 2,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		maxWidth: 400,
		border: '1px solid',
		borderColor: 'divider',
		borderRadius: 1,
		transition: 'all 0.3s ease-in-out',
		'&:hover': {
			boxShadow: 6,
		},
	},
	content: {
		minHeight: 300,
	},
	features: {
		whiteSpace: 'pre-line',
		color: 'text.primary',
		mb: 0,
	},
	selected: {
		border: '3px solid',
		borderColor: 'primary.main',
		transform: 'scale(1.05)',
	},
}
