
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
} from '../../../tailwind'
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
		if (price.url) {
			router.push(price.url)
		}
	}

	return (
		<Box className="w-full border border-divider rounded p-2 flex flex-col justify-between">
			<Stack className="min-h-[300px]" direction="column" spacing={1}>
				{price?.label && (
					<Box>
						<Label label={price.label} />
					</Box>
				)}
				<Typography variant="body1" className="text-secondary">
					{price.title}
				</Typography>
				<Typography variant="h5" className="text-primary">
					{formatCurrency(price.price, 0)}
				</Typography>
				<Divider />
				<List>
					{price?.features?.map((feature, i) => (
						<ListItem key={i}>
							<ListItemText
								primary={
									<Typography variant="body1" className="text-primary">
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
			>
				{price.buttonText}
			</Button>
		</Box>
	)
}

export default PriceCard
