import React from 'react'
import { Stack } from '@mui/material'
import { CardHoriz } from '../../../components'
import { DocumentType } from '../../../types'

type ListViewProps = {
	loading?: boolean
	editing?: boolean
	items: DocumentType[]
	handleClick?: (item: any) => void
	flexDirection?: 'row' | 'column'
	component?: any
	buttonText?: string
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	spacing?: number
	justifyContent?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
}

const ListView: React.FC<ListViewProps> = (props) => {
	const {
		items,
		editing,
		handleClick,
		buttonText,
		flexDirection = 'column',
		component: Component = CardHoriz,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
		spacing = 1,
		justifyContent = 'flex-start',
	} = props

	return (
		<Stack
			sx={{
				...sx.root,
				...(flexDirection === 'row' && sx.row),
				justifyContent: {
					sm: justifyContent,
					xs: 'flex-start',
				},
			}}
			direction={flexDirection}
			spacing={spacing}
		>
			{items?.map((item, index) => (
				<Component
					key={index}
					title={item?.title}
					image={item?.image?.url}
					video={item?.video?.url}
					description={item?.description}
					editing={editing}
					buttonText={buttonText}
					handleClick={() => handleClick(item)}
					enableBorder={enableBorder}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
				/>
			))}
		</Stack>
	)
}

export default ListView

const sx = {
	root: {
		width: '100%',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	row: {
		px: 2,
		overflowX: 'scroll',
		overflowY: 'hidden',
		alignItems: 'center',
		justifyContent: {
			sm: 'center',
			xs: 'flex-start',
		},
	},
}
