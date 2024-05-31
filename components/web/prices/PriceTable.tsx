import React from 'react'
import { Stack } from '@mui/material'
import PriceTableCard from './PriceTableCard'
import { PriceType } from '../../..'
import { Placeholder } from '../..'

export type PriceTableProps = {
	items: PriceType[]
}

const PriceTable: React.FC<PriceTableProps> = (props) => {
	const { items } = props

	return (
		<Stack spacing={2}>
			<Stack direction={{ sm: 'row', xs: 'column' }} spacing={1}>
				{items.map((item, index) => (
					<PriceTableCard 
            key={index} 
            price={item} 
          />
				))}
			</Stack>
			{items?.length === 0 && (
				<Placeholder
					icon="CreditCard"
					title="No subscription plans"
					description="Subscription plans will appear here."
				/>
			)}
		</Stack>
	)
}

export default PriceTable
