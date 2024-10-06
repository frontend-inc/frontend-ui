import React from 'react'
import { Stack } from '../../../tailwind'
import { Placeholder, BrandLogos } from '../..'

export type LogosProps = {
	title?: string
	logos: {
		image: string
		title: string
	}[]
}

const Logos: React.FC<LogosProps> = (props) => {
	const { logos = [] } = props

	return (
		<Stack spacing={0} className='w-full'>
			<BrandLogos logos={logos} width={128} height={48} />
			{logos?.length === 0 && (
				<Placeholder
					icon="Image"
					title="No logos"
					description="Logos will appear here"
				/>
			)}
		</Stack>
	)
}

export default Logos
