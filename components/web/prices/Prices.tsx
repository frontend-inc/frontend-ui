import React from 'react'
import { Stack } from '@mui/material'
import PriceCard from './PriceCard'
import { PriceType } from '../../..'
import { Heading, Placeholder } from '../../../components'

type PricesProps = {
	title?: string
	items: PriceType[]
}

const Prices: React.FC<PricesProps> = (props) => {
	const { title, items } = props

	return (
		<Stack spacing={2}>
			{title && <Heading title={title} textAlign="center" />}
			<Stack direction="row" spacing={1}>
				{items.map((item, index) => (
					<PriceCard key={index} price={item} />
				))}
			</Stack>
			{items?.length === 0 && (
				<Placeholder
					icon="Search"
					title="No content"
					description="Your content will appear here."
				/>
			)}
		</Stack>
	)
}

export default Prices
