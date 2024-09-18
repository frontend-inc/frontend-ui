import React, { useContext } from 'react'
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
import { PriceType } from '../../../types'
import { useRouter } from 'next/router'
import { Label } from '../..'
import { useAuth } from 'frontend-js'
import { AppContext } from '../../../context'
import { formatCurrency } from 'frontend-shopify'

type PriceCardProps = {
	price: PriceType
}

const PriceCard: React.FC<PriceCardProps> = (props) => {
	const router = useRouter()

	const { setAuthOpen } = useContext(AppContext) as any

	const { price } = props

	const { currentUser } = useAuth()

	const handleClick = () => {
		if (!currentUser) {
			setAuthOpen(true)
			return
		}
		if (price.url){
      router.push(price.url)    
		}
	}

	return (
		<Box sx={sx.root}>
			<Stack sx={sx.content} direction="column" spacing={1}>
				{price?.label && (
					<Box>
						<Label label={price.label} />
					</Box>
				)}
				<Typography variant="body1" color="text.secondary">
					{price.title}
				</Typography>
				<Typography variant="h5" color="text.primary">
					{formatCurrency(price.price, 0)}
				</Typography>
				<Divider />
				<List disablePadding>
					{price?.features?.map((feature, i) => (
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
				{price.buttonText}
			</Button>
		</Box>
	)
}

export default PriceCard

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
}
