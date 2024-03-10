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
import { useAlerts } from '../../../hooks'

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
						<Typography variant="button" color="text.primary">
							Search
						</Typography>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

type SearchButtonProps = {
	editing?: boolean
	variant?: 'topNav' | 'sideNav'
}

const SearchButton: React.FC<SearchButtonProps> = (props) => {
	const { variant = 'topNav', editing = false } = props
  const { showAlertError } = useAlerts()
	const { toggleSearch } = useContext(ShopContext) as any
	const { setMenuOpen } = useContext(AppContext)

	const handleToggleSearch = () => {
		if (!editing) {
			setMenuOpen(false)
			toggleSearch()
		}else{
      showAlertError("Search is disabled while editing.")
    }
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
