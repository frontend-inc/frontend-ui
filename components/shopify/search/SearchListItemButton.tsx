import React, { useContext } from 'react'
import { 
  ListItem, 
  ListItemText, 
  Typography,
  ListItemButton 
} from '@mui/material'
import { ShopContext } from 'frontend-shopify'
import { AppContext } from '../../../context'

type SearchListItemButtonProps = {
	editing?: boolean
	showIcon?: boolean
	showLabel?: boolean
}

const SearchListItemButton: React.FC<SearchListItemButtonProps> = (props) => {
	const { showIcon = true, editing = false } = props
	const { toggleSearch } = useContext(ShopContext) as any
  const { setMenuOpen  } = useContext(AppContext)

	const handleToggleSearch = () => {
		if (!editing) {
      setMenuOpen(false)
			toggleSearch()
		}
	}

	return (
		<ListItem   
      disablePadding
      disableGutters
    >
      <ListItemButton 
        onClick={ handleToggleSearch }
      >
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

export default SearchListItemButton
