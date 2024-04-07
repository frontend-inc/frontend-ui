import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import {
	CircularProgress,
	Box,
	Divider,
	Button,
	Menu,
	MenuItem,
	Typography,
} from '@mui/material'
import { useMenu } from '../../../hooks'
import { MenuLinkType } from '../../..'
import { Icon } from '../../../components'
import { useCollections } from 'frontend-shopify'
import { useRouter } from 'next/router'

type TopNavMenuItemProps = {
	menuItem: MenuLinkType
	handleClick: (path: string) => void
}

const TopNavMenuItem: React.FC<TopNavMenuItemProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

	const { menuItem, handleClick } = props

	const { children, shopify_collection } = menuItem

	const { loading, products, findCollection } = useCollections()

	const { open, openMenu, closeMenu, anchorEl } = useMenu()

	const handleCollectionClick = () => {
		router.push(`${clientUrl}/collections/${shopify_collection}`)
		closeMenu()
	}

	const handleProductClick = (product) => {
		router.push(`${clientUrl}/products/${product.handle}`)
		closeMenu()
	}

	const handleMenuClick = (ev) => {
		if (children?.length > 0 || shopify_collection) {
			openMenu(ev)
		} else {
			closeMenu()
			if (menuItem?.link_type == 'url') {
				window.open(menuItem.url, '_blank')
			} else {
				handleClick(menuItem.path)
			}
		}
		if (shopify_collection && !products) {
			findCollection(shopify_collection)
		}
	}

	const handleMouseLeave = () => {
		closeMenu()
	}

	return (
		<>
			<Button
				sx={sx.menuButton}
				onClick={handleMenuClick}
				endIcon={
					(children?.length > 0 || shopify_collection) && (
						<Box
							sx={{
								...sx.icon,
								...(open && sx.rotateIcon),
							}}
						>
							<Icon name="ChevronDown" />
						</Box>
					)
				}
			>
				{menuItem.name}
			</Button>
			<Menu
				open={open}
				anchorEl={anchorEl}
				onClose={closeMenu}
				MenuListProps={{
					onMouseLeave: handleMouseLeave,
				}}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				{children?.map((child, index) => (
					<MenuItem
						//@ts-ignore
						onClick={() => handleClick(child.path)}
					>
						<Typography variant="button" color="text.primary">
							{child.name}
						</Typography>
					</MenuItem>
				))}
				{loading && (
					<Box sx={sx.loading}>
						<CircularProgress size={30} />
					</Box>
				)}
				{products?.slice(0, 5)?.map((product, i) => (
					<MenuItem key={i} onClick={() => handleProductClick(product)}>
						<Typography variant="button" color="text.primary">
							{product.title}
						</Typography>
					</MenuItem>
				))}
				{products?.length > 5 && (
					<>
						<Divider />
						<MenuItem onClick={handleCollectionClick}>
							<Typography variant="button" color="text.primary">
								See All
							</Typography>
						</MenuItem>
					</>
				)}
			</Menu>
		</>
	)
}

export default TopNavMenuItem

const sx = {
	menuButton: {
		cursor: 'pointer',
		justifyContent: 'flex-start',
		bgcolor: 'background.default',
		color: 'text.primary',
		borderRight: 'none !important',
	},
	iconButton: {
		'&:hover': {
			bgcolor: 'transparent',
		},
	},
	icon: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: 'text.primary',
		transition: 'transform 0.2s ease-in-out',
	},
	rotateIcon: {
		transform: 'rotate(-180deg)',
	},
	loading: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		p: 2,
	},
}
