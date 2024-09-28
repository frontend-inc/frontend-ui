import React from 'react'
import { Stack, Hidden, Button } from '@mui/material'
import { Icon } from '../../../components'
import { useRouter } from 'next/router'
import { RouterParams } from '../../../types'

type CollectionSchemaToggleProps = {
	tab?: number
}

const CollectionSchemaToggle: React.FC<CollectionSchemaToggleProps> = (
	props
) => {
	const router = useRouter()
	const { app_id: appId, collection_id: collectionId } =
		router?.query as RouterParams
	const { tab = 0 } = props

	const handleClick = (path) => {
		router.push(`/dashboard/${appId}/${path}/${collectionId}`)
	}

	return (
		<Stack direction="row" spacing={0.5}>
			<Hidden smDown>
				<Button
					color="secondary"
					sx={{
						...sx.button,
						...(tab == 0 && sx.selected),
					}}
					variant={tab == 0 ? 'contained' : 'text'}
					onClick={() => handleClick('collections')}
					startIcon={<Icon name="Database" color="secondary.contrastText" />}
				>
					Content
				</Button>
				<Button
					sx={{
						...sx.button,
						...(tab == 1 && sx.selected),
					}}
					variant={tab == 1 ? 'contained' : 'text'}
					color="secondary"
					onClick={() => handleClick('schema')}
					startIcon={<Icon name="Type" color="secondary.contrastText" />}
				>
					Fields
				</Button>
			</Hidden>
		</Stack>
	)
}

export default CollectionSchemaToggle

const sx = {
	button: {
		color: 'text.secondary',
	},
	selected: {
		color: 'secondary.contrastText',
		bgcolor: 'secondary.main',
	},
	icon: {
		color: 'secondary.contrastText',
	},
}
