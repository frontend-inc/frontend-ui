import React, { useContext } from 'react'
import { IconButton } from '@mui/material'
import {
	ListItem,
	ListItemText,
	ListItemButton,
	Typography,
} from '@mui/material'
import { ShopContext } from 'frontend-shopify'
import { AppContext } from '../../../context'
import { Icon } from '../../../components'

type TopNavSearchButtonProps = {
	handleClick: () => void
}

const TopNavSearchButton: React.FC<TopNavSearchButtonProps> = (props) => {
	const { handleClick } = props

	return (
		<IconButton sx={sx.root} onClick={handleClick}>
			<Icon name="Search" size={24} />
		</IconButton>
	)
}

type SideNavSearchButtonProps = {
	handleClick: () => void
}

const SideNavSearchButton: React.FC<SideNavSearchButtonProps> = (props) => {
	const { handleClick } = props

	return (
		<ListItem disablePadding disableGutters>
			<ListItemButton onClick={handleClick}>
				<ListItemText
					primary={
						<Typography variant="subtitle2" color="text.primary">
							Search
						</Typography>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

type SearchButtonProps = {
	variant?: 'topNav' | 'sideNav'
}

const SearchButton: React.FC<SearchButtonProps> = (props) => {
	const { variant = 'topNav' } = props
	const { toggleSearch } = useContext(ShopContext) as any
	const { setMenuOpen } = useContext(AppContext)

	const handleToggleSearch = () => {
		setMenuOpen(false)
		toggleSearch()
	}

	return variant == 'topNav' ? (
		<TopNavSearchButton handleClick={handleToggleSearch} />
	) : (
		<SideNavSearchButton handleClick={handleToggleSearch} />
	)
}

export default SearchButton

const sx = {
	root: {
		px: 1,
	},
	button: {
		color: 'text.primary',
		justifyContent: 'flex-start',
	},
}
