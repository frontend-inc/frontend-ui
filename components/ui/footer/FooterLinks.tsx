import React from 'react' 
import {
  List,
  ListSubheader,
  ListItem,  
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material'

type FooterLinksProps = {
  menuItem: any
  handleClick: (path: string) => void
}

const FooterLinks: React.FC<FooterLinksProps> = (props) => {

  const { menuItem, handleClick } = props
  const { children } = menuItem || {}

  return(
    <List    
      sx={ sx.list }  
      component="nav"
      subheader={
        <ListSubheader sx={ sx.listSubheader}>
          { menuItem?.label }
        </ListSubheader>
      }
    >
      { children?.map((link, i) => (
        <ListItem 
          key={i}
          disablePadding 
          dense
        >
          <ListItemButton onClick={() => handleClick(link.path)}>
            <ListItemText 
              primary={
                <Typography variant="body1" color='text.primary'>
                  { link.label }
                </Typography>              
              }
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

export default FooterLinks

const sx = {
  listSubheader: {
    bgcolor: 'background.default',
  },
  list: {
    mt: 3,
    minWidth: {
      sm: 120,
      xs: '100%'
    }
  }  
}