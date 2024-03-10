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
  Divider, 
  MenuItem, 
} from '@mui/material'
import { useMenu } from '../../../hooks'
import { MenuLink } from '../../..'
import { ExpandMore } from '@mui/icons-material'
import { useCollections } from 'frontend-shopify'
import { useRouter } from 'next/router'

type SublinkMenuItemProps = {
  label: string
  handleClick: () => void
}

const SublinkMenuItem: React.FC<SublinkMenuItemProps> = (props) => {  

  const { label, handleClick } = props 
  return(
    <ListItem       
      sx={sx.subLink} 
      disablePadding              
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText
          primary={
            <Typography variant="button" color="text.primary">
              { label }
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  )
}

type SideNavMenuItemProps = {
	menuItem: MenuLink
	handleClick: (path: string) => void
}

const SideNavMenuItem: React.FC<SideNavMenuItemProps> = (props) => {
  const router = useRouter()
  const { setMenuOpen, clientUrl } = useContext(AppContext)

  const { menuItem, handleClick } = props    

  const [open, setOpen] = useState(false)

  const { children, shopify_collection } = menuItem  
  const { loading, products, findCollection } = useCollections()

  const handleCollectionClick = () => {
    router.push(`${clientUrl}/collections/${shopify_collection}`)
    setOpen(false)
    setMenuOpen(false)
  }

  const handleProductClick = (product) => {
    router.push(`${clientUrl}/products/${product.handle}`)
    setMenuOpen(false)
  }

  const handleMenuItemClick = (menuItem) => {
    setMenuOpen(false)
    handleClick(menuItem?.path)    
  }

	const handleMenuClick = (ev) => {
		if (children?.length > 0 || shopify_collection) {
			setOpen(!open) 
    }else{
      handleMenuItemClick(menuItem)
    } 
    if(shopify_collection && !open && !products){    
      findCollection(shopify_collection)      
    }    
	}

	return (
		<>
			<ListItem
				disablePadding
				disableGutters
				secondaryAction={
					(children?.length > 0 || shopify_collection) && (
						<IconButton onClick={() => handleMenuClick(menuItem)}>
							<ExpandMore
								sx={{
									...sx.icon,
									...(open && sx.rotateIcon),
								}}
							/>
						</IconButton>
					)
				}
			>
				<ListItemButton onClick={() => handleMenuClick(menuItem)}>
					<ListItemText
						primary={
							<Typography variant="button" color="text.primary">
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
              key={ index }
              label={ child.name }
              handleClick={() => handleMenuItemClick(child) }              
            />              
					))}
          { loading && (
          <Box sx={ sx.loading }>
            <CircularProgress size={30} />
          </Box>
        )}
        { products?.slice(0,5)?.map((product, i) => (
          <SublinkMenuItem 
            label={ product.title }
            handleClick={() => handleProductClick(product) }
          />
        ))}
        { products?.length > 5 && (
          <SublinkMenuItem
            label="See all"
            handleClick={ handleCollectionClick }
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
    p: 2
  }
}
