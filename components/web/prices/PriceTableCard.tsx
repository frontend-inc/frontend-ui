
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
	label?: string
  title: string
  description?: string
  features?: string[]
  price: string
  buttonText?: string
  url?: string
}

const PriceCard: React.FC<PriceCardProps> = (props) => {
	const router = useRouter()
	const { setAuthOpen } = useContext(AppContext) as any
	const { label, title, description, features, buttonText, price, url  } = props

	const handleClick = () => {		
		if (url) {
			router.push(url)
		}
	}

	return (
		<Box className="w-full border border-divider rounded p-2 flex flex-col justify-between">
			<Stack className="min-h-[300px]" direction="column" spacing={1}>
				{label && (
					<Box>
						<Label label={label} />
					</Box>
				)}
				<Typography variant="body1">
					{title}
				</Typography>
				<Typography variant="h5">
					{price}
				</Typography>
				<Divider />
				<List>
					{features?.map((feature, i) => (
						<ListItem key={i}>
							<ListItemText
								primary={feature}
							/>
						</ListItem>
					))}
				</List>
			</Stack>
      { buttonText && (
			<Button
				onClick={handleClick}
				variant="contained"
			>
				{buttonText}
			</Button>
      )}
		</Box>
	)
}

export default PriceCard
