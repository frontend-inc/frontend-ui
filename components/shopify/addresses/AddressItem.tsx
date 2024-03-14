import React from 'react'
import {
	Typography,
	ListItem,
	ListItemButton,
	ListItemText,
	MenuItem,
} from '@mui/material'
import { MenuButton } from '../../../components'
import { AddressType } from 'frontend-shopify'

type AddressItemProps = {
	address: AddressType
	handleClick?: (id: string) => void
	handleEdit?: (id: string) => void
	handleDelete?: (address: AddressType) => void
	disableActions?: boolean
}

const AddressItem: React.FC<AddressItemProps> = (props) => {
	const {
		address,
		handleClick,
		handleEdit,
		handleDelete,
		disableActions = false,
	} = props

	return (
		<ListItem
			disableGutters
			secondaryAction={
				!disableActions && (
					<MenuButton>
						<MenuItem onClick={() => handleEdit(address?.id)}>Edit</MenuItem>
						<MenuItem onClick={() => handleDelete(address)}>Delete</MenuItem>
					</MenuButton>
				)
			}
		>
			<ListItemButton onClick={() => handleClick(address?.id)} sx={sx.item}>
				<ListItemText
					primary={
						<Typography gutterBottom variant="subtitle1">
							{address?.firstName} {address?.lastName}
						</Typography>
					}
					secondary={
						<>
							<Typography gutterBottom variant="body2" color="textSecondary">
								{address.address1}
							</Typography>
							{address.address2 && (
								<Typography gutterBottom variant="body2" color="textSecondary">
									{address.address2}
								</Typography>
							)}
							<Typography gutterBottom variant="body2" color="textSecondary">
								{address?.city}, {address?.province} {address?.zip}
							</Typography>
						</>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

export default AddressItem

const sx = {
	root: {},
	button: {
		p: 0,
	},
	item: {
		borderRadius: '10px',
		m: 0,
		width: '100%',
		maxWidth: '100%',
	},
	card: {
		borderRadius: '10px',
		backgroundColor: 'primary.contrastText',
		borderColor: 'common.card',
	},
}
