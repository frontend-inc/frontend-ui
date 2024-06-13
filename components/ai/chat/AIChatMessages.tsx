import React from 'react'
import {
  Avatar,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
  ListItemIcon
} from '@mui/material'

type AIChatMessagesProps = {
  avatar?: string
	messages: any[]
}

const AIChatMessages: React.FC<AIChatMessagesProps> = (props) => {
	
  const {
    avatar,
		messages
	} = props

	return (    
    <List disablePadding>
      {messages
        ?.filter(message => message.role != 'system')
        ?.map((message, i) => (
      <ListItem key={i} disablePadding sx={sx.listItem}>          
        <ListItemIcon sx={ sx.listItemIcon}>
          {(avatar && message.role == 'assistant') && (
            <Avatar 
              src={ avatar }
            />                  
          )}
        </ListItemIcon>          
        <ListItemButton
          sx={sx.listItemButton}
        >
          <ListItemText sx={sx.text} primary={message.content} />
        </ListItemButton>
      </ListItem>
      ))}
    </List>
	)
}

export default AIChatMessages

const sx = {
	listItem: {
		mb: 1,
	},
  listItemIcon: {
    mr: 2,
    width: 4
  },
	listItemButton: {
		p: 1,
		borderRadius: 1,
	},
	text: {
    color: 'text.primary',
		'& .MuiListItemText-primary': {
			whiteSpace: 'pre-line',
		},
	},
}
