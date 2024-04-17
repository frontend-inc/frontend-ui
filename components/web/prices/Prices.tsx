import React from 'react'
import { Stack } from '@mui/material'
import PriceCard from './PriceCard'
import { PriceType } from '../../..'
import { Placeholder } from '../../../components'

export type PricesProps = {
	items: PriceType[]
}

const Prices: React.FC<PricesProps> = (props) => {
	const { items } = props

	return (
		<Stack spacing={2}>
			<Stack direction={{ sm: 'row', xs: 'column' }} spacing={1}>
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
