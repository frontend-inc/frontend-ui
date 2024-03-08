import React, { useContext } from 'react'
import { Button, IconButton } from '@mui/material'
import { ShopContext } from 'frontend-shopify'
import { AppContext } from '../../../context'
import { Icon } from '../../../components'

type SearchButtonProps = {
	editing?: boolean
}

const SearchButton: React.FC<SearchButtonProps> = (props) => {
	const { editing = false } = props
	const { toggleSearch } = useContext(ShopContext) as any
  const { setMenuOpen  } = useContext(AppContext)

	const handleToggleSearch = () => {
		if (!editing) {
      setMenuOpen(false)
			toggleSearch()
		}
	}

	return (
    <IconButton sx={sx.root} onClick={handleToggleSearch}>
      <Icon name="Search" size={24} />
    </IconButton>
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
