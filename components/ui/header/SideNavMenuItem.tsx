import React, { useContext, useState } from 'react'
import { AppContext } from '../../../context'
import {
	Collapse,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
	CircularProgress,
	Box,
} from '@mui/material'
import { MenuLinkType } from '../../..'
import { Icon } from '../..'
import { useCollections } from 'frontend-shopify'
import { useRouter } from 'next/router'

type SublinkMenuItemProps = {
	label: string
	handleClick: () => void
}

const SublinkMenuItem: React.FC<SublinkMenuItemProps> = (props) => {
	const { label, handleClick } = props
	return (
		<ListItem sx={sx.subLink} disablePadding>
			<ListItemButton onClick={handleClick}>
				<ListItemText
					primary={
						<Typography variant="subtitle2" color="text.primary">
							{label}
						</Typography>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

type SideNavMenuItemProps = {
	menuItem: MenuLinkType
	handleClick: (path: string) => void
}

const SideNavMenuItem: React.FC<SideNavMenuItemProps> = (props) => {
	const router = useRouter()

	const { menuItem, handleClick } = props

	const [open, setOpen] = useState(false)

	const { children } = menuItem
	const { loading, products, findCollection } = useCollections()

	const handleCollectionClick = () => {
		router.push(`/collections/${menuItem?.shopify_handle}`)
		setOpen(false)
	}

	const handleProductClick = (product) => {
		router.push(`/products/${menuItem?.shopify_handle}`)
		setOpen(false)
	}

	const handleMenuClick = () => {
		if (children?.length > 0) {
			setOpen(false)
      return 
		} 
    if (menuItem?.link_type == 'shopify_collection') {
			setOpen(false)
      findCollection(menuItem?.shopify_handle)
      return 
		} else if (menuItem?.link_type == 'url') {
      window.open(menuItem.url, '_blank')
    } else {
      handleClick(menuItem.path)
    }
	}

	return (
		<>
			<ListItem
				disablePadding
				disableGutters
				secondaryAction={
					(children?.length > 0 || shopify_collection) && (
						<IconButton
							sx={{
								...sx.icon,
								...(open && sx.rotateIcon),
							}}
							onClick={() => handleMenuClick(menuItem)}
						>
							<Icon name="ChevronDown" />
						</IconButton>
					)
				}
			>
				<ListItemButton onClick={() => handleMenuClick(menuItem)}>
					<ListItemText
						primary={
							<Typography variant="subtitle2" color="text.primary">
								{menuItem.name}
							</Typography>
						}
					/>
				</ListItemButton>
			</ListItem>
			<Collapse in={open}>
				<List>
					{children?.map((child, index) => (
						<SublinkMenuItem
							key={index}
							label={child.name}
							handleClick={() => handleMenuItemClick(child)}
						/>
					))}
					{loading && (
						<Box sx={sx.loading}>
							<CircularProgress size={30} />
						</Box>
					)}
					{products?.slice(0, 5)?.map((product, i) => (
						<SublinkMenuItem
							label={product.title}
							handleClick={() => handleProductClick(product)}
						/>
					))}
					{products?.length > 5 && (
						<SublinkMenuItem
							label="See all"
							handleClick={handleCollectionClick}
						/>
					)}
				</List>
			</Collapse>
		</>
	)
}

export default SideNavMenuItem

const sx = {
	icon: {
		transition: 'transform 0.2s ease-in-out',
	},
	rotateIcon: {
		transform: 'rotate(-180deg)',
	},
	subLink: {
		pl: 1,
	},
	loading: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		p: 2,
	},
}
