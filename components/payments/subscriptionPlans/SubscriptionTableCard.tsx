import React from 'react'
import {
	Stack,
	Box,
	Button,
	Divider,
	Typography,
	List,
	ListItem,
	ListItemText,
} from '@mui/material'
import { SubscriptionPlanType } from '../../../types'
import { Label } from '../..'

type SubscriptionTableCardProps = {
	selected?: boolean
  buttonText?: string
  handleClick: () => void
  subscriptionPlan: SubscriptionPlanType
}

const SubscriptionTableCard: React.FC<SubscriptionTableCardProps> = (props) => {
  const { 
    buttonText='Subscribe',
    selected, 
    handleClick, 
    subscriptionPlan 
  } = props 
  
	return (
		<Box 
      sx={{
        ...sx.root,
        ...(selected && sx.selected)
      }}
    >
			<Stack sx={sx.content} direction="column" spacing={1}>
				{subscriptionPlan?.label && (
					<Box>
						<Label label={subscriptionPlan.label} />
					</Box>
				)}
				<Typography variant="body1" color="text.secondary">
					{subscriptionPlan.name}
				</Typography>
				<Typography variant="h5" color="text.primary">
					{ subscriptionPlan.display_price }          
				</Typography>
				<Divider />
				<List disablePadding>
					{subscriptionPlan?.features?.map((feature, i) => (
						<ListItem key={i}>
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
				{ buttonText }
			</Button>
		</Box>
	)
}

export default SubscriptionTableCard

const sx = {
	root: {
		width: '100%',
		border: '1px solid',
		borderColor: 'divider',
		borderRadius: 1,
		p: 2,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
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
    border: '2px solid',
		borderColor: 'primary.main',
  }
}
