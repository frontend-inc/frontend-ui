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

type DesktopSearchButtonProps = {
	handleClick: () => void
}

const DesktopSearchButton: React.FC<DesktopSearchButtonProps> = (props) => {
	const { handleClick } = props

	return (
		<IconButton sx={sx.root} onClick={handleClick}>
			<Icon name="Search" size={24} />
		</IconButton>
	)
}

type MobileSearchButtonProps = {
	handleClick: () => void
}

const MobileSearchButton: React.FC<MobileSearchButtonProps> = (props) => {
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
	variant?: 'desktop' | 'mobile'
}

const SearchButton: React.FC<SearchButtonProps> = (props) => {
	const { variant = 'desktop', editing = false } = props
	const { toggleSearch } = useContext(ShopContext) as any
	const { setMenuOpen } = useContext(AppContext)

	const handleToggleSearch = () => {
		if (!editing) {
			setMenuOpen(false)
			toggleSearch()
		}
	}

	return variant == 'desktop' ? (
		<DesktopSearchButton handleClick={handleToggleSearch} />
	) : (
		<MobileSearchButton handleClick={handleToggleSearch} />
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
