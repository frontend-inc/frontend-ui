import React from 'react'
import {
	Typography,
	ListItem,
	ListItemButton,
	ListItemText,
	MenuItem,
} from '@mui/material'
import { MenuButton } from '../../../components'
import { ShopifyAddressType } from 'frontend-shopify'

type ShopifyAddressItemProps = {
	address: ShopifyAddressType
	handleClick: (id: string) => void
	handleEdit: (id: string) => void
	handleDelete: (address: ShopifyAddressType) => void
	disableActions?: boolean
}

const ShopifyAddressItem: React.FC<ShopifyAddressItemProps> = (props) => {
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
						<MenuItem onClick={
              //@ts-ignore
              () => handleEdit(address?.id)}
            >Edit</MenuItem>
						<MenuItem onClick={() => handleDelete(address)}>Delete</MenuItem>
					</MenuButton>
				)
			}
		>
			<ListItemButton onClick={
          //@ts-ignore
          () => handleClick(address?.id)
        } sx={sx.item}>
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

export default ShopifyAddressItem

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
